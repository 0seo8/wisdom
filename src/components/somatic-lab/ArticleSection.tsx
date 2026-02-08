"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ArticleSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      title: "소매틱스 교육이 성인의 신체 자각과 심리적 안녕감에 미치는 영향",
      journal: "한국무용과학회지",
      year: "2023",
      type: "국내 학술지",
    },
    {
      title:
        "Somatic Movement Education의 효과에 관한 체계적 문헌고찰",
      journal: "한국체육학회지",
      year: "2022",
      type: "국내 학술지",
    },
    {
      title: "소매틱스 프로그램이 만성 요통 환자의 통증 감소에 미치는 효과",
      journal: "대한물리치료학회지",
      year: "2022",
      type: "국내 학술지",
    },
    {
      title:
        "The Effect of Somatic Practice on Stress Reduction and Body Awareness",
      journal: "Journal of Dance Medicine & Science",
      year: "2021",
      type: "국제 학술지",
    },
    {
      title: "움직임 예술교육으로서 소매틱스의 교육적 가치 연구",
      journal: "문화예술교육연구",
      year: "2021",
      type: "국내 학술지",
    },
    {
      title: "직장인 대상 소매틱 무브먼트 프로그램의 효과성 연구",
      journal: "한국웰니스학회지",
      year: "2020",
      type: "국내 학술지",
    },
  ];

  return (
    <section id="article" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            연구 자료
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            소매틱스와 관련된 학술 논문 및 연구 자료입니다. 과학적 근거를 바탕으로
            프로그램을 개발하고 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
              className="group bg-gray-50 hover:bg-[var(--color-green-light)]/30 rounded-xl p-6 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-green)]/10 rounded-xl flex items-center justify-center text-[var(--color-green)] group-hover:bg-[var(--color-green)] group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-gray-600">{article.journal}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-gray-500">{article.year}</span>
                    <span className="px-2 py-0.5 bg-[var(--color-green)]/10 text-[var(--color-green)] rounded-full text-xs font-medium">
                      {article.type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            더 많은 연구 자료는 문의를 통해 안내받으실 수 있습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
