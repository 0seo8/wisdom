"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle, UploadCloud } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-transparent"
    >
      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
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
          className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">
            문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-[15px] font-bold text-gray-800 mb-2">
            이름
          </label>
          <input
            id="name"
            type="text"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.name ? "border-red-300" : "border-gray-200"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors rounded-sm shadow-sm`}
            {...register("name")}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Organization Field */}
        <div>
          <label htmlFor="organization" className="block text-[15px] font-bold text-gray-800 mb-2">
            소속(단체)
          </label>
          <input
            id="organization"
            type="text"
            className="w-full px-4 py-2.5 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors rounded-sm shadow-sm"
            {...register("organization")}
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-[15px] font-bold text-gray-800 mb-2">
            이메일
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.email ? "border-red-300" : "border-gray-200"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors rounded-sm shadow-sm`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-[15px] font-bold text-gray-800 mb-2">
            연락처
          </label>
          <input
            id="phone"
            type="tel"
            className={`w-full px-4 py-2.5 bg-white border ${
              errors.phone ? "border-red-300" : "border-gray-200"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors rounded-sm shadow-sm`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-[15px] font-bold text-gray-800 mb-2">
            문의내용
          </label>
          <textarea
            id="message"
            rows={10}
            className={`w-full px-4 py-3 bg-white border ${
              errors.message ? "border-red-300" : "border-gray-200"
            } focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors rounded-sm shadow-sm resize-none`}
            {...register("message")}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* File Upload Section */}
        <div>
          <label className="block text-[15px] font-bold text-gray-800 mb-2 transition-all">
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
              className="flex flex-col items-center justify-center gap-3 w-full h-40 border border-gray-200 border-dashed bg-white cursor-pointer hover:bg-gray-50 transition-colors rounded-sm"
            >
              <UploadCloud className="w-10 h-10 text-gray-300" />
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  {fileName || "Click or drag a file to this area to upload."}
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Privacy Consent */}
        <div className="flex items-center gap-3 py-4">
          <input
            type="checkbox"
            id="privacyConsent"
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            {...register("privacyConsent")}
          />
          <label htmlFor="privacyConsent" className="text-[14px] text-gray-800 cursor-pointer select-none">
            개인정보 활용 동의, 개인정보는 답변용으로만 활용됩니다.
          </label>
          {errors.privacyConsent && (
            <p className="text-xs text-red-500 ml-2">{errors.privacyConsent.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-[#eeeeee] text-gray-800 text-sm font-medium border border-gray-300 hover:bg-gray-200 disabled:opacity-50 transition-all flex items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                보내는 중...
              </>
            ) : (
              "보내기"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
