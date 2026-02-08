"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const sdgsGoals = [
  {
    number: 3,
    sdgLabel: "SDG 3",
    title: "건강불평등 해소",
    description:
      "소외계층과 취약계층을 위한 문화예술 기반 웰니스 프로그램을 제공하여 건강불평등을 해소합니다.",
    color: "#4C9F38",
  },
  {
    number: 4,
    sdgLabel: "SDG 4",
    title: "지속가능한 실천",
    description:
      "포용적이고 공평한 양질의 교육을 통해 지속가능한 사회를 만들어갑니다.",
    color: "#C5192D",
  },
  {
    number: 5,
    sdgLabel: "SDG 5",
    title: "성평등",
    description:
      "성별에 관계없이 모든 사람이 참여할 수 있는 프로그램을 운영합니다.",
    color: "#FF3A21",
  },
  {
    number: 8,
    sdgLabel: "SDG 8",
    title: "일자리 창출",
    description:
      "예술분야 전문인력 양성과 일자리 창출을 통해 지속적인 경제성장에 기여합니다.",
    color: "#A21942",
  },
  {
    number: 10,
    sdgLabel: "SDG 10",
    title: "공동체 협력",
    description:
      "지역사회와 공동체 간의 협력을 통해 포용적인 도시와 커뮤니티를 조성합니다.",
    color: "#DD1367",
  },
  {
    number: 11,
    sdgLabel: "SDG 11",
    title: "기후행동",
    description:
      "지속가능한 환경을 위한 책임감 있는 경영과 기후행동을 실천합니다.",
    color: "#FD9D24",
  },
  {
    number: 17,
    sdgLabel: "SDG 17",
    title: "자선기부",
    description:
      "글로벌 파트너십을 통해 사회적 가치를 확산하고 자선활동에 참여합니다.",
    color: "#19486A",
  },
];

export function SDGs() {
  return (
    <Section id="sdgs" background="white">
      <SectionTitle
        title="SDGs 경영"
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

      {/* Goals List - "하나," format */}
      <div className="max-w-3xl mx-auto space-y-6">
        {sdgsGoals.map((goal, index) => (
          <motion.div
            key={goal.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-start gap-4 md:gap-6"
          >
            {/* Number Badge */}
            <div
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-base"
              style={{ backgroundColor: goal.color }}
            >
              {goal.number}
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-900">
                <span className="font-bold text-base md:text-lg">
                  하나, {goal.title}
                </span>
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-1">
                {goal.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
