"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const brandColors = [
  {
    name: "Communication Yellow",
    hex: "#FFCC00",
    cmyk: "C0 M20 Y100 K0",
    meaning: "소통 (Communication)",
    description: "밝은 에너지와 열린 마음으로 이루어지는 진심 어린 소통",
    cssVar: "var(--color-yellow)",
    image: images.ci.yellow,
    keyword: "Dialogue",
  },
  {
    name: "Synergy Orange",
    hex: "#FF6600",
    cmyk: "C0 M60 Y100 K0",
    meaning: "공감 (Synergy)",
    description: "따뜻한 마음으로 서로를 이해하고 만들어가는 긍정적 시너지",
    cssVar: "var(--color-orange)",
    image: images.ci.orange,
    keyword: "Sympathy",
  },
  {
    name: "Art Green",
    hex: "#8CBA2A",
    cmyk: "C45 M10 Y100 K0",
    meaning: "예술 (Art)",
    description: "창의적인 예술 활동을 통해 피어나는 삶의 기쁨과 조화",
    cssVar: "var(--color-green)",
    image: images.ci.green,
    keyword: "Performance",
  },
  {
    name: "Healing Blue",
    hex: "#1A0EDA",
    cmyk: "C100 M100 Y0 K15",
    meaning: "치유 (Healing)",
    description: "내면의 평화를 되찾고 건강한 삶으로 나아가는 치유",
    cssVar: "var(--color-blue)",
    image: images.ci.blue,
    keyword: "Flower",
  },
];

export function CISection() {
  return (
    <Section id="ci" background="white" className="overflow-hidden">
      <SectionTitle
        title="CI"
        subtitle="지혜의밭 브랜드 아이덴티티"
        align="center"
      />

      <div className="max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-gray-100/50 border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-orange)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--color-orange)]/10 transition-colors duration-700" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-blue)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 group-hover:bg-[var(--color-blue)]/10 transition-colors duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Logo Visuals */}
              <div className="flex flex-col items-center gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-[320px] aspect-square bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-10 flex items-center justify-center transform-gpu"
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={images.logo.symbol}
                      alt="지혜의밭 심볼"
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full max-w-[360px] h-28 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-center"
                >
                  <div className="relative w-full h-full">
                    <Image
                        src={images.logo.basic}
                        alt="지혜의밭 기본형 로고"
                        fill
                        className="object-contain"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Logo Description */}
              <div className="space-y-10">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                    심볼마크 의미
                  </h3>
                  <div className="prose prose-lg text-gray-600">
                     <p className="leading-relaxed text-lg font-light">
                      지혜의밭 심볼은 <strong className="text-gray-900 font-semibold">'밭 전(田)'</strong> 자를 모티브로 하여, 
                      삶의 터전과 그 안에서 피어나는 지혜를 형상화했습니다. 
                      우리의 이름인 <strong className="text-gray-900 font-semibold">'지혜의밭'</strong>의 초성 
                      <strong className="text-gray-900 font-semibold"> 'ㅈ, ㅎ, ㅇ, ㅂ'</strong>을 조형적으로 배치하여 
                      브랜드의 정체성을 담았습니다.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-[var(--color-orange)]/30 hover:bg-white hover:shadow-lg hover:shadow-[var(--color-orange)]/5 transition-all duration-300 group/card">
                    <span className="block text-[var(--color-orange)] font-bold text-xl mb-3 group-hover/card:scale-105 transition-transform origin-left">田 (밭 전)</span>
                    <p className="text-base text-gray-600 font-medium">
                      생명이 자라고 결실을 맺는<br/>터전이자 기반
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-[var(--color-blue)]/30 hover:bg-white hover:shadow-lg hover:shadow-[var(--color-blue)]/5 transition-all duration-300 group/card">
                    <span className="block text-[var(--color-blue)] font-bold text-xl mb-3 group-hover/card:scale-105 transition-transform origin-left">4가지 가치</span>
                    <p className="text-base text-gray-600 font-medium">
                      소통, 공감, 예술, 치유가<br/>어우러지는 공간
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Brand Colors Grid */}
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Brand Colors & Core Values
            </h3>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                네 가지 색상은 지혜의밭이 추구하는 핵심 가치를 상징하며,<br className="hidden sm:block"/>
                각각의 고유한 의미와 에너지를 담고 있습니다.
            </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandColors.map((color, index) => (
                <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "backOut" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white shadow-lg shadow-gray-200/50 border border-gray-100 h-full flex flex-col"
                >
                {/* Color Header */}
                <div 
                    className="h-40 w-full relative flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: color.cssVar }}
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-60" />
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-out" />
                    
                    <span className="relative z-10 text-white font-bold text-3xl tracking-widest drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                        {color.keyword}
                    </span>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-10">
                    <div className="mb-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[var(--text-highlight)] transition-colors" style={{ '--text-highlight': color.cssVar } as any}>
                        {color.meaning}
                        </h4>
                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wide">
                        {color.name}
                        </p>
                    </div>
                    
                    <p className="text-[15px] text-gray-600 leading-relaxed flex-grow">
                    {color.description}
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center text-xs font-mono text-gray-400 bg-gray-50 rounded-lg p-2 group-hover:bg-gray-100 transition-colors">
                        <span className="font-semibold select-none">HEX</span>
                        <span className="tracking-wider">{color.hex}</span>
                    </div>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Usage Guidelines Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-colors border-b border-gray-200 hover:border-gray-900 pb-1 group">
             <span>CI 데이터 다운로드 및 가이드라인 문의하기</span>
             <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
