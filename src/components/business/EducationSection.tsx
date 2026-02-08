"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { images } from "@/constants/images";

const programs = [
  {
    title: "소통 교육",
    description: "조직 내 원활한 커뮤니케이션을 위한 프로그램입니다. 예술적 표현을 통해 자연스러운 대화의 장을 열고, 구성원 간 이해와 공감을 높입니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "협업 교육",
    description: "팀워크와 협동 강화를 위한 체험형 프로그램입니다. 함께 창작하는 과정에서 자연스럽게 협업 역량이 향상됩니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "리더십 교육",
    description: "리더의 성장과 역량 개발을 지원합니다. 자기 인식을 높이고, 구성원을 이끄는 진정한 리더십을 발견합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "코칭 교육",
    description: "구성원의 잠재력 발굴을 위한 코칭 프로그램입니다. 스스로 답을 찾아가는 과정을 통해 내적 동기를 발견합니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "오픈스페이스 기술",
    description: "민주적 토론 방식을 활용한 워크숍입니다. 참가자 주도로 의제를 설정하고 논의하며, 조직의 집단 지성을 이끌어냅니다.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "맞춤형 커리큘럼",
    description: "기업의 니즈와 조직 문화에 맞춘 프로그램 설계",
  },
  {
    title: "문화예술 접목",
    description: "연극, 음악, 미술 등 예술적 방법론 활용",
  },
  {
    title: "과정중심 접근",
    description: "결과보다 경험과 성장 과정을 중시",
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-yellow)]/20 rounded-full text-sm font-medium text-[var(--color-yellow-dark)] mb-6">
            Corporate Education
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            기업교육
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            문화예술을 통한 체험형 교육으로 조직의 성장과 구성원의 역량 개발을 지원합니다.
            결과가 아닌 과정에 집중하며, 참여자 모두가 주체가 되는 교육을 진행합니다.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-yellow-light)] to-[var(--color-yellow)]/30 rounded-xl flex items-center justify-center text-[var(--color-yellow-dark)] mb-5 group-hover:scale-110 transition-transform">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {program.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { src: images.business.educationPhotos.photo1, alt: "교육 현장 1" },
            { src: images.business.educationPhotos.photo2, alt: "교육 현장 2" },
            { src: images.business.educationPhotos.photo3, alt: "교육 현장 3" },
          ].map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-[var(--color-yellow-light)] to-[var(--color-yellow)]/20 rounded-2xl p-8 md:p-10 mb-16"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            교육의 특징
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="text-center"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[var(--color-yellow-dark)] font-bold text-lg mx-auto mb-4 shadow-sm">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-8 text-center">
            추천 이유
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: images.business.educationRecommend.partnership, alt: "파트너십", label: "신뢰할 수 있는 파트너십" },
              { src: images.business.educationRecommend.onestop, alt: "원스톱", label: "원스톱 솔루션" },
              { src: images.business.educationRecommend.professional, alt: "전문성", label: "전문성 있는 강사진" },
              { src: images.business.educationRecommend.quality, alt: "품질", label: "높은 교육 품질" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-4">
                  <span className="text-white font-semibold text-sm">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
