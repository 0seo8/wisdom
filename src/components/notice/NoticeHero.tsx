"use client";

import { motion } from "framer-motion";

export function NoticeHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center min-h-[400px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/공지사항/write-1957302_1280.jpg')", // Using the 'write' image as it fits the 'Notice' theme well
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Notice
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light">
            지혜의밭의 새로운 소식과 공지사항을 확인하세요
          </p>
        </motion.div>
      </div>
    </section>
  );
}
