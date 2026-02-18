"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function ProgramDivider() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background with Fixed Attachment for Sticky Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${images.healsoma.bgHarmony})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-white text-5xl md:text-7xl font-serif font-bold tracking-wider"
      >
        PROGRAM
      </motion.h2>
    </section>
  );
}
