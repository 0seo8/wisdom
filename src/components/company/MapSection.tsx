"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";

export function MapSection() {
  return (
    <Section id="map" background="white" className="py-20 md:py-32">
      <SectionTitle
        title="LOCATION"
        subtitle="오시는 길"
        align="center"
      />

      <div className="max-w-4xl mx-auto px-4 mt-12 space-y-12">
        {/* Map Area - Full Width */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="w-full aspect-video md:aspect-[21/9] bg-gray-100 relative"
        >
             <iframe
              src="https://maps.google.com/maps?q=서울특별시%20영등포구%20대림로%20231&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
        </motion.div>

        {/* Text Information - Simple List */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center md:text-left"
        >
            {/* Address & Contact */}
            <div className="space-y-2">
                <p className="text-lg md:text-xl font-bold text-gray-900">
                    주소
                </p>
                <p className="text-gray-600 text-base md:text-lg">
                    서울특별시 영등포구 대림로 231, MG빌딩 3층 (대림동)
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                        전화번호
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                        070-8264-6477
                    </p>
                </div>
                <div className="space-y-2">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                        팩스
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                        0504-387-6477
                    </p>
                </div>
            </div>

            {/* Transport */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
                 <div className="space-y-2">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                        지하철 이용 시
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                        7호선 대림역 12번 출구 / 2호선 대림역 5번 출구 → 마을버스 04번 (도보 3분)
                        <br/>
                        1·2호선 신도림역 2번 출구 → 버스 5611 이용
                    </p>
                </div>
                 <div className="space-y-2">
                    <p className="text-lg md:text-xl font-bold text-gray-900">
                        버스 이용 시
                    </p>
                    <p className="text-gray-600 text-base md:text-lg">
                        신영초등학교 정류장(19275) / 명지춘혜병원 정류장(19327) 하차
                    </p>
                </div>
            </div>
        </motion.div>
      </div>
    </Section>
  );
}
