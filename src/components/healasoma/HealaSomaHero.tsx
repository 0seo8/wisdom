"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function HealaSomaHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.healasoma.hero}
          alt="힐소마 배경"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="container relative z-20 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[var(--color-orange)] mb-8 shadow-lg"
          >
            HEAL + SOMA
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
          >
            일상의 쉼을 더하는 곳!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/95 font-medium mb-8 drop-shadow-lg"
          >
            당신도 온전한 쉼이 필요하다
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-4 text-white/90"
          >
            <p className="text-base md:text-lg leading-relaxed drop-shadow-md">
              분주한 일상 너머, 깊은 쉼을 통해 평온함을 선사하는 공간
            </p>
            <p className="text-sm md:text-base leading-relaxed drop-shadow-md">
              <span className="font-semibold text-[var(--color-orange-light)]">힐소마</span> =
              <span className="font-medium"> Heal(치유/회복)</span> +
              <span className="font-medium"> Soma(지성,감성,영성을 가진 몸)</span> =
              <span className="font-medium"> 온전한 쉼으로 몸과 마음을 회복</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
