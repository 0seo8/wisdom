"use server";

import { createServerClient } from "@/lib/supabase";
import type { InsertTables } from "@/types/database";

type InquiryInput = Omit<InsertTables<"inquiries">, "id" | "created_at" | "is_read" | "is_replied">;

export async function submitInquiry(input: InquiryInput): Promise<{ success: boolean; error?: string }> {
  const supabase = await createServerClient();

  const { error } = await supabase.from("inquiries").insert({
    name: input.name,
    email: input.email,
    phone: input.phone ?? null,
    message: input.message,
    attachment_url: input.attachment_url ?? null,
  } as never);

  if (error) {
    console.error("Error submitting inquiry:", error);
    return { success: false, error: "문의 등록에 실패했습니다. 다시 시도해주세요." };
  }

  return { success: true };
}
