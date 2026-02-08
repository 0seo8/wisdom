"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle, Paperclip } from "lucide-react";
import { Button } from "@/components/common";
import { submitContactForm } from "@/app/contact/actions";

const contactSchema = z.object({
  name: z.string().min(2, "이름을 2자 이상 입력해주세요"),
  organization: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  message: z.string().min(10, "문의 내용을 10자 이상 입력해주세요"),
  privacyConsent: z.literal(true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
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
        setFileName(null);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">문의 양식</h2>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-700 text-sm">
            문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.
          </p>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name and Organization Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              이름 <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="홍길동"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1.5">
              소속
            </label>
            <input
              id="organization"
              type="text"
              placeholder="회사/단체명"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] focus:ring-opacity-50 transition-colors"
              {...register("organization")}
            />
          </div>
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
              전화번호 <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="010-0000-0000"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
              } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors`}
              {...register("phone")}
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1.5 text-sm text-red-500" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            문의 내용 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="문의하실 내용을 입력해주세요"
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:ring-[var(--color-orange)]"
            } focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors resize-none`}
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

        {/* File Upload */}
        <div>
          <label htmlFor="attachment" className="block text-sm font-medium text-gray-700 mb-1.5">
            첨부파일
          </label>
          <div className="relative">
            <input
              id="attachment"
              type="file"
              className="hidden"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.hwp,.jpg,.jpeg,.png"
            />
            <label
              htmlFor="attachment"
              className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-gray-200 border-dashed cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <Paperclip className="w-5 h-5 text-gray-400" />
              <span className="text-gray-500 text-sm">
                {fileName || "파일을 선택하세요 (PDF, DOC, HWP, 이미지)"}
              </span>
            </label>
          </div>
          <p className="mt-1 text-xs text-gray-400">최대 10MB까지 첨부 가능합니다</p>
        </div>

        {/* Privacy Consent */}
        <div className="bg-gray-50 rounded-xl p-4">
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
    </motion.div>
  );
}
