"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function DailyArtHero() {
  return (
    <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Next.js Image component */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.dailyArt.hero}
          alt="Daily Art Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-white"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-5 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white mb-6 shadow-lg border border-white/30"
          >
            Daily Art Experience
          </motion.span>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl"
          >
            Arts of Living
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 mb-6 md:mb-8 drop-shadow-lg"
          >
            예술이 힐링이 되는 곳!
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto space-y-3 md:space-y-4"
          >
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed drop-shadow">
              <span className="font-semibold text-white">
                쉽고 편하고 안전한
              </span>{" "}
              콘텐츠로 심리적 저항감이 0인 리허설 공간
            </p>
            <p className="text-sm md:text-base lg:text-lg text-white/85 leading-relaxed drop-shadow">
              예술을 통한 소통, 공감, 해소의 과정에서 누구나 예술가가 될 수 있습니다.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[5]" />
    </section>
  );
}
