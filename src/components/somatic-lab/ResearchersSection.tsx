"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export function ResearchersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const researchers = [
    {
      name: "문수정",
      specialty: "한나 소매틱스",
      qualifications: ["소마전문사", "문화예술교육사"],
      description:
        "한나 소매틱스를 기반으로 몸의 감각과 움직임을 통한 자기 인식 교육을 진행합니다.",
      image: images.somaticLab.researchers.moon,
    },
    {
      name: "최미라",
      specialty: "라반 댄스 테라피",
      qualifications: ["국제공인라반동작분석가 (CMA)"],
      description:
        "라반 움직임 분석을 활용하여 움직임 패턴을 탐구하고 치유적 경험을 제공합니다.",
      image: images.somaticLab.researchers.choiMira,
    },
    {
      name: "이영선",
      specialty: "소마 힐링 요가",
      qualifications: ["물리치료사", "요가 지도사"],
      description:
        "소매틱스와 요가를 결합하여 신체 정렬과 호흡을 통한 치유 프로그램을 운영합니다.",
      image: images.somaticLab.researchers.lee,
    },
    {
      name: "정이화",
      specialty: "소마 발레",
      qualifications: ["이화여대 무용과 출강"],
      description:
        "전통 발레 기법에 소매틱 접근을 접목하여 움직임의 효율성과 표현력을 높입니다.",
      image: images.somaticLab.researchers.jung,
    },
    {
      name: "최은화",
      specialty: "무브 무브 바디 바디",
      qualifications: ["움직임창작소 대표"],
      description:
        "창의적 움직임과 신체 표현을 통해 자기 발견과 예술적 성장을 돕습니다.",
      image: images.somaticLab.researchers.choiEunhwa,
    },
  ];

  return (
    <section id="people" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            연구원 소개
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            다양한 분야의 전문가들이 함께 소매틱스를 연구하고 교육합니다. 각자의
            전문성을 바탕으로 통합적인 프로그램을 개발하고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchers.map((researcher, index) => (
            <motion.div
              key={researcher.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-[var(--color-green-light)] to-[var(--color-green)]/30">
                  <Image
                    src={researcher.image}
                    alt={researcher.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {researcher.name}
                  </h3>
                  <p className="text-[var(--color-green)] font-medium text-sm">
                    {researcher.specialty}
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <div className="flex flex-wrap gap-2 mb-4">
                {researcher.qualifications.map((qual, qualIndex) => (
                  <span
                    key={qualIndex}
                    className="px-3 py-1 bg-[var(--color-green)]/10 text-[var(--color-green-dark)] rounded-full text-xs font-medium"
                  >
                    {qual}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {researcher.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
