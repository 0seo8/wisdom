import { cache } from "react";
import * as cheerio from "cheerio";

export type NoticeSort = "newest" | "best" | "viewed" | "updated";
export type NoticeSearchTarget = "" | "title" | "content" | "member_display";

export interface SourceNoticeReference {
  title: string;
  date: string;
  authorName: string;
  voteCount: number;
  viewCount: number;
  sourceUid: number;
  isNotice: boolean;
  displayNumber: string;
  page: number;
  order: number;
}

const BASE_LIST_URL =
  "https://artswisdom.com/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/";

function decodeHtmlText(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"');
}

export function normalizeNoticeTitle(title: string): string {
  return decodeHtmlText(title).replace(/\s+/g, " ").trim();
}

export function formatNoticeListDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
}

async function fetchHtml(url: string): Promise<string> {
  const response = await fetch(url, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch notice reference: ${response.status}`);
  }

  return response.text();
}

function getQueryString(sort: NoticeSort, page: number): string {
  const params = new URLSearchParams({
    mod: "list",
    pageid: String(page),
  });

  if (sort !== "newest") {
    params.set("kboard_list_sort", sort);
    params.set("kboard_list_sort_remember", "1");
  }

  return params.toString();
}

async function loadNoticeReferences(sort: NoticeSort): Promise<SourceNoticeReference[]> {
  const rows: SourceNoticeReference[] = [];

  for (let page = 1; page <= 20; page += 1) {
    const html = await fetchHtml(`${BASE_LIST_URL}?${getQueryString(sort, page)}`);
    const $ = cheerio.load(html);
    const pageRows: SourceNoticeReference[] = [];

    $(".kboard-list tbody tr").each((index, element) => {
      const titleNode = $(element).find(".kboard-default-cut-strings").first().clone();
      titleNode.find(".kboard-comments-count").remove();

      const title = normalizeNoticeTitle(titleNode.text());
      const date = $(element)
        .find(".kboard-list-date")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ");
      const authorName = $(element).find(".kboard-list-user").first().text().trim();
      const voteCount = Number.parseInt(
        $(element).find(".kboard-list-vote").first().text().replace(/[^0-9]/g, "") || "0",
        10
      );
      const viewCount = Number.parseInt(
        $(element).find(".kboard-list-view").first().text().replace(/[^0-9]/g, "") || "0",
        10
      );
      const uidMatch = $(element)
        .find(".kboard-list-title a")
        .attr("href")
        ?.match(/uid=(\d+)/);
      const displayNumber = $(element).find(".kboard-list-uid").first().text().trim();

      if (!title || !date || !uidMatch) {
        return;
      }

      pageRows.push({
        title,
        date,
        authorName,
        voteCount,
        viewCount,
        sourceUid: Number.parseInt(uidMatch[1], 10),
        isNotice: $(element).hasClass("kboard-list-notice"),
        displayNumber,
        page,
        order: rows.length + index,
      });
    });

    if (pageRows.length === 0) {
      break;
    }

    rows.push(...pageRows);
  }

  return rows;
}

export const getSourceNoticeReferences = cache(
  async (sort: NoticeSort = "newest"): Promise<SourceNoticeReference[]> => {
    return loadNoticeReferences(sort);
  }
);
