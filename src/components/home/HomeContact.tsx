"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/common";
import { submitContactForm } from "@/app/contact/actions";

const homeContactSchema = z.object({
  name: z.string().min(2, "이름을 2자 이상 입력해주세요"),
  organization: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해주세요"),
  privacyConsent: z.literal(true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

type HomeContactFormData = z.infer<typeof homeContactSchema>;

export function HomeContact() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    },
  });

  const onSubmit = async (data: HomeContactFormData) => {
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, String(value));
        }
      });

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-700 text-sm">
            문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name and Organization Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="home-name" className="block text-sm font-medium text-gray-700 mb-1.5">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="home-name"
              type="text"
              placeholder="홍길동"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors bg-gray-50`}
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "home-name-error" : undefined}
            />
            {errors.name && (
              <p id="home-name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="home-organization" className="block text-sm font-medium text-gray-700 mb-1.5">
              소속(단체)
            </label>
            <input
              id="home-organization"
              type="text"
              placeholder="회사/단체명"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:ring-opacity-50 transition-colors bg-gray-50"
              {...register("organization")}
            />
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="home-email" className="block text-sm font-medium text-gray-700 mb-1.5">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              id="home-email"
              type="email"
              placeholder="example@email.com"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors bg-gray-50`}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "home-email-error" : undefined}
            />
            {errors.email && (
              <p id="home-email-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="home-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              전화번호 <span className="text-red-500">*</span>
            </label>
            <input
              id="home-phone"
              type="tel"
              placeholder="010-0000-0000"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors bg-gray-50`}
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "home-phone-error" : undefined}
            />
            {errors.phone && (
              <p id="home-phone-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="home-message" className="block text-sm font-medium text-gray-700 mb-1.5">
            문의 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="home-message"
            rows={5}
            placeholder="문의하실 내용을 입력해주세요"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
            } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-none bg-gray-50`}
            {...register("message")}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-1.5 text-sm text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Privacy Consent */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 rounded border-gray-300 text-[var(--color-orange)] focus:ring-[var(--color-orange)] focus:ring-opacity-50"
              {...register("privacyConsent")}
              aria-invalid={errors.privacyConsent ? "true" : "false"}
              aria-describedby={errors.privacyConsent ? "privacy-error" : undefined}
            />
            <div>
              <span className="text-sm text-gray-700">
                <span className="text-red-500">*</span> 개인정보 수집 및 이용에 동의합니다
              </span>
              <p className="text-xs text-gray-500 mt-1">
                수집 항목: 이름, 이메일, 전화번호 / 이용 목적: 문의 답변 및 안내 / 보유 기간: 목적 달성 후 즉시 파기
              </p>
            </div>
          </label>
          {errors.privacyConsent && (
            <p id="privacy-error" className="mt-2 text-sm text-red-500" role="alert">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              전송 중...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              문의하기
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
