"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: "location",
    label: "주소",
    value: "서울특별시 영등포구 대림로 231, MG빌딩 3층",
    link: "https://map.kakao.com/?q=서울특별시 영등포구 대림로 231",
  },
  {
    icon: "phone",
    label: "전화",
    value: "070-8264-6477",
    link: "tel:070-8264-6477",
  },
  {
    icon: "fax",
    label: "팩스",
    value: "0504-387-6477",
    link: undefined,
  },
  {
    icon: "email",
    label: "이메일",
    value: "info@artswisdom.com",
    link: "mailto:info@artswisdom.com",
  },
];

const transportInfo = [
  {
    type: "지하철",
    details: "7호선 대림역 12번 출구 / 2호선 대림역 5번 출구 → 마을버스 04번 (도보 3분)",
  },
  {
    type: "지하철",
    details: "1·2호선 신도림역 2번 출구 → 버스 5611 이용",
  },
  {
    type: "버스",
    details: "신영초등학교 정류장(19275) / 명지춘혜병원 정류장(19327)",
  },
  {
    type: "주차",
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

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full">
              {/* Map Embed Placeholder */}
              <div className="aspect-video lg:aspect-auto lg:h-full min-h-[400px] bg-gray-100 relative">
                {/* Replace with actual Kakao Map embed */}
                <iframe
                  src="https://map.kakao.com/link/map/지혜의밭,37.493889,126.895556"
                  className="w-full h-full border-0"
                  style={{ minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  title="지혜의밭 위치"
                />

                {/* Fallback placeholder if iframe doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 pointer-events-none opacity-0 hover:opacity-0">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-sm">지도 영역</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">연락처</h3>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.icon === "location" ? "_blank" : undefined}
                        rel={item.icon === "location" ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ContactIcon type={item.icon} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block">
                            {item.label}
                          </span>
                          <span className="text-gray-700 group-hover:text-[var(--color-orange)] transition-colors text-sm">
                            {item.value}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ContactIcon type={item.icon} />
                        </div>
                        <div>
                          <span className="text-xs text-gray-500 block">
                            {item.label}
                          </span>
                          <span className="text-gray-700 text-sm">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Transport Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4">교통 안내</h3>
              <ul className="space-y-3">
                {transportInfo.map((item) => (
                  <li key={item.type} className="flex items-start gap-3">
                    <span className="inline-flex px-2 py-1 bg-gray-100 rounded text-xs font-medium text-gray-700 flex-shrink-0">
                      {item.type}
                    </span>
                    <span className="text-gray-600 text-sm">
                      {item.details}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action */}
            <a
              href="https://map.kakao.com/?q=서울시 영등포구 대림로 231"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-orange)] text-white rounded-xl hover:bg-[var(--color-orange-dark)] transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              카카오맵에서 보기
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ContactIcon({ type }: { type: string }) {
  const iconClass = "w-4 h-4 text-[var(--color-orange)]";

  switch (type) {
    case "location":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "phone":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      );
    case "fax":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      );
    case "email":
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}
