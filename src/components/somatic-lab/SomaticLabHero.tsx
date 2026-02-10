"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function SomaticLabHero() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.somaticLab.hero}
          alt="Somatic Lab Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="container relative z-20 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 shadow-lg border border-white/30">
            Somatic Lab
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Somatic Laboratory
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md">
            Holistic 관점의 소매틱을 연구하여 새로운 웰니스 패러다임을 만들어 갑니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
