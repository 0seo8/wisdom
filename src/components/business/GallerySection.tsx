"use client";

import { motion } from "framer-motion";

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
      "서원대학교 산업대학원 초청 특별강의 – 앙트러프러너십(entrepreneurship). 평생교육학과(소셜벤처전공)석사과정 대상 사회적기업และ 기업가정신에 대한 강의를 진행했습니다.",
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
  return (
    <section id="gallery" className="py-24 bg-[#fcf3eb]">
      <div className="container px-4 mx-auto max-w-[1400px]">
        {/* Simple Divider line */}
        <div className="flex justify-center mb-6">
          <div className="w-[80px] h-[1.5px] bg-[#7a5c51] opacity-50" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[48px] md:text-[60px] lg:text-[70px] text-center text-[#7a5c51] mb-20"
          style={{ fontFamily: "var(--font-libre-baskerville), serif" }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="space-y-6"
            >
              <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl bg-black group">
                <iframe
                  className="absolute inset-0 w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="py-2">
                <p className="text-gray-600 leading-relaxed break-keep text-[15px] md:text-[16px]">
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
