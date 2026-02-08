"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const videos = [
  {
    title: "넋두리 공연 후 인터뷰",
    description: "배우와 관객이 함께하는 공감의 시간",
    embedId: "dQw4w9WgXcQ",
  },
  {
    title: "무늬만 가족 - 상명대 예술홀",
    description: "현실 기반 가족 드라마, 관객 참여 공연",
    embedId: "dQw4w9WgXcQ",
  },
  {
    title: "몸..,쉼 - 소매틱스/명상 소개",
    description: "소매틱스와 명상을 통한 몸과 마음의 쉼",
    embedId: "dQw4w9WgXcQ",
  },
  {
    title: "내비춤: 몸, 춤, 꽃으로 피어나다",
    description: "나비의 날갯짓처럼 자유로운 움직임 명상",
    embedId: "dQw4w9WgXcQ",
  },
];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-[var(--color-orange)]/10 rounded-full text-sm font-medium text-[var(--color-orange)] mb-6">
            Gallery
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            공연 갤러리
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            일상의 예술 프로그램의 생생한 현장을 만나보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm">영상 준비 중</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
