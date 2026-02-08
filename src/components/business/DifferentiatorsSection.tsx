"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    number: "01",
    title: "문화예술 접목",
    description: "연극, 음악, 미술 등 다양한 예술 장르를 교육과 행사에 접목합니다. 예술적 방법론을 통해 기존의 틀을 벗어난 창의적이고 감동적인 경험을 선사합니다.",
    details: [
      "연극 기법을 활용한 역할극",
      "음악을 통한 팀 화합",
      "시각예술 기반 창작 활동",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "과정중심 접근",
    description: "결과보다 과정에서의 성장과 경험을 중시합니다. 참여자 스스로가 주체가 되어 함께 만들어가는 과정에서 자연스러운 변화가 일어납니다.",
    details: [
      "참여자 주도형 프로그램",
      "협력적 창작 과정",
      "성찰과 나눔의 시간",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "ESG 실천",
    description: "사회적기업으로서 ESG 경영의 S(Social) 영역을 실천합니다. 기업과 함께 사회적 가치를 창출하고 지속가능한 성장을 이루어갑니다.",
    details: [
      "사회적 가치 창출",
      "지속가능한 파트너십",
      "취약계층 일자리 창출",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
];

export function DifferentiatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-yellow-light)]/30 via-white to-[var(--color-orange-light)]/20"
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-yellow-dark)] mb-6 shadow-sm">
            Why Us
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            지혜의밭이 특별한 이유
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            우리는 단순한 교육이나 행사가 아닌, 진정한 변화와 성장을 이끄는
            차별화된 경험을 제공합니다.
          </p>
        </motion.div>

        {/* Differentiators */}
        <div className="space-y-8 md:space-y-12">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-8 md:gap-12 items-center`}
            >
              {/* Number & Icon */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 bg-gradient-to-br from-[var(--color-yellow-light)] to-[var(--color-yellow)]/40 rounded-3xl flex items-center justify-center text-[var(--color-yellow-dark)]">
                    {item.icon}
                  </div>
                  <span className="absolute -top-4 -left-4 w-12 h-12 bg-[var(--color-yellow-dark)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {item.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-full shadow-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-[var(--color-yellow-dark)] rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
