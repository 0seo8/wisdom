"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { MapPin, Phone, Printer, Mail, Train, Bus, CarFront } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "주소",
    value: "서울특별시 영등포구 대림로 231, MG빌딩 3층",
    sub: "(서울특별시 영등포구 대림동 782-1, 3층)",
    link: "https://map.kakao.com/?q=서울특별시 영등포구 대림로 231",
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
    link: undefined,
    external: false,
  },
  {
    icon: Mail,
    label: "이메일",
    value: "info@artswisdom.com",
    link: "mailto:info@artswisdom.com",
    external: false,
  },
];

const transportInfo = [
  {
    icon: Train,
    label: "지하철",
    details: "7호선 대림역 12번 출구 / 2호선 대림역 5번 출구 → 마을버스 04번 (도보 3분)",
  },
  {
    icon: Train,
    label: "지하철",
    details: "1·2호선 신도림역 2번 출구 → 버스 5611 이용",
  },
  {
    icon: Bus,
    label: "버스",
    details: "신영초등학교 정류장(19275) / 명지춘혜병원 정류장(19327)",
  },
  {
    icon: CarFront,
    label: "주차",
    details: "건물 내 지하주차장 이용 가능",
  },
];

export function MapSection() {
  return (
    <Section id="map" background="gray">
      <SectionTitle
        title="오시는 길"
        subtitle="지혜의밭을 방문해 주세요"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6"
        >
          <h3 className="font-bold text-gray-900 text-lg mb-6">연락처</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-orange)]" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-gray-800 group-hover:text-[var(--color-orange)] transition-colors text-sm font-medium">
                      {item.value}
                    </span>
                    {item.sub && (
                      <span className="text-xs text-gray-400 block mt-0.5">
                        {item.sub}
                      </span>
                    )}
                  </div>
                </div>
              );

              if (item.link) {
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {content}
                  </a>
                );
              }
              return <div key={item.label}>{content}</div>;
            })}
          </div>
        </motion.div>

        {/* Transport Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-6"
        >
          <h3 className="font-bold text-gray-900 text-lg mb-6">교통 안내</h3>
          <div className="space-y-4">
            {transportInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-gray-700 text-sm">
                      {item.details}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Kakao Map Link Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://map.kakao.com/?q=서울시 영등포구 대림로 231"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-orange)] text-white rounded-full hover:bg-[var(--color-orange-dark)] transition-colors font-medium shadow-lg shadow-[var(--color-orange)]/20"
          >
            <MapPin className="w-5 h-5" />
            카카오맵에서 길찾기
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
