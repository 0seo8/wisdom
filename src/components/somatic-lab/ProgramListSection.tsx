"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/images";

export function ProgramListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      title: "한나 소매틱스",
      subtitle: "Hanna Somatics",
      description:
        "감각운동 학습을 통해 만성 근육 긴장을 해소하고 자유로운 움직임을 되찾는 프로그램입니다.",
      image: images.somaticLab.programImages.children,
    },
    {
      title: "라반 무브먼트",
      subtitle: "Laban Movement Analysis",
      description:
        "움직임의 공간, 시간, 무게, 흐름을 분석하여 표현력과 효율성을 높이는 프로그램입니다.",
      image: images.somaticLab.programImages.labanDance,
    },
    {
      title: "소마 힐링 요가",
      subtitle: "Somatic Healing Yoga",
      description:
        "소매틱 원리를 적용한 요가로 깊은 이완과 신체 정렬을 경험하는 프로그램입니다.",
      image: images.somaticLab.programImages.healingYoga,
    },
    {
      title: "소마 발레",
      subtitle: "Somatic Ballet",
      description:
        "발레 기법에 소매틱 접근을 접목하여 부상 예방과 퍼포먼스 향상을 돕는 프로그램입니다.",
      image: images.somaticLab.programImages.ballet,
    },
    {
      title: "크리에이티브 무브먼트",
      subtitle: "Creative Movement",
      description:
        "창의적 움직임 탐구를 통해 자기 표현력을 키우고 예술적 감각을 개발하는 프로그램입니다.",
      image: images.somaticLab.programImages.children,
    },
    {
      title: "댄스무브먼트테라피",
      subtitle: "Dance Movement Therapy",
      description:
        "움직임과 춤을 통해 정서적 표현과 심리적 치유를 경험하는 프로그램입니다.",
      image: images.somaticLab.programImages.circleDance,
    },
  ];

  return (
    <section id="program" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            소매틱랩 프로그램
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            다양한 소매틱 접근법을 통해 몸과 마음의 건강을 돌보는 프로그램을
            제공합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Program Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Program Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {program.title}
                </h3>
                <p className="text-[var(--color-green)] text-sm font-medium mb-3">
                  {program.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to HealaSoma */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-[var(--color-green-light)]/50 to-white rounded-3xl">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              더 많은 프로그램을 확인하세요
            </h3>
            <p className="text-gray-600 mb-6">
              힐소마에서 제공하는 다양한 웰니스 프로그램을 만나보세요.
            </p>
            <Link
              href="/healasoma"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-green)] text-white font-medium rounded-full hover:bg-[var(--color-green-dark)] transition-colors duration-200 shadow-lg shadow-[var(--color-green)]/30"
            >
              힐소마 프로그램 보기
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
