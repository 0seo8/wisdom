"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export function OverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      title: "Somatics",
      subtitle: "소매틱스란?",
      description:
        "몸을 내부에서 느끼고 경험하는 것. 1인칭 관점에서 살아있는 몸의 감각과 움직임을 탐구하는 학문입니다.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Holistic",
      subtitle: "전인적 접근",
      description:
        "몸, 마음, 정신을 분리하지 않고 하나의 통합된 존재로 바라보며, 전체적인 관점에서 인간을 이해합니다.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
    {
      title: "Research",
      subtitle: "연구와 교육",
      description:
        "다양한 소매틱 접근법을 연구하고, 전문가 양성 및 일반인 교육을 통해 소매틱스를 널리 알립니다.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="overview" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            소매틱랩 소개
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            소매틱랩은 몸을 통해 자신을 이해하고 성장할 수 있도록 돕는
            연구소입니다. 다양한 소매틱 기법과 움직임 예술을 결합하여 현대인의
            건강한 삶을 위한 프로그램을 개발하고 교육합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-green-light)] to-[var(--color-green)]/20 rounded-2xl flex items-center justify-center text-[var(--color-green)] group-hover:scale-110 transition-transform duration-300">
                  {concept.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--color-green)] rounded-lg opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {concept.title}
              </h3>
              <p className="text-[var(--color-green)] font-medium mb-3">
                {concept.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={images.somaticLab.certification}
              alt="소매틱랩 인증"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8 md:p-12 bg-gradient-to-br from-[var(--color-green-light)]/30 to-white rounded-3xl">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              우리의 미션
            </h3>
            <p className="text-gray-600 leading-relaxed">
              &ldquo;몸의 지혜를 깨워 자신을 이해하고, 움직임을 통해 삶의 질을
              향상시킨다.&rdquo;
              <br />
              <br />
              소매틱랩은 몸의 내적 경험에 주목하는 소매틱스를 통해 현대인들이
              자신의 몸과 다시 연결되도록 돕습니다. 스트레스, 긴장, 통증에서
              벗어나 자유롭고 편안한 움직임을 되찾을 수 있도록 연구하고
              교육합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
