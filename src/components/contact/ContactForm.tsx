"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/app/contact/actions";

const contactSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  organization: z.string().optional(),
  email: z.string().email("올바른 이메일 주소를 입력해주세요"),
  phone: z.string().min(1, "전화번호를 입력해주세요"),
  message: z.string().min(1, "문의 내용을 입력해주세요"),
  privacyConsent: z.literal(true, {
    message: "개인정보 수집에 동의해주세요",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<File | null>(null);

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
      privacyConsent: true,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("organization", data.organization || "");
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("message", data.message);
      formData.append("privacyConsent", String(data.privacyConsent));

      if (attachment) {
        formData.append("attachment", attachment);
      }

      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus("success");
        reset();
        setFileName(null);
        setAttachment(null);
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
      setAttachment(file);
      setFileName(file.name);
    } else {
      setAttachment(null);
      setFileName(null);
    }
  };

  return (
    <div className="contact-wpforms wpforms-container wpforms-container-full" id="wpforms-2263">
      {submitStatus === "success" && (
        <div className="wpforms-status mb-5 flex items-start gap-3 border border-[#bfd8bf] bg-[#edf7ed] px-4 py-3 text-[14px] text-[#2b6d2b]">
          <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-600" />
          <p>문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="wpforms-status mb-5 flex items-start gap-3 border border-[#edc4c4] bg-[#fbefef] px-4 py-3 text-[14px] text-[#9f2f2f]">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
          <p>문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
        </div>
      )}

      <form
        id="wpforms-form-2263"
        className="wpforms-validate wpforms-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <noscript className="wpforms-error-noscript">
          이 양식을 작성하려면 브라우저에서 JavaScript를 활성화하십시오.
        </noscript>

        <div className="wpforms-field-container">
          <div
            id="wpforms-2263-field_0-container"
            className="wpforms-field wpforms-field-name"
            data-field-id="0"
          >
            <label className="wpforms-field-label wpforms-label-hide" htmlFor="wpforms-2263-field_0">
              이름 <span className="wpforms-required-label">*</span>
            </label>
            <input
              id="wpforms-2263-field_0"
              type="text"
              className="wpforms-field-large wpforms-field-required"
              placeholder="이름"
              {...register("name")}
            />
            {errors.name && <p className="wpforms-field-error">{errors.name.message}</p>}
          </div>

          <div
            id="wpforms-2263-field_33-container"
            className="wpforms-field wpforms-field-text"
            data-field-id="33"
          >
            <label className="wpforms-field-label wpforms-label-hide" htmlFor="wpforms-2263-field_33">
              소속(단체)
            </label>
            <input
              id="wpforms-2263-field_33"
              type="text"
              className="wpforms-field-large"
              placeholder="소속(단체)"
              {...register("organization")}
            />
          </div>

          <div
            id="wpforms-2263-field_1-container"
            className="wpforms-field wpforms-field-email"
            data-field-id="1"
          >
            <label className="wpforms-field-label wpforms-label-hide" htmlFor="wpforms-2263-field_1">
              이메일 <span className="wpforms-required-label">*</span>
            </label>
            <input
              id="wpforms-2263-field_1"
              type="email"
              className="wpforms-field-large wpforms-field-required"
              placeholder="이메일"
              {...register("email")}
            />
            {errors.email && <p className="wpforms-field-error">{errors.email.message}</p>}
          </div>

          <div
            id="wpforms-2263-field_7-container"
            className="wpforms-field wpforms-field-text"
            data-field-id="7"
          >
            <label className="wpforms-field-label wpforms-label-hide" htmlFor="wpforms-2263-field_7">
              전화번호 <span className="wpforms-required-label">*</span>
            </label>
            <input
              id="wpforms-2263-field_7"
              type="text"
              className="wpforms-field-large wpforms-field-required"
              placeholder="전화번호"
              {...register("phone")}
            />
            {errors.phone && <p className="wpforms-field-error">{errors.phone.message}</p>}
          </div>

          <div
            id="wpforms-2263-field_22-container"
            className="wpforms-field wpforms-field-textarea"
            data-field-id="22"
          >
            <label className="wpforms-field-label wpforms-label-hide" htmlFor="wpforms-2263-field_22">
              문의 내용 <span className="wpforms-required-label">*</span>
            </label>
            <textarea
              id="wpforms-2263-field_22"
              className="wpforms-field-medium wpforms-field-required"
              placeholder="문의 내용"
              {...register("message")}
            />
            {errors.message && <p className="wpforms-field-error">{errors.message.message}</p>}
          </div>

          <div
            id="wpforms-2263-field_27-container"
            className="wpforms-field wpforms-field-file-upload"
            data-field-id="27"
          >
            <label className="wpforms-field-label" htmlFor="wpforms-2263-field_27">
              첨부파일
            </label>
            <div className="wpforms-uploader">
              <label className="dz-message" htmlFor="wpforms-2263-field_27">
                <svg
                  viewBox="0 0 1024 1024"
                  focusable="false"
                  width="50px"
                  height="50px"
                  fill="#B1B1B1"
                  aria-hidden="true"
                >
                  <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z" />
                </svg>
                <span className="modern-title">
                  {fileName || "Click or drag a file to this area to upload."}
                </span>
              </label>
              <input
                type="file"
                className="dropzone-input"
                id="wpforms-2263-field_27"
                name="attachment"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.hwp"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div
            id="wpforms-2263-field_5-container"
            className="wpforms-field wpforms-field-checkbox"
            data-field-id="5"
          >
            <label
              className="wpforms-field-label wpforms-label-hide"
              htmlFor="wpforms-2263-field_5_1"
            >
              개인정보활용동의 <span className="wpforms-required-label">*</span>
            </label>
            <ul id="wpforms-2263-field_5" className="wpforms-field-required">
              <li className="choice-1 depth-1 wpforms-selected">
                <input
                  type="checkbox"
                  id="wpforms-2263-field_5_1"
                  value="개인정보 활용 동의, 개인정보는 답변용으로만 활용됩니다."
                  {...register("privacyConsent")}
                />
                <label className="wpforms-field-label-inline" htmlFor="wpforms-2263-field_5_1">
                  개인정보 활용 동의, 개인정보는 답변용으로만 활용됩니다.
                </label>
              </li>
            </ul>
            {errors.privacyConsent && (
              <p className="wpforms-field-error">{errors.privacyConsent.message}</p>
            )}
          </div>
        </div>

        <div className="wpforms-field wpforms-field-hp hidden">
          <label className="wpforms-field-label" htmlFor="wpforms-2263-field-hp">
            Comment
          </label>
          <input
            type="text"
            name="wpforms[hp]"
            id="wpforms-2263-field-hp"
            className="wpforms-field-medium"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="wpforms-submit-container">
          <input type="hidden" name="wpforms[id]" value="2263" />
          <input type="hidden" name="wpforms[author]" value="8" />
          <input type="hidden" name="wpforms[post_id]" value="2378" />
          <button
            type="submit"
            disabled={isSubmitting}
            name="wpforms[submit]"
            className="wpforms-submit inline-flex items-center gap-2"
            id="wpforms-submit-2263"
            value="wpforms-submit"
            aria-live="assertive"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                보내는 중...
              </>
            ) : (
              "보내기"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
