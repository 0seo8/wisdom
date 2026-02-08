"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울시 영등포구 대림로 231 MG 빌딩 3층",
    link: "https://map.kakao.com/?q=서울시 영등포구 대림로 231",
    external: true,
  },
  {
    icon: Phone,
    label: "전화",
    value: "070-8264-6477",
    link: "tel:070-8264-6477",
    external: false,
  },
  {
    icon: Printer,
    label: "팩스",
    value: "0504-387-6477",
    link: null,
    external: false,
  },
  {
    icon: Mail,
    label: "이메일",
    value: "info@artswisdom.com",
    link: "mailto:info@artswisdom.com",
    external: false,
  },
  {
    icon: Clock,
    label: "운영시간",
    value: "평일 09:00 - 18:00",
    link: null,
    external: false,
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-gray-50 rounded-2xl p-6 md:p-8 h-fit"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-6">연락처 정보</h2>

      <ul className="space-y-5">
        {contactDetails.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[var(--color-orange)]" />
              </div>
              <div>
                <span className="text-xs text-gray-500 block mb-0.5">
                  {item.label}
                </span>
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {item.value}
                </span>
              </div>
            </div>
          );

          if (item.link) {
            return (
              <li key={item.label}>
                <a
                  href={item.link}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="block hover:bg-white rounded-xl p-2 -m-2 transition-colors group"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  {content}
                </a>
              </li>
            );
          }

          return <li key={item.label}>{content}</li>;
        })}
      </ul>

      {/* Additional info */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          빠른 응답을 원하시면
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          문의 양식을 통해 보내주시면 영업일 기준 24시간 이내에 답변 드리겠습니다.
          긴급한 문의는 전화로 연락 주세요.
        </p>
      </div>
    </motion.div>
  );
}
