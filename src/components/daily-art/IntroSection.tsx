"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      title: "쉬운",
      subtitle: "Easy",
      description: "누구나 쉽게 참여할 수 있는 열린 예술 경험",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "재미있는",
      subtitle: "Fun",
      description: "놀이처럼 즐기는 창의적인 예술 활동",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      title: "안전한",
      subtitle: "Safe",
      description: "판단 없이 자유롭게 표현할 수 있는 공간",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            예술의 민주화
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            <span className="font-semibold text-[var(--color-blue)]">
              누구나 예술가가 될 수 있습니다.
            </span>
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            일상의 예술은 예술을 특별한 재능을 가진 사람들만의 것이 아닌, 모든
            사람이 일상에서 누릴 수 있는 경험으로 만들고자 합니다. 참여형 공연을
            통해 관객은 수동적인 관람자가 아닌 적극적인 창작자가 됩니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-[var(--color-blue-light)]/50 to-[var(--color-blue)]/20 rounded-2xl flex items-center justify-center text-[var(--color-blue)] group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[var(--color-blue)] rounded-lg opacity-20" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {value.title}
              </h3>
              <p className="text-[var(--color-blue)] font-medium mb-3">
                {value.subtitle}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
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
              { id: "communication", label: "무늬만 (소통극장)" },
              { id: "sympathy", label: "넋두리 (공감극장)" },
              { id: "reduce", label: "내비춤 (춤명상)" },
            ].map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-5 py-2.5 bg-gray-50 hover:bg-[var(--color-blue-light)]/30 rounded-full text-sm font-medium text-gray-700 hover:text-[var(--color-blue-dark)] transition-colors duration-200"
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
