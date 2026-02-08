"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

const brandColors = [
  {
    name: "Yellow",
    hex: "#ffd700",
    meaning: "긍정",
    description: "밝은 에너지와 희망을 상징합니다",
    cssVar: "var(--color-yellow)",
    image: images.ci.yellow,
  },
  {
    name: "Orange",
    hex: "#ff8c00",
    meaning: "온정",
    description: "따뜻한 마음과 배려를 상징합니다",
    cssVar: "var(--color-orange)",
    image: images.ci.orange,
  },
  {
    name: "Green",
    hex: "#228b22",
    meaning: "안정",
    description: "성장과 조화를 상징합니다",
    cssVar: "var(--color-green)",
    image: images.ci.green,
  },
  {
    name: "Blue",
    hex: "#4169e1",
    meaning: "치유",
    description: "신뢰와 평온을 상징합니다",
    cssVar: "var(--color-blue)",
    image: images.ci.blue,
  },
];

export function CISection() {
  return (
    <Section id="ci" background="white">
      <SectionTitle
        title="CI"
        subtitle="지혜의밭 브랜드 아이덴티티"
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Logo Images */}
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-48 h-48 bg-white rounded-2xl shadow-sm p-4">
                  <Image
                    src={images.logo.symbol}
                    alt="지혜의밭 심볼"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="relative w-64 h-24 bg-white rounded-xl shadow-sm p-4">
                  <Image
                    src={images.logo.basic}
                    alt="지혜의밭 기본형 로고"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Logo Description */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  로고 구성
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">
                      밭 전(田) + ㅈㅎㅇㅂ
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      지혜의밭의 로고는 한자 '밭 전(田)'의 형태에
                      '지혜의밭'의 자음 'ㅈㅎㅇㅂ'을 결합하여
                      디자인되었습니다.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">
                      상징적 의미
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      '밭'은 지혜가 자라나는 터전을 의미하며,
                      4개의 구획은 차별성, 포용성, 연결성,
                      그리고 지속가능성을 상징합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Color Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            브랜드 컬러
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {brandColors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Color Display */}
                  <div
                    className="aspect-square relative"
                    style={{ backgroundColor: color.cssVar }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/90 font-bold text-2xl">
                        {color.meaning}
                      </span>
                    </div>
                  </div>

                  {/* Color Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {color.name}
                      </span>
                      <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {color.hex.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {color.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            CI 사용에 관한 자세한 가이드라인은 문의하기를 통해 요청해 주세요.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
