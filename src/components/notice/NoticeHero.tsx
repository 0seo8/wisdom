"use client";

import { motion } from "framer-motion";

export function NoticeHero() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--color-orange-light)] via-white to-[var(--color-yellow-light)] py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            공지사항
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            지혜의밭의 새로운 소식을 확인하세요
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[var(--color-orange)] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[var(--color-yellow)] opacity-5 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  );
}
