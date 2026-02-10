"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const concepts = [
    {
      title: "HEAL",
      subtitle: "치유",
      description: "내면의 상처를 어루만지고 회복의 여정을 시작합니다",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "SOMA",
      subtitle: "몸",
      description: "몸의 감각과 움직임을 통해 자신을 탐구합니다",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "REST",
      subtitle: "쉼",
      description: "온전한 쉼을 통해 삶의 균형을 되찾습니다",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="intro" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            힐소마가 추구하는 가치
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            힐소마는 바쁜 일상 속에서 잠시 멈추어 자신을 돌아보고,
            몸과 마음의 균형을 회복할 수 있는 다양한 프로그램을 제공합니다.
            예술과 웰니스의 융합을 통해 진정한 치유를 경험해보세요.
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
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-orange-light)] to-[var(--color-orange)]/20 rounded-2xl flex items-center justify-center text-[var(--color-orange)] group-hover:scale-110 transition-transform duration-300">
                  {concept.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--color-orange)] rounded-lg opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {concept.title}
              </h3>
              <p className="text-[var(--color-orange)] font-medium mb-3">
                {concept.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Program Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-100"
        >
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-6">
            프로그램 바로가기
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: "bodyfulness", label: "바디풀니스" },
              { id: "mindfulness", label: "마인드풀니스" },
              { id: "therapy", label: "테라피" },
              { id: "expressive", label: "표현 예술" },
              { id: "group", label: "집단 상담" },
              { id: "creative", label: "연극 놀이" },
            ].map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-5 py-2.5 bg-gray-50 hover:bg-[var(--color-orange-light)] rounded-full text-sm font-medium text-gray-700 hover:text-[var(--color-orange-dark)] transition-colors duration-200"
              >
                {program.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
