"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative h-[480px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('/문의하기/vintage-2608934_1280.jpg')] bg-cover bg-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 
            className="text-[80px] md:text-[100px] lg:text-[120px] text-white tracking-tight leading-none"
            style={{ 
              fontFamily: "var(--font-libre-baskerville), serif",
              fontStyle: "normal",
              fontWeight: 400
            }}
          >
            Contact us
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
