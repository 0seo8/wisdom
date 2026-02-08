"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const sdgsItems = [
  {
    number: 3,
    title: "건강과 웰빙",
    description: "모든 연령대의 건강한 삶 보장과 웰빙 증진",
    color: "#4C9F38",
  },
  {
    number: 4,
    title: "양질의 교육",
    description: "포용적이고 공평한 양질의 교육 보장",
    color: "#C5192D",
  },
  {
    number: 5,
    title: "성평등",
    description: "성평등 달성과 모든 여성 및 여아의 권익 신장",
    color: "#FF3A21",
  },
  {
    number: 8,
    title: "양질의 일자리",
    description: "지속적이고 포용적인 경제성장 및 완전고용",
    color: "#A21942",
  },
  {
    number: 10,
    title: "불평등 감소",
    description: "국내 및 국가 간 불평등 감소",
    color: "#DD1367",
  },
  {
    number: 11,
    title: "지속가능한 도시",
    description: "포용적이고 안전한 도시와 주거지 조성",
    color: "#FD9D24",
  },
  {
    number: 17,
    title: "파트너십",
    description: "이행 수단 강화와 글로벌 파트너십 활성화",
    color: "#19486A",
  },
];

export function SDGs() {
  return (
    <Section background="white">
      <SectionTitle
        title="SDGs 약속"
        subtitle="지혜의밭은 UN 지속가능발전목표 달성을 위해 노력합니다"
      />

      {/* SDGs Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden">
          <Image
            src={images.sdgs.main}
            alt="UN SDGs 지속가능발전목표"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {sdgsItems.map((item, index) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            <SDGCard {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

interface SDGCardProps {
  number: number;
  title: string;
  description: string;
  color: string;
}

function SDGCard({ number, title, description, color }: SDGCardProps) {
  return (
    <div
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
        <span className="text-3xl font-bold opacity-80">{number}</span>
        <span className="text-sm font-medium leading-tight">{title}</span>
      </div>

      {/* Hover Tooltip */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-center justify-center">
        <p className="text-white text-xs text-center leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
