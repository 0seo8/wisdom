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
          src={images.somaticLab.programsHeader}
          alt="Somatic Lab Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/5" />

      {/* Content */}
      <div className="container relative z-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-7xl text-white leading-[1]"
          style={{ fontFamily: "var(--font-libre-baskerville), 'Times New Roman', serif", textShadow: "0 2px 18px rgba(0,0,0,0.5)" }}
        >
          Somatic Laboratory
        </motion.h1>
      </div>
    </section>
  );
}
