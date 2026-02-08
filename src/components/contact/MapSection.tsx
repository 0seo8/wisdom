"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/common";
import { MapPin, Train, Bus, CarFront, Navigation } from "lucide-react";

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
    <Section id="location" background="gray">
      <SectionTitle
        title="오시는 길"
        subtitle="지혜의밭을 방문해 주세요"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-orange-light)] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[var(--color-orange)]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">주소</h3>
                <p className="text-gray-700 text-sm">
                  서울특별시 영등포구 대림로 231, MG빌딩 3층
                </p>
                <p className="text-gray-400 text-xs mt-0.5">
                  (서울특별시 영등포구 대림동 782-1, 3층)
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
              카카오맵에서 길찾기
            </a>
          </motion.div>

          {/* Transport Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <h3 className="font-bold text-gray-900 mb-4">교통 안내</h3>
            <div className="space-y-4">
              {transportInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500 block">
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
        </div>
      </div>
    </Section>
  );
}
