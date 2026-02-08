"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const sdgsGoals = [
  {
    number: 3,
    title: "건강과 복지",
    description: "모든 연령대의 건강한 삶 보장과 웰빙 증진",
    color: "#4C9F38",
  },
  {
    number: 4,
    title: "양질의 교육",
    description: "포용적이고 공평한 양질의 교육 보장과 평생학습 기회 증진",
    color: "#C5192D",
  },
  {
    number: 5,
    title: "양성 평등",
    description: "성평등 달성과 모든 여성 및 여아의 권익 신장",
    color: "#FF3A21",
  },
  {
    number: 8,
    title: "좋은 일자리와 경제성장",
    description: "지속적이고 포용적인 경제성장, 완전하고 생산적인 고용과 양질의 일자리 증진",
    color: "#A21942",
  },
  {
    number: 10,
    title: "불평등 완화",
    description: "국내 및 국가 간 불평등 감소",
    color: "#DD1367",
  },
  {
    number: 11,
    title: "지속가능한 도시",
    description: "포용적이고 안전하며 회복력 있는 지속가능한 도시와 주거지 조성",
    color: "#FD9D24",
  },
  {
    number: 17,
    title: "파트너십",
    description: "이행 수단 강화와 지속가능발전을 위한 글로벌 파트너십 활성화",
    color: "#19486A",
  },
];

export function SDGsSection() {
  return (
    <Section id="sdgs" background="white">
      <SectionTitle
        title="SDGs 경영"
        subtitle="지혜의밭은 UN 지속가능발전목표(SDGs) 달성을 위해 노력합니다"
        align="center"
      />

      <div className="max-w-5xl mx-auto">
        {/* SDGs Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="relative w-full max-w-3xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden">
            <Image
              src={images.sdgs.main}
              alt="UN SDGs 지속가능발전목표"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            지혜의밭은 사회적기업으로서 지속가능한 발전을 위해
            7가지 SDGs 목표를 중심으로 사업을 운영하고 있습니다.
          </p>
        </motion.div>

        {/* SDGs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {sdgsGoals.map((goal, index) => (
            <motion.div
              key={goal.number}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <SDGCard {...goal} />
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
            <span className="text-gray-600 text-sm">
              UN SDGs 7개 목표 실천 기업
            </span>
          </div>
        </motion.div>
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
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
        <span className="text-4xl md:text-5xl font-bold opacity-80">{number}</span>
        <span className="text-sm md:text-base font-medium leading-tight">{title}</span>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex items-center justify-center">
        <div className="text-center">
          <span className="block text-white font-bold text-lg mb-2">
            Goal {number}
          </span>
          <p className="text-white text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
