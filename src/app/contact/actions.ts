"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || null,
    message: formData.get("message") as string,
  };

  if (!data.name || !data.email || !data.message) {
    return { success: false, error: "필수 항목을 입력해주세요." };
  }

  try {
    const supabase = await createClient();

    const insertPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from("inquiries").insert(insertPayload);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: "문의 접수 중 오류가 발생했습니다." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." };
  }
}
