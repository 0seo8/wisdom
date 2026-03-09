"use client";

import { motion } from "framer-motion";

export function NoticeHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/notice/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      <div className="container relative z-20">
        <motion.div className="text-center">
          <h1
            className="text-5xl md:text-7xl lg:text-7xl font-serif text-white tracking-tight font-libre-baskerville hero-font-libre hero-title-shadow-strong"
          >
            Notice
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
