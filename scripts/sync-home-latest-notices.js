const fs = require("fs");
const cheerio = require("cheerio");
const { createClient } = require("@supabase/supabase-js");

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

function parseDate(dateText) {
  const parsed = new Date(dateText.replace(/\./g, "-").trim());
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }

  return parsed.toISOString();
}

async function scrapeLatestRows() {
  const html = await fetchHtml("https://artswisdom.com/");
  const $ = cheerio.load(html);
  const rows = [];

  $("#kboard-default-latest tbody tr").each((_, element) => {
    const href = $(element).find(".kboard-latest-title a").attr("href");
    const title = $(element).find(".kboard-default-cut-strings").text().trim();
    const date = $(element).find(".kboard-latest-date").text().trim();

    if (!href || !title || !date) {
      return;
    }

    rows.push({
      href,
      title,
      date,
    });
  });

  return rows;
}

async function scrapeNoticeDetail(url, fallbackDate) {
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  return {
    title: $(".kboard-title h1").text().trim(),
    content: $(".content-view").html() || "",
    created_at: parseDate($(".detail-date .detail-value").text().trim()) || parseDate(fallbackDate) || new Date().toISOString(),
    view_count: Number.parseInt(
      $(".detail-view .detail-value").text().trim().replace(/[^0-9]/g, "") || "0",
      10
    ),
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
  const latestRows = await scrapeLatestRows();
  const latestTitles = latestRows.map((row) => row.title);
  const oldestDate = parseDate(latestRows[latestRows.length - 1]?.date || "");

  for (const row of latestRows) {
    const detail = await scrapeNoticeDetail(row.href, row.date);
    const { data: existing } = await supabase
      .from("notices")
      .select("id")
      .eq("title", detail.title)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase.from("notices").update(detail).eq("id", existing.id);
      if (error) {
        throw error;
      }
    } else {
      const { error } = await supabase.from("notices").insert(detail);
      if (error) {
        throw error;
      }
    }
  }

  if (oldestDate) {
    const { data: recentNotices, error } = await supabase
      .from("notices")
      .select("id,title")
      .gte("created_at", oldestDate)
      .eq("is_published", true);

    if (error) {
      throw error;
    }

    const staleIds = (recentNotices || [])
      .filter((notice) => !latestTitles.includes(notice.title))
      .map((notice) => notice.id);

    if (staleIds.length > 0) {
      const { error: hideError } = await supabase
        .from("notices")
        .update({ is_published: false })
        .in("id", staleIds);

      if (hideError) {
        throw hideError;
      }
    }
  }

  console.log(JSON.stringify({ notices: latestRows.length }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
