import { createServerClient } from "@/lib/supabase";
import type { Certification } from "@/types/database";

type CertificationCategory = "trademark" | "copyright" | "certification" | "award";

export async function getCertifications(
  category?: CertificationCategory
): Promise<Certification[]> {
  const supabase = await createServerClient();

  let query = supabase
    .from("certifications")
    .select("*")
    .eq("is_active", true)
    .order("order", { ascending: true });

  if (category) {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }

  return data ?? [];
}
