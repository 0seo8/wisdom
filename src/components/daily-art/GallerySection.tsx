"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "넋두리 공연 후 출연배우 및 관객들의 생생한 인터뷰",
    description:
      "넛두리 공연 후 출연배우 및 관객들의 생생한 인터뷰. 있는 그대로 허용해주는 공간 넛두리. 모두가 감동으로 하나 되었다고 합니다.",
    embedId: "IXWTNHh6wHM",
  },
  {
    title: "상명대 아트홀에서 진행한 소통극장 '무늬만 가족' 공연",
    description:
      "상명대 아트홀에서 진행한 소통극장 '무늬만 가족' 공연. 실화를 바탕으로 한 가족의 모습, 관객이 함께 참여했던 감동적인 연극입니다.",
    embedId: "ZggHvYu37jk",
  },
  {
    title: "지혜의밭 '몸..,쉼'을 소개합니다",
    description: "소매틱, somatics, 명상을 통한 몸과 마음의 쉼",
    embedId: "fEeVGJGSRQs",
  },
  {
    title: "내비춤 - 몸, 춤, 꽃으로 피어나다",
    description: "나비의 날갯짓처럼 자유로운 움직임 명상",
    embedId: "JJsVSNW6UFE",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Divider line */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-0.5 bg-gray-400" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-center text-gray-900 mb-12 italic"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="py-4">
                <p className="text-sm text-gray-700 leading-relaxed">
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
