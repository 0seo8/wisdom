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
    <section id="education" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-12"
          >
            {/* Corporate Education */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-serif text-[#5d4037] leading-tight">
                Corporate
                <br />
                Education
                <br />
                <span className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mt-2 block">
                  기업교육
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#8b6f47]">
                    “맞춤형 강의”
                  </h3>
                  <p>
                    기업의 지속성장가능을 위한 소통, 협업, 리더십, 코칭 Skill 등
                    기업의 역량강화를 위한 인사이트 제공 및 기업이 요구하는
                    맞춤형 교육을 진행합니다.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-[#8b6f47]">
                    “Open Space Technology”
                  </h3>
                  <p>
                    조직 내 다양한 이슈를 선택하여 모두가 자유로우며 평등하게
                    토론하고 짧은 공연을 통해 해결방안 도출 및 창의적인
                    아이디어와 함께 유연한 조직을 만들 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform translate-y-8">
                <Image
                  src={images.business.educationPhotos.photo1}
                  alt="기업교육 현장 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={images.business.educationPhotos.photo2}
                  alt="기업교육 현장 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 relative aspect-[21/9] rounded-lg overflow-hidden shadow-lg mt-4">
                <Image
                  src={images.business.educationPhotos.photo3}
                  alt="기업교육 현장 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Corporate Education present */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 flex flex-col lg:flex-row gap-12 items-center bg-[#fcf9f2] rounded-3xl p-8 lg:p-16"
        >
          <div className="flex-1 relative aspect-square lg:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src={images.business.educationMain}
              alt="기업교육 present"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              기업교육 present
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              {[
                "이제는 경영에도 compassion이 필요합니다.",
                "문화예술을 접목하여 module의 특별함을 선사합니다.",
                "결과보다는 과정 중심으로 아이디어의 창의성을 깨웁니다.",
                "문제해결 능력을 민주적인 토의 방식으로 이끕니다.",
                "솔루션을 연습해봄으로써 업무 현장에서 자원이 됩니다.",
                "업무 저해 스트레스 관리 및 번아웃 증후군을 예방합니다.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#8b6f47] rounded-full mt-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-24 text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            이런 대상에게 추천합니다
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: images.business.educationRecommend.partnership,
                text: "새롭고 참신한 방법으로 행사의 퀄리티를 높이고 싶은 조직",
              },
              {
                src: images.business.educationRecommend.onestop,
                text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직",
              },
              {
                src: images.business.educationRecommend.professional,
                text: "One-Stop으로 편리하게 서비스를 받고 싶은 조직 및 공동체",
              },
              {
                src: images.business.educationRecommend.quality,
                text: "일회성 행사에 그치지 않고 섬김과 존중을 받고 싶은 조직 및 공동체",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4 group">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={item.src}
                    alt={item.text}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed break-keep text-left px-2">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
