const fs = require("fs");
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

function parseSeedNotices(sql) {
  const rows = [];
  const regex = /\(\s*'((?:[^']|'')*)',\s*'([\s\S]*?)',\s*(true|false),\s*(\d+),\s*'([^']+)',\s*'([^']+)'\s*\)/g;
  let match;

  while ((match = regex.exec(sql)) !== null) {
    rows.push({
      title: match[1].replace(/''/g, "'"),
      view_count: Number.parseInt(match[4], 10),
      created_at: match[5],
      updated_at: match[6],
    });
  }

  return rows;
}

async function main() {
  loadEnvFile(".env.local");

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL 또는 SUPABASE_SERVICE_ROLE_KEY가 없습니다.");
  }

  const seedSql = fs.readFileSync("supabase/seed-notices.sql", "utf8");
  const canonicalNotices = parseSeedNotices(seedSql);
  const canonicalTitles = canonicalNotices.map((notice) => notice.title);
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: existingNotices, error: fetchError } = await supabase
    .from("notices")
    .select("id,title,content");

  if (fetchError) {
    throw fetchError;
  }

  for (const canonicalNotice of canonicalNotices) {
    const existing = (existingNotices || []).find((notice) => notice.title === canonicalNotice.title);

    if (!existing) {
      const { error: insertError } = await supabase.from("notices").insert({
        title: canonicalNotice.title,
        content: `${canonicalNotice.title}에 대한 공지사항입니다.`,
        is_published: true,
        view_count: canonicalNotice.view_count,
        created_at: canonicalNotice.created_at,
        updated_at: canonicalNotice.updated_at,
      });

      if (insertError) {
        throw insertError;
      }

      continue;
    }

    const { error: updateError } = await supabase
      .from("notices")
      .update({
        is_published: true,
        view_count: canonicalNotice.view_count,
        created_at: canonicalNotice.created_at,
        updated_at: canonicalNotice.updated_at,
      })
      .eq("id", existing.id);

    if (updateError) {
      throw updateError;
    }
  }

  const nonCanonicalIds = (existingNotices || [])
    .filter((notice) => !canonicalTitles.includes(notice.title))
    .map((notice) => notice.id);

  if (nonCanonicalIds.length > 0) {
    const { error: hideError } = await supabase
      .from("notices")
      .update({ is_published: false })
      .in("id", nonCanonicalIds);

    if (hideError) {
      throw hideError;
    }
  }

  console.log(
    JSON.stringify(
      {
        canonical: canonicalNotices.length,
        hidden: nonCanonicalIds.length,
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
