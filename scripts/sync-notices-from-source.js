const fs = require("fs");
const cheerio = require("cheerio");
const { createClient } = require("@supabase/supabase-js");

const BASE_LIST_URL = "https://artswisdom.com/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/?mod=list&pageid=";

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

async function fetchHtml(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

async function fetchNoticeLinks(page) {
  const html = await fetchHtml(`${BASE_LIST_URL}${page}`);
  const $ = cheerio.load(html);
  const rows = [];

  $(".kboard-list tbody tr").each((_, element) => {
    const link = $(element).find(".kboard-list-title a").attr("href");
    const dateText = $(element).find(".kboard-list-date").text().trim();

    if (!link || !link.includes("uid=")) {
      return;
    }

    rows.push({
      url: link.startsWith("http") ? link : `https://artswisdom.com${link.startsWith("/") ? "" : "/"}${link}`,
      listDate: dateText,
    });
  });

  return rows;
}

function parseDate(dateText) {
  const normalized = dateText.replace(/\./g, "-").replace(/\s+/g, " ").trim();
  const parsed = new Date(normalized);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
}

async function scrapeNotice(url, fallbackDate) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const title = $(".kboard-title h1").text().trim();
  const content = $(".content-view").html() || "";
  const dateText = $(".detail-date .detail-value").text().trim();
  const viewCountText = $(".detail-view .detail-value").text().trim().replace(/[^0-9]/g, "");

  if (!title) {
    return null;
  }

  return {
    title,
    content,
    created_at: parseDate(dateText) || parseDate(fallbackDate) || new Date().toISOString(),
    view_count: Number.parseInt(viewCountText || "0", 10),
    is_published: true,
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
  const notices = [];

  for (let page = 1; page < 100; page += 1) {
    const rows = await fetchNoticeLinks(page);
    if (rows.length === 0) {
      break;
    }

    for (const row of rows) {
      const notice = await scrapeNotice(row.url, row.listDate);
      if (notice) {
        notices.push(notice);
      }
    }
  }

  const deduped = Array.from(
    new Map(notices.map((notice) => [`${notice.title}::${notice.created_at}`, notice])).values()
  );

  const { error: deleteError } = await supabase.from("notices").delete().neq("id", 0);
  if (deleteError) {
    throw deleteError;
  }

  const { error: insertError } = await supabase.from("notices").insert(deduped);
  if (insertError) {
    throw insertError;
  }

  console.log(JSON.stringify({ notices: deduped.length }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
