"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function HealsomaHero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.healsoma.bgLeaves}
          alt="HEALSOMA Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/90 text-xl md:text-2xl font-light tracking-widest mb-4">
            온 전 한 쉼
          </span>
          <h1
            className="text-white text-5xl md:text-7xl lg:text-7xl font-serif font-medium tracking-wide hero-title-shadow"
          >
            HEALSOMA
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
