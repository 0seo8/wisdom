"use client";

import { motion } from "framer-motion";

export function NoticeHero() {
  return (
    <section className="relative h-[450px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{
          backgroundImage: "url('/images/notice/hero-bg.jpg')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight font-libre-baskerville" style={{ fontFamily: "var(--font-libre-baskerville), serif" }}>
            Notice
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
