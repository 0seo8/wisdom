import { createServerClient } from "@/lib/supabase";
import type { Program } from "@/types/database";

type ProgramCategory = "healasoma" | "somatic-lab" | "daily-art" | "business";

export async function getPrograms(category?: ProgramCategory): Promise<Program[]> {
  const supabase = await createServerClient();

  let query = supabase
    .from("programs")
    .select("*")
    .eq("is_active", true)
    .order("order", { ascending: true });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching programs:", error);
    return [];
  }

  return data ?? [];
}

export async function getProgram(slug: string): Promise<Program | null> {
  const supabase = await createServerClient();

  const { data, error } = await supabase
    .from("programs")
    .select("*")
    .eq("slug", slug)
    .eq("is_active", true)
    .single();

  if (error) {
    console.error("Error fetching program:", error);
    return null;
  }

  return data;
}
