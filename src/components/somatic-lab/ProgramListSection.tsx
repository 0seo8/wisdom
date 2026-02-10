"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export function ProgramListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programs = [
    {
      title: "Hanna Somatics",
      subtitle: "한나 소매틱스",
      description:
        "체학 분야의 창시자 토마스 한나의 HSE를 기반한 프로그램으로 근육운동기억을 재훈련하고 통증을 완화하기 위해 신경과학과 동양철학등을 통섭한 1차 체험의 repatterning 과정입니다.\n진화 과정을 통해 누구나 겪게 될 척추의 응축을 부드럽게 이완하여 우아한 움직임의 길을 찾아갑니다",
      bullets: [
        "부드러운 호흡과 움직임으로 잃어버린 내부감각과 고유감각을 회복합니다.",
        "움직임을 인지하여 자동화된 습관을 알아차림하여 신경계를 변화시킵니다.",
        "몸의 긴장을 이완하며 자연스럽고 효율적인 방법으로 통증을 완화합니다.",
      ],
      image: images.somaticLab.programImages.children,
      label: "한나 소매틱스",
    },
    {
      title: "Soma Ballet",
      subtitle: "소마 발레",
      description:
        "일상에 지친 몸을 돌보며 소매틱 발레를 통해 내 안의 생기와 우아함을 찾아가는 수업입니다. 발레는 부드러운 움직임을 통해 긴장된 몸과 마음을 이완 시키고 내면의 아름다움을 발견하도록 합니다.\n기존 발레와 다른, 잘 쉬고, 바르게 서고, 편안하게 걷는 것 만으로도 저절로 춤이 되는 신선한 경험을 하고 싶은 분들을 기다립니다.",
      bullets: [
        "부드러운 움직임을 통해 긴장된 몸을 이완 시킵니다.",
        "몸의 바른 정렬을 찾고 유연함을 회복 시킵니다.",
        "잃어버렸던 생기와 우아함을 발견하게 합니다.",
      ],
      image: images.somaticLab.programImages.ballet,
      label: "소마 발레",
    },
    {
      title: "Laban & Dance Therapy",
      subtitle: "라반 댄스 테라피",
      description:
        "소매틱과 춤, 부드러운 움직임은 몸의 감각과 연결성을 회복시켜, 단절된 일상과 경쟁으로 인하여 극심한 스트레스를 벗어나게 도와줍니다.\n라반.바르테니에프의 PTBC(Patterns of Total Body Connectivity)신체 신경계 움직임 발달 6단계를 통해 무의식적으로 세포에 깃든 부정적 정서를 해소하여 삶의 활력을 되찾아 줍니다.",
      bullets: [
        "몸의 움직임에 대한 원리를 이해하고 나에게 맞는 움직임을 찾게 합니다.",
        "몸으로 소통하고 관계성을 향상 시킵니다.",
        "움직임을 통해 창의성과 예술성이 발휘됩니다.",
      ],
      image: images.somaticLab.programImages.labanDance,
      label: "라반 댄스 테라피",
    },
    {
      title: "Soma Healing Yoga",
      subtitle: "소마 힐링 요가",
      description:
        "소매틱 힐링 요가는 관절과 근육의 유연성으로 동작을 만들어내야 하는 기존의 요가가 아닌, 있는 그대로의 몸을 자각하고 내부 감각을 깨워 몸이 조화와 균형을 회복하도록 돕는 힐링 프로그램입니다.",
      bullets: [
        "의식적, 무의식적인 긴장으로부터 깊은 이완을 줍니다.",
        "부드럽고 섬세한 움직임이 뭉친 근막을 풀어냅니다.",
        "쉬운 움직임을 통해 관절과 근육이 정렬되어 몸이 바르게 서게 됩니다.",
      ],
      image: images.somaticLab.programImages.healingYoga,
      label: "소마 힐링 요가",
    },
    {
      title: "Move Move Body Body",
      subtitle: "무브 무브 바디 바디",
      description:
        "어린이들이 흔히 하는 놀이나 취미, 그리고 일상에서의 움직임이 춤으로 연결되어 몸으로 표현하게 하는 체험형 통합예술교육 프로그램입니다.",
      bullets: [
        "신체 여러 감각을 활용하여 상호작용을 통해 사회성을 길러 줍니다.",
        "춤을 통해 서로 소통하고 다양한 자기 표현 법을 익힙니다.",
        "예술적 감성과 창의력을 향상시켜 건강한 자신감을 키웁니다.",
      ],
      image: images.somaticLab.programImages.children,
      label: "무브 무브 바디 바디",
    },
    {
      title: "Contact Improvisation & Circle Dance",
      subtitle: "접촉즉흥 & 써클댄스",
      description:
        '"당신을 행복하게 하는 움직임이라면 무엇이든 춤이 될 수 있다"\nSteve Paxton 의 말처럼 일상의 움직임으로 소통하는 기분좋은 관계를 만듭니다.\n함께 춤으로써 자신을 발견하고 상대를 배려하며 소통과 공감이 자연스럽게 일어납니다.\n몸의 중심과 바닥,중력과의 연결을 인지하며 모든 가능성을 탐구하게 됩니다.\n\n원(circle)은 평등과 평화를 상징합니다. 영원의 춤, 신성무라고도 불리며\n"상징적이고 의식적인 체험이 치유력을 가져온다"라고 말합니다.',
      bullets: [
        "커뮤니티 댄스를 통해 몸과 마음을 조우하여 공동체성을 회복합니다.",
        "써클로 함께 춤추는 가운데 화합과 연결을 통한 현대사회의 고립, 우울감을 해소합니다.",
      ],
      image: images.somaticLab.programImages.circleDance,
      label: "접촉즉흥 & 써클댄스",
    },
  ];

  return (
    <section id="program" ref={ref} className="bg-white">
      {/* Program Header */}
      <div className="py-16 md:py-20 bg-gray-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Somatics Program
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Programs List */}
      <div className="divide-y divide-gray-100">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="py-16 md:py-20 bg-[#f5f1e8]"
          >
            <div className="container">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div>
                    <p className="text-sm text-[#8b6f47] mb-2">
                      {program.label}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#8b6f47] mb-4">
                      {program.title}
                    </h3>
                  </div>

                  <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
                    <p>{program.description}</p>
                  </div>

                  <ul className="space-y-2">
                    {program.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-[#8b6f47] mt-1">–</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
