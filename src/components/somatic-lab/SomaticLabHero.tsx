"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function SomaticLabHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <div className="container relative z-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white italic"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Somatic Laboratory
        </motion.h1>
      </div>
    </section>
  );
}
