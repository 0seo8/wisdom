"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    title: "영등포의 숨결 - Art on the Move Seoul",
    description:
      "멈춰진 공간, 아름다운 춤의 숨결로 생기를 불러일으키는 'Art on the Move Seoul' 공연. 춤과 음악으로 영등포시장역이 새롭게 태어납니다.",
    embedId: "u7ty2BU63TA",
  },
  {
    title: "아카펠라 캐롤 메들리 - 문화예술철도 12월 공연",
    description:
      "'Art on the Move Seoul' 문화예술철도 12월 공연! '크리스마스 선물'을 주제로 도심 속 삭막한 지하철 공간에 예술의 숨결을 불어넣었습니다.",
    embedId: "gtn_9wECD-s",
  },
  {
    title: "사회적기업과 기업가 정신 - 서원대학교 산업대학원 초청 특강",
    description:
      "서원대학교 산업대학원 초청 특별강의 – 앙트러프러너십(entrepreneurship). 평생교육학과(소셜벤처전공)석사과정 대상 사회적기업과 기업가정신에 대한 강의를 진행했습니다.",
    embedId: "hVSD7p8_UTA",
  },
  {
    title: "찾아가는 소매틱스 - 직장인 편",
    description:
      "업무 중간 중간 할 수 있는 '찾아가는 소매틱스'의 진행 후 직장인들의 생생 리얼 인터뷰를 들어 보세요.",
    embedId: "QdldO-rgKQg",
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="py-16 md:py-24 bg-[#fcf9f2]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#5d4037] mb-6">
            Gallery
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            지혜의밭이 함께한 다양한 현장의 생생한 모습을 영상으로 만나보세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="aspect-video relative bg-black">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-orange)] transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
