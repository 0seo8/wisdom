"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BusinessHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/기업의 예술/20210615_112010.png"
          alt="Business Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center"
        >
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-white tracking-tight drop-shadow-2xl"
            style={{ fontFamily: "var(--font-libre-baskerville), serif" }}
          >
            Educational Event
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
