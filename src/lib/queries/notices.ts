import { createServerClient } from "@/lib/supabase";
import type { Notice } from "@/types/database";

export interface PaginatedNotices {
  notices: Notice[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
}

export async function getNotices(
  page: number = 1,
  limit: number = 10,
  search?: string
): Promise<PaginatedNotices> {
  const supabase = await createServerClient();
  const offset = (page - 1) * limit;

  let query = supabase
    .from("notices")
    .select("*", { count: "exact" })
    .eq("is_published", true);

  if (search && search.trim()) {
    query = query.ilike("title", `%${search.trim()}%`);
  }

  const { data, error, count } = await query
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Error fetching notices:", error);
    return {
      notices: [],
      totalCount: 0,
      totalPages: 0,
      currentPage: page,
    };
  }

  const totalCount = count ?? 0;
  const totalPages = Math.ceil(totalCount / limit);

  return {
    notices: data ?? [],
    totalCount,
    totalPages,
    currentPage: page,
  };
}

export async function getNoticeById(id: number): Promise<Notice | null> {
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

  return data as Notice;
}

export async function getAdjacentNotices(id: number): Promise<{
  prev: Notice | null;
  next: Notice | null;
}> {
  const supabase = await createServerClient();

  // Get current notice to find its created_at
  const { data: current } = await supabase
    .from("notices")
    .select("*")
    .eq("id", id)
    .eq("is_published", true)
    .single();

  if (!current) {
    return { prev: null, next: null };
  }

  const currentNotice = current as Notice;

  // Get previous notice (older)
  const { data: prevData } = await supabase
    .from("notices")
    .select("*")
    .eq("is_published", true)
    .lt("created_at", currentNotice.created_at)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  // Get next notice (newer)
  const { data: nextData } = await supabase
    .from("notices")
    .select("*")
    .eq("is_published", true)
    .gt("created_at", currentNotice.created_at)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  return {
    prev: prevData as Notice | null,
    next: nextData as Notice | null,
  };
}

export async function incrementViewCount(id: number): Promise<void> {
  const supabase = await createServerClient();

  // Get current view count
  const { data } = await supabase
    .from("notices")
    .select("*")
    .eq("id", id)
    .single();

  if (data) {
    const notice = data as Notice;
    await supabase
      .from("notices")
      .update({ view_count: (notice.view_count ?? 0) + 1 } as never)
      .eq("id", id);
  }
}

// Legacy exports for backward compatibility
export async function getNotice(id: number): Promise<Notice | null> {
  const notice = await getNoticeById(id);
  if (notice) {
    await incrementViewCount(id);
  }
  return notice;
}
