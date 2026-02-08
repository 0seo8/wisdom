"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/common";
import { MapPin, Navigation } from "lucide-react";

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
    <Section id="location" background="gray">
      <SectionTitle
        title="오시는 길"
        subtitle="지혜의밭을 방문해 주세요"
        align="center"
      />

      <div className="max-w-5xl mx-auto">
        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8"
        >
          <div className="aspect-video lg:aspect-[21/9] bg-gray-100 relative">
            <iframe
              src="https://map.kakao.com/link/map/지혜의밭,37.493889,126.895556"
              className="w-full h-full border-0"
              style={{ minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              title="지혜의밭 위치"
            />
          </div>
        </motion.div>

        {/* Address and Transport Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-orange)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                <p className="text-gray-600">
                  서울특별시 영등포구 대림로 231, MG빌딩 3층
                </p>
              </div>
            </div>
            <a
              href="https://map.kakao.com/?q=서울시 영등포구 대림로 231"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--color-orange)] text-white rounded-xl hover:bg-[var(--color-orange-dark)] transition-colors font-medium"
            >
              <Navigation className="w-4 h-4" />
              카카오맵에서 보기
            </a>
          </div>

          {/* Transport Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">교통 안내</h3>
            <ul className="space-y-3">
              {transportInfo.map((item) => (
                <li key={item.type} className="flex items-start gap-3">
                  <span className="inline-flex px-2.5 py-1 bg-[var(--color-orange-light)] rounded-lg text-xs font-semibold text-[var(--color-orange-dark)] flex-shrink-0">
                    {item.type}
                  </span>
                  <span className="text-gray-600 text-sm pt-0.5">
                    {item.details}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
