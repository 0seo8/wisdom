"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Inbox, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

const homeContactSchema = z.object({
  name: z.string().min(2, "이름을 2자 이상 입력해주세요"),
  organization: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  message: z.string().min(1, "문의 내용을 입력해주세요"),
  privacyConsent: z.literal(true, {
    message: "개인정보 활용 동의가 필요합니다.",
  }),
});

type HomeContactFormData = z.infer<typeof homeContactSchema>;

export function HomeContact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [attachment, setAttachment] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<HomeContactFormData>({
    resolver: zodResolver(homeContactSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
      privacyConsent: true,
    },
  });

  const onSubmit = async (data: HomeContactFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      if (attachment) {
        formData.append("attachment", attachment);
      }

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        setAttachment(null);
        reset({
          name: "",
          organization: "",
          email: "",
          phone: "",
          message: "",
          privacyConsent: true,
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="w-full font-['Noto_Sans_KR','Apple_SD_Gothic_Neo','Malgun_Gothic',sans-serif]">
      {submitStatus === "success" && (
        <div className="mb-3 border border-[#b7d7b9] bg-[#f4fff4] px-3 py-2 text-[14px] text-[#2f6b33]">
          문의가 성공적으로 접수되었습니다.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-3 border border-[#e6b8b8] bg-[#fff6f6] px-3 py-2 text-[14px] text-[#8f2b2b]">
          문의 접수 중 오류가 발생했습니다.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <input
          type="text"
          placeholder="이름"
          className={`w-full border px-4 py-[11px] text-[15px] text-[#333] placeholder:text-[#8a8a8a] focus:outline-none ${
            errors.name ? "border-[#cc6666]" : "border-[#d6d6d6]"
          }`}
          {...register("name")}
        />

        <input
          type="text"
          placeholder="소속(단체)"
          className="w-full border border-[#d6d6d6] px-4 py-[11px] text-[15px] text-[#333] placeholder:text-[#8a8a8a] focus:outline-none"
          {...register("organization")}
        />

        <input
          type="email"
          placeholder="이메일"
          className={`w-full border px-4 py-[11px] text-[15px] text-[#333] placeholder:text-[#8a8a8a] focus:outline-none ${
            errors.email ? "border-[#cc6666]" : "border-[#d6d6d6]"
          }`}
          {...register("email")}
        />

        <input
          type="text"
          placeholder="전화번호"
          className={`w-full border px-4 py-[11px] text-[15px] text-[#333] placeholder:text-[#8a8a8a] focus:outline-none ${
            errors.phone ? "border-[#cc6666]" : "border-[#d6d6d6]"
          }`}
          {...register("phone")}
        />

        <textarea
          rows={5}
          placeholder="문의 내용"
          className={`w-full resize-none border px-4 py-3 text-[15px] text-[#333] placeholder:text-[#8a8a8a] focus:outline-none ${
            errors.message ? "border-[#cc6666]" : "border-[#d6d6d6]"
          }`}
          {...register("message")}
        />

        <div>
          <label className="mb-1 block text-[15px] text-[#242424]">첨부파일</label>
          <label className="flex min-h-[112px] cursor-pointer flex-col items-center justify-center border border-[#d6d6d6] bg-white px-4 py-5 text-center">
            <Inbox className="mb-3 h-[42px] w-[42px] text-[#b1b1b1]" strokeWidth={1.6} />
            <span className="text-[14px] text-[#6b6b6b]">
              {attachment ? attachment.name : "Click or drag a file to this area to upload."}
            </span>
            <input
              type="file"
              className="hidden"
              onChange={(event) => {
                const file = event.target.files?.[0] ?? null;
                setAttachment(file);
              }}
            />
          </label>
        </div>

        <label className="flex items-start gap-2 text-[14px] text-[#222]">
          <input
            type="checkbox"
            className="mt-[2px] h-4 w-4 border border-[#bfbfbf]"
            {...register("privacyConsent")}
          />
          <span>개인정보 활용 동의, 개인정보는 답변용으로만 활용됩니다.</span>
        </label>
        {errors.privacyConsent && (
          <p className="text-[13px] text-[#c64848]">{errors.privacyConsent.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-[42px] min-w-[120px] items-center justify-center bg-[#85544D] px-7 text-[15px] font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isSubmitting ? "문의글을 제출 중입니다." : "보내기"}
        </button>
      </form>
    </div>
  );
}
