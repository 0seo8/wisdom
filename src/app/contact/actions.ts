"use server";

import { createClient as createAdminClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(formData: FormData) {
  const attachment = formData.get("attachment");
  const organization = (formData.get("organization") as string) || "";
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
    let attachmentUrl: string | null = null;

    if (attachment instanceof File && attachment.size > 0) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

      if (!supabaseUrl || !serviceRoleKey) {
        return { success: false, error: "첨부파일 업로드 설정이 없습니다." };
      }

      const adminSupabase = createAdminClient(supabaseUrl, serviceRoleKey);
      const extension = attachment.name.includes(".")
        ? attachment.name.split(".").pop()
        : "bin";
      const path = `inquiries/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
      const bytes = Buffer.from(await attachment.arrayBuffer());

      const { error: uploadError } = await adminSupabase.storage
        .from("images")
        .upload(path, bytes, {
          contentType: attachment.type || "application/octet-stream",
          upsert: false,
        });

      if (uploadError) {
        console.error("Attachment upload error:", uploadError);
        return { success: false, error: "첨부파일 업로드 중 오류가 발생했습니다." };
      }

      const { data: publicUrlData } = adminSupabase.storage.from("images").getPublicUrl(path);
      attachmentUrl = publicUrlData.publicUrl;
    }

    const insertPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: organization
        ? `[소속(단체)] ${organization}\n\n${data.message}`
        : data.message,
      attachment_url: attachmentUrl,
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
