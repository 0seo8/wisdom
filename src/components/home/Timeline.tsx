"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const timelineData = [
  {
    year: 2017,
    title: "지혜의밭 설립",
    description: "예술의 힘으로 건강한 사회를 만들어가는 소셜벤처 창업",
    image: images.timeline[2017],
  },
  {
    year: 2018,
    title: "소매틱 프로그램 런칭",
    description: "바디풀니스, 마인드풀니스 프로그램 개발 및 운영",
    image: images.timeline[2018],
  },
  {
    year: 2019,
    title: "사회적기업 인증",
    description: "고용노동부 사회적기업 인증 획득",
    image: images.timeline[2019],
  },
  {
    year: 2020,
    title: "힐소마 브랜드 런칭",
    description: "HEAL + SOMA 통합 웰니스 프로그램 브랜드화",
    image: images.timeline[2020],
  },
  {
    year: 2021,
    title: "소매틱랩 설립",
    description: "소매틱 연구 전담부서 인정 및 연구 활동 시작",
    image: images.timeline[2021],
  },
  {
    year: 2022,
    title: "일상의 예술 확장",
    description: "무늬만, 넋두리, 내비춤 프로그램 전국 확대",
    image: images.timeline[2022],
  },
  {
    year: 2024,
    title: "ESG 경영 강화",
    description: "지속가능발전목표 연계 사업 확대 및 파트너십 강화",
    image: images.timeline[2024],
  },
  {
    year: 2025,
    title: "새로운 도약",
    description: "디지털 전환과 글로벌 파트너십 확대",
    image: images.timeline[2025],
  },
];

export function Timeline() {
  return (
    <Section background="gray">
      <SectionTitle
        title="연혁"
        subtitle="지혜의밭이 걸어온 길"
      />

      {/* Desktop Timeline - Horizontal Scroll */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--color-orange)] opacity-30 -translate-y-1/2" />

          <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-64 snap-center"
              >
                <TimelineCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline - Vertical */}
      <div className="md:hidden space-y-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <MobileTimelineCard {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

interface TimelineCardProps {
  year: number;
  title: string;
  description: string;
  image: string;
}

function TimelineCard({ year, title, description, image }: TimelineCardProps) {
  return (
    <div className="relative group">
      {/* Year Marker */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-6 bg-[var(--color-orange)] rounded-full border-4 border-white shadow" />
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow pt-6">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={`${year}년 ${title}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-3 left-3 text-white text-2xl font-bold">
            {year}
          </span>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

function MobileTimelineCard({ year, title, description, image }: TimelineCardProps) {
  return (
    <div className="flex gap-4">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={`${year}년 ${title}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <span className="text-[var(--color-orange)] font-bold text-lg">{year}</span>
        <h3 className="font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
