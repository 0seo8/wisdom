"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function BusinessHero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center justify-center">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.business.hero}
          alt="Educational Event Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 shadow-lg border border-white/30">
            Business Solutions
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Educational Event
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-8 drop-shadow-md">
            지속가능한 성장을 위해 ESG를 실천하는 곳!
          </p>

          {/* Quick Navigation Buttons */}
          <nav className="flex flex-wrap gap-3 justify-center mt-8">
            {[
              { id: "education", label: "기업교육" },
              { id: "event", label: "행사기획" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-base font-medium text-white hover:bg-white/30 hover:scale-105 transition-all shadow-lg border border-white/30"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      </div>
    </section>
  );
}
