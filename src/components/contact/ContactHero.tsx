"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/문의하기/vintage-2608934_1280.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wide">
            Contact us
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
