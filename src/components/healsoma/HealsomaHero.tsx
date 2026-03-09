"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function HealsomaHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 z-10 bg-black/45" />

      {/* Content */}
      <div className="container relative z-20 text-center">
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
            className="text-white text-5xl md:text-7xl lg:text-7xl font-serif font-medium tracking-wide"
            style={{ textShadow: "0 2px 18px rgba(0,0,0,0.5)" }}
          >
            HEALSOMA
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
