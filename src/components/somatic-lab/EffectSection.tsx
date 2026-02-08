"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export function EffectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const effects = [
    {
      category: "신체적 효과",
      color: "green",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      items: [
        "만성 통증 완화",
        "자세 개선",
        "유연성 및 가동성 향상",
        "신체 균형 회복",
        "호흡 기능 개선",
      ],
    },
    {
      category: "심리적 효과",
      color: "blue",
      icon: (
        <svg
          className="w-10 h-10"
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
      items: [
        "스트레스 감소",
        "정서적 안정",
        "자기 인식 향상",
        "마음챙김 능력 증진",
        "트라우마 해소",
      ],
    },
    {
      category: "사회적 효과",
      color: "orange",
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      items: [
        "대인관계 개선",
        "공감 능력 향상",
        "비언어적 소통 능력 증진",
        "그룹 역동 이해",
        "사회적 연결감 증대",
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return {
          bg: "bg-[var(--color-green-light)]",
          text: "text-[var(--color-green)]",
          border: "border-[var(--color-green)]",
          iconBg: "bg-[var(--color-green)]/10",
        };
      case "blue":
        return {
          bg: "bg-[var(--color-blue-light)]",
          text: "text-[var(--color-blue)]",
          border: "border-[var(--color-blue)]",
          iconBg: "bg-[var(--color-blue)]/10",
        };
      case "orange":
        return {
          bg: "bg-[var(--color-orange-light)]",
          text: "text-[var(--color-orange)]",
          border: "border-[var(--color-orange)]",
          iconBg: "bg-[var(--color-orange)]/10",
        };
      default:
        return {
          bg: "bg-gray-100",
          text: "text-gray-700",
          border: "border-gray-300",
          iconBg: "bg-gray-100",
        };
    }
  };

  return (
    <section id="effect" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            소매틱스 프로그램의 효과
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            소매틱스는 몸, 마음, 사회적 관계 전반에 걸쳐 긍정적인 변화를
            가져옵니다. 과학적 연구와 임상 경험을 통해 검증된 효과들입니다.
          </p>
        </motion.div>

        {/* Methodology Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 relative aspect-[3/1] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={images.somaticLab.methodology}
            alt="소매틱스 방법론"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {effects.map((effect, index) => {
            const colors = getColorClasses(effect.color);
            return (
              <motion.div
                key={effect.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center ${colors.text} mb-6`}
                >
                  {effect.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {effect.category}
                </h3>
                <ul className="space-y-3">
                  {effect.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-gray-600"
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${colors.bg} ${colors.text} mr-3 flex-shrink-0`}
                        style={{
                          backgroundColor:
                            effect.color === "green"
                              ? "var(--color-green)"
                              : effect.color === "blue"
                                ? "var(--color-blue)"
                                : "var(--color-orange)",
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Age Groups Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            연령대별 프로그램
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { img: images.somaticLab.ageGroups.adolescent, label: "청소년" },
              { img: images.somaticLab.ageGroups.youngAdult, label: "청년" },
              { img: images.somaticLab.ageGroups.middle, label: "중장년" },
              { img: images.somaticLab.ageGroups.elderly, label: "노년" },
              { img: images.somaticLab.ageGroups.athletes, label: "운동선수" },
              {
                img: images.somaticLab.ageGroups.entertainment,
                label: "연예인",
              },
            ].map((group, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={group.img}
                  alt={group.label}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold">
                    {group.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
