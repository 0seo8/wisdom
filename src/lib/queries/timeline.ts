import { createServerClient } from "@/lib/supabase";
import type { Timeline } from "@/types/database";

export async function getTimeline(): Promise<Timeline[]> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("timeline")
    .select("*")
    .eq("is_active", true)
    .order("year", { ascending: false })
    .order("order", { ascending: true });

  if (error) {
    console.error("Error fetching timeline:", error);
    return [];
  }

  return data ?? [];
}
