import { createServerClient } from "@/lib/supabase";
import type { Notice } from "@/types/database";
import {
  formatNoticeListDate,
  getSourceNoticeReferences,
  normalizeNoticeTitle,
  type NoticeSearchTarget,
  type NoticeSort,
  type SourceNoticeReference,
} from "@/lib/source-notice-reference";

export type NoticeRecord = Notice & {
  author_name: string | null;
  vote_count: number;
  source_uid: number | null;
  is_notice: boolean;
  display_number?: string | null;
  source_page?: number | null;
  source_order?: number | null;
};

export interface PaginatedNotices {
  notices: NoticeRecord[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

interface GetNoticesOptions {
  page?: number;
  limit?: number;
  keyword?: string;
  target?: NoticeSearchTarget;
  sort?: NoticeSort;
  sourceLayout?: boolean;
}

function noticeKey(title: string, date: string): string {
  return `${normalizeNoticeTitle(title)}::${date}`;
}

function noticeKeyFromRecord(notice: Notice): string {
  return noticeKey(notice.title, formatNoticeListDate(notice.created_at));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function buildReferenceMaps(rows: SourceNoticeReference[]) {
  const byKey = new Map<string, SourceNoticeReference>();
  const byUid = new Map<number, SourceNoticeReference>();
  const byTitle = new Map<string, SourceNoticeReference>();

  for (const row of rows) {
    const key = noticeKey(row.title, row.date);
    byKey.set(key, row);
    byUid.set(row.sourceUid, row);
    if (!byTitle.has(normalizeNoticeTitle(row.title))) {
      byTitle.set(normalizeNoticeTitle(row.title), row);
    }
  }

  return { byKey, byUid, byTitle };
}

function mergeNoticeRecord(
  notice: Notice,
  maps: ReturnType<typeof buildReferenceMaps>
): NoticeRecord {
  const key = noticeKeyFromRecord(notice);
  const reference =
    (notice.source_uid ? maps.byUid.get(notice.source_uid) : undefined) ||
    maps.byKey.get(key) ||
    maps.byTitle.get(normalizeNoticeTitle(notice.title));

  return {
    ...notice,
    author_name: reference?.authorName ?? notice.author_name ?? "지혜의밭",
    vote_count: reference?.voteCount ?? notice.vote_count ?? 0,
    source_uid: reference?.sourceUid ?? notice.source_uid ?? null,
    is_notice: reference?.isNotice ?? notice.is_notice ?? false,
    display_number: reference?.displayNumber ?? null,
    source_page: reference?.page ?? null,
    source_order: reference?.order ?? null,
  };
}

function sortMergedNotices(
  notices: NoticeRecord[],
  sort: NoticeSort,
  rows: SourceNoticeReference[]
): NoticeRecord[] {
  const orderMap = new Map(rows.map((row, index) => [noticeKey(row.title, row.date), index]));

  if (orderMap.size > 0) {
    return [...notices].sort((a, b) => {
      const aOrder = orderMap.get(noticeKeyFromRecord(a));
      const bOrder = orderMap.get(noticeKeyFromRecord(b));

      if (aOrder !== undefined && bOrder !== undefined) {
        return aOrder - bOrder;
      }

      if (aOrder !== undefined) {
        return -1;
      }

      if (bOrder !== undefined) {
        return 1;
      }

      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });
  }

  const sorted = [...notices];

  if (sort === "viewed") {
    sorted.sort((a, b) => (b.view_count ?? 0) - (a.view_count ?? 0));
  } else if (sort === "best") {
    sorted.sort((a, b) => (b.vote_count ?? 0) - (a.vote_count ?? 0));
  } else if (sort === "updated") {
    sorted.sort(
      (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  } else {
    sorted.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  return sorted;
}

function matchesSearch(
  notice: NoticeRecord,
  keyword: string,
  target: NoticeSearchTarget
): boolean {
  const normalizedKeyword = keyword.toLowerCase();
  const title = notice.title.toLowerCase();
  const content = stripHtml(notice.content).toLowerCase();
  const author = (notice.author_name ?? "").toLowerCase();

  if (target === "title") {
    return title.includes(normalizedKeyword);
  }

  if (target === "content") {
    return content.includes(normalizedKeyword);
  }

  if (target === "member_display") {
    return author.includes(normalizedKeyword);
  }

  return (
    title.includes(normalizedKeyword) ||
    content.includes(normalizedKeyword) ||
    author.includes(normalizedKeyword)
  );
}

export async function getNotices({
  page = 1,
  limit = 10,
  keyword,
  target = "",
  sort = "newest",
  sourceLayout = false,
}: GetNoticesOptions = {}): Promise<PaginatedNotices> {
  const supabase = await createServerClient();
  const currentPage = Math.max(page, 1);

  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching notices:", error);
    return {
      notices: [],
      totalCount: 0,
      totalPages: 0,
      currentPage,
    };
  }

  const allRows = (data ?? []) as Notice[];

  let newestRows: SourceNoticeReference[] = [];
  let sortRows: SourceNoticeReference[] = [];

  try {
    newestRows = await getSourceNoticeReferences("newest");
    sortRows = sort === "newest" ? newestRows : await getSourceNoticeReferences(sort);
  } catch (referenceError) {
    console.error("Error fetching source notice reference:", referenceError);
  }

  const maps = buildReferenceMaps(newestRows.length ? newestRows : sortRows);
  let merged = allRows.map((notice) => mergeNoticeRecord(notice, maps));

  const normalizedKeyword = keyword?.trim();

  if (normalizedKeyword) {
    merged = merged.filter((notice) =>
      matchesSearch(notice, normalizedKeyword, target)
    );
  }

  const sorted = sortMergedNotices(merged, sort, sortRows);

  if (sourceLayout && !normalizedKeyword && sortRows.length > 0) {
    const maxPage = Math.max(...sortRows.map((row) => row.page));
    const pageRows = sortRows.filter((row) => row.page === currentPage);
    const sortedMap = new Map(sorted.map((notice) => [noticeKeyFromRecord(notice), notice]));
    const notices = pageRows
      .map((row) => sortedMap.get(noticeKey(row.title, row.date)))
      .filter((notice): notice is NoticeRecord => Boolean(notice));

    return {
      notices,
      totalCount: newestRows.length || sortRows.length,
      totalPages: maxPage,
      currentPage,
    };
  }

  const totalCount = sorted.length;
  const totalPages = Math.ceil(totalCount / limit);
  const offset = (currentPage - 1) * limit;

  return {
    notices: sorted.slice(offset, offset + limit),
    totalCount,
    totalPages,
    currentPage,
  };
}

export async function getNoticeById(id: number): Promise<NoticeRecord | null> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("Error fetching notice:", error);
    return null;
  }

  try {
    const references = await getSourceNoticeReferences("newest");
    return mergeNoticeRecord(data as Notice, buildReferenceMaps(references));
  } catch (referenceError) {
    console.error("Error merging source notice reference:", referenceError);
    return {
      ...(data as Notice),
      author_name: (data as Notice).author_name ?? "지혜의밭",
      vote_count: (data as Notice).vote_count ?? 0,
      source_uid: (data as Notice).source_uid ?? null,
      is_notice: (data as Notice).is_notice ?? false,
    };
  }
}

export async function getAdjacentNotices(id: number): Promise<{
  prev: NoticeRecord | null;
  next: NoticeRecord | null;
}> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("notices")
    .select("*")
    .eq("is_published", true);

  if (error) {
    console.error("Error fetching adjacent notices:", error);
    return { prev: null, next: null };
  }

  const notices = (data ?? []) as Notice[];
  const current = notices.find((notice) => notice.id === id);

  if (!current) {
    return { prev: null, next: null };
  }

  let merged = notices.map((notice) => ({
    ...notice,
    author_name: notice.author_name ?? "지혜의밭",
    vote_count: notice.vote_count ?? 0,
    source_uid: notice.source_uid ?? null,
    is_notice: notice.is_notice ?? false,
  })) as NoticeRecord[];

  try {
    const references = await getSourceNoticeReferences("newest");
    const maps = buildReferenceMaps(references);
    merged = notices.map((notice) => mergeNoticeRecord(notice, maps));
  } catch (referenceError) {
    console.error("Error fetching adjacent source notice reference:", referenceError);
  }

  const currentNotice = merged.find((notice) => notice.id === id);

  if (!currentNotice) {
    return { prev: null, next: null };
  }

  if (currentNotice.source_uid) {
    const prev = merged
      .filter((notice) => notice.source_uid && notice.source_uid < currentNotice.source_uid!)
      .sort((a, b) => (b.source_uid ?? 0) - (a.source_uid ?? 0))[0] ?? null;
    const next = merged
      .filter((notice) => notice.source_uid && notice.source_uid > currentNotice.source_uid!)
      .sort((a, b) => (a.source_uid ?? 0) - (b.source_uid ?? 0))[0] ?? null;

    return { prev, next };
  }

  const ordered = [...merged].sort(
    (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );
  const index = ordered.findIndex((notice) => notice.id === id);

  return {
    prev: index > 0 ? ordered[index - 1] : null,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null,
  };
}

export async function incrementViewCount(id: number): Promise<void> {
  const supabase = await createServerClient();

  const { data } = await supabase.from("notices").select("*").eq("id", id).single();

  if (data) {
    const notice = data as Notice;
    await supabase
      .from("notices")
      .update({ view_count: (notice.view_count ?? 0) + 1 } as never)
      .eq("id", id);
  }
}

export async function getNotice(id: number): Promise<NoticeRecord | null> {
  const notice = await getNoticeById(id);
  if (notice) {
    await incrementViewCount(id);
  }
  return notice;
}
