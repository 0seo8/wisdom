"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function SomaticLabHero() {
  return (
    <section className="hero-section">
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
      <div className="absolute inset-0 z-10 bg-black/35" />

      {/* Content */}
      <div className="container hero-content">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-7xl font-semibold text-white leading-[1] hero-font-libre hero-title-shadow-strong"
        >
          Somatic Laboratory
        </motion.h1>
      </div>
    </section>
  );
}
