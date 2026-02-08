import { createServerClient } from "@/lib/supabase";
import type { Researcher } from "@/types/database";

export async function getResearchers(): Promise<Researcher[]> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("researchers")
    .select("*")
    .eq("is_active", true)
    .order("order", { ascending: true });

  if (error) {
    console.error("Error fetching researchers:", error);
    return [];
  }

  return data ?? [];
}

export async function getResearcher(id: number): Promise<Researcher | null> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("researchers")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching researcher:", error);
    return null;
  }

  return data;
}
