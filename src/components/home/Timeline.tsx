"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { images } from "@/constants/images";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: 2025,
    title: "새로운 도약",
    description: ["디지털 전환", "글로벌 파트너십 확대"],
    image: images.timeline[2025],
  },
  {
    year: 2024,
    title: "ESG 경영 강화",
    description: ["지속가능발전목표 연계 사업 확대", "파트너십 강화"],
    image: images.timeline[2024],
  },
  {
    year: 2022,
    title: "일상의 예술 확장",
    description: ["무늬만, 넋두리, 내비춤 프로그램 전국 확대"],
    image: images.timeline[2022],
  },
  {
    year: 2021,
    title: "소매틱랩 설립",
    description: ["소매틱 연구 전담부서 인정", "연구 활동 시작"],
    image: images.timeline[2021],
  },
  {
    year: 2020,
    title: "힐소마 브랜드 런칭",
    description: ["HEAL + SOMA 통합 웰니스 프로그램 브랜드화"],
    image: images.timeline[2020],
  },
  {
    year: 2019,
    title: "사회적기업 인증",
    description: ["고용노동부 사회적기업 인증 획득"],
    image: images.timeline[2019],
  },
  {
    year: 2018,
    title: "소매틱 프로그램 런칭",
    description: ["바디풀니스, 마인드풀니스 프로그램 개발 및 운영"],
    image: images.timeline[2018],
  },
  {
    year: 2017,
    title: "지혜의밭 설립",
    description: ["예술의 힘으로 건강한 사회를 만들어가는 소셜벤처 창업"],
    image: images.timeline[2017],
  },
];

export function Timeline() {
  return (
    <Section id="history" background="gray" className="py-20 md:py-32">
      <div className="text-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8c5a5a] tracking-wide mb-2">
          Timeline of Artswisdom
        </h2>
        <div className="w-16 h-1 bg-[#8c5a5a] mx-auto mt-4 opacity-70"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 mt-12 md:mt-20">
        {/* Horizontal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {timelineData.map((item, index) => (
            <motion.div 
                key={item.year} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col group"
            >
              {/* Image Area */}
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-white shadow-md border border-gray-100">
                <Image
                  src={item.image}
                  alt={`${item.year}년`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-0 left-0 bg-[#8c5a5a] text-white px-5 py-2 font-bold text-xl shadow-md">
                    {item.year}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col px-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2 inline-block self-start group-hover:border-[#8c5a5a] transition-colors duration-300">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                    {item.description.map((desc, i) => (
                        <li key={i} className="text-gray-600 text-[15px] leading-relaxed break-keep flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                            {desc}
                        </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
