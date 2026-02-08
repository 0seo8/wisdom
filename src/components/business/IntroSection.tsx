"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

export function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "200+", label: "기업 교육 진행" },
    { number: "10,000+", label: "누적 참가자" },
    { number: "98%", label: "만족도" },
    { number: "15+", label: "파트너 기업" },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-yellow)]/20 rounded-full text-sm font-medium text-[var(--color-yellow-dark)] mb-6">
              About B2B Services
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              기업의 지속가능한 성장을 위한
              <br />
              <span className="text-[var(--color-yellow-dark)]">
                문화예술 기반 솔루션
              </span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                지혜의밭은 사회적기업으로서 ESG 경영의 S(Social) 영역을 실천하는
                파트너입니다. 문화예술을 통해 조직 내 소통을 활성화하고,
                구성원의 창의성과 협업 역량을 향상시킵니다.
              </p>
              <p>
                결과 중심이 아닌 과정 중심의 접근으로, 참여자 모두가 주체가 되어
                함께 만들어가는 경험을 제공합니다. 이를 통해 조직 문화 개선과
                개인의 성장이 자연스럽게 이루어집니다.
              </p>
            </div>

            {/* ESG Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "ESG 경영 파트너",
                "사회적 가치 창출",
                "지속가능한 성장",
                "조직 문화 혁신",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Image & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Featured Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images.business.educationMain}
                alt="기업교육 현장"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-gradient-to-br from-[var(--color-yellow-light)]/50 to-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-[var(--color-yellow)]/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--color-yellow-dark)] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
