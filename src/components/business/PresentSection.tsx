"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function PresentSection() {
  return (
    <div className="bg-[#fcf3eb]">
      {/* Corporate Education Present */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
          >
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={images.business.educationPhotos.photo2}
                alt="Classroom scene"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h3 className="text-[40px] md:text-[48px] font-bold text-gray-800 tracking-tight">
                기업교육 present
              </h3>
              <ul className="space-y-5">
                {[
                  "이제는 경영에도 compassion이 필요합니다.",
                  "문화예술을 접목하여 module의 특별함을 선사합니다.",
                  "결과보다는 과정 중심으로 아이디어의 창의성을 깨웁니다.",
                  "문제해결 능력을 민주적인 토의 방식으로 이끕니다.",
                  "솔루션을 연습해봄으로써 업무 현장에서 자원이 됩니다.",
                  "업무 저해 스트레스 관리 및 번아웃 증후군을 예방합니다.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[17px] md:text-[18px] text-gray-700 font-medium leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0" />
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Planning Present */}
      <section className="py-24">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
          >
            <div className="w-full md:w-1/2 relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={images.business.eventActivity}
                alt="Event activity"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <h3 className="text-[40px] md:text-[48px] font-bold text-gray-800 tracking-tight">
                행사기획 present
              </h3>
              <ul className="space-y-5">
                {[
                  "기업의 요구와 환경을 고려한 최적화된 서비스",
                  "다양한 장르의 콜라보를 통한 창의적인 행사",
                  "흥미로운 이벤트 구성으로 참여 동기 극대화",
                  "즐거움과 행복을 추구하는 인간의 기본 욕구 충족",
                  "재미와 더불어 삶의 유연성을 통한 긍정적인 변화",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-[17px] md:text-[18px] text-gray-700 font-medium leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0" />
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
