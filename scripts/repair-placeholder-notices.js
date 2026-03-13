const fs = require("fs");
const cheerio = require("cheerio");
const { createClient } = require("@supabase/supabase-js");

const BASE_LIST_URL = "https://artswisdom.com/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/?mod=list&pageid=";
const PLACEHOLDER_PATTERN = /에 대한 공지사항입니다\.?\s*자세한 내용은 추후 업데이트됩니다\.?/;

function loadEnvFile(filePath) {
  const pairs = fs
    .readFileSync(filePath, "utf8")
    .split(/\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  for (const line of pairs) {
    const separatorIndex = line.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex);
    const value = line.slice(separatorIndex + 1);
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

function normalizeTitle(title) {
  return title
    .replace(/''/g, "'")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
}

async function fetchHtml(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function fetchNoticeIndex() {
  const index = new Map();

  for (let page = 1; page <= 20; page += 1) {
    const html = await fetchHtml(`${BASE_LIST_URL}${page}`);
    const $ = cheerio.load(html);
    const rows = $(".kboard-list tbody tr");

    if (rows.length === 0) {
      break;
    }

    rows.each((_, element) => {
      const anchor = $(element).find(".kboard-list-title a");
      const href = anchor.attr("href");
      const title = normalizeTitle(anchor.text());

      if (!href || !title) {
        return;
      }

      const absoluteHref = href.startsWith("http")
        ? href
        : `https://artswisdom.com${href.startsWith("/") ? "" : "/"}${href}`;

      if (!index.has(title)) {
        index.set(title, absoluteHref);
      }
    });
  }

  return index;
}

async function scrapeNoticeDetail(url) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const title = normalizeTitle($(".kboard-title h1").text());
  const content = $(".content-view").html() || "";
  const detailDateText = $(".detail-date .detail-value").text().trim();
  const detailViewsText = $(".detail-view .detail-value").text().trim().replace(/[^0-9]/g, "");

  return {
    title,
    content,
    created_at: detailDateText
      ? new Date(detailDateText.replace(/\./g, "-")).toISOString()
      : null,
    view_count: Number.parseInt(detailViewsText || "0", 10),
  };
}

async function main() {
  loadEnvFile(".env.local");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL 또는 SUPABASE_SERVICE_ROLE_KEY가 없습니다.");
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data: notices, error } = await supabase
    .from("notices")
    .select("id,title,content")
    .eq("is_published", true);

  if (error) {
    throw error;
  }

  const placeholders = (notices || []).filter((notice) => PLACEHOLDER_PATTERN.test(notice.content || ""));
  const noticeIndex = await fetchNoticeIndex();
  const unresolved = [];
  let repaired = 0;

  for (const notice of placeholders) {
    const normalizedTitle = normalizeTitle(notice.title);
    const detailUrl = noticeIndex.get(normalizedTitle);

    if (!detailUrl) {
      unresolved.push(notice.title);
      continue;
    }

    const detail = await scrapeNoticeDetail(detailUrl);
    if (!detail.content) {
      unresolved.push(notice.title);
      continue;
    }

    const payload = {
      content: detail.content,
      view_count: Number.isNaN(detail.view_count) ? 0 : detail.view_count,
    };

    if (detail.created_at && !Number.isNaN(new Date(detail.created_at).getTime())) {
      payload.created_at = detail.created_at;
    }

    const { error: updateError } = await supabase
      .from("notices")
      .update(payload)
      .eq("id", notice.id);

    if (updateError) {
      throw updateError;
    }

    repaired += 1;
  }

  console.log(
    JSON.stringify(
      {
        placeholders: placeholders.length,
        repaired,
        unresolved,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
