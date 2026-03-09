"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function BrochureHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="hero-section bg-black pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/brochure/coverv.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center space-y-6"
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-7xl font-serif text-white tracking-tight drop-shadow-xl hero-font-georgia hero-title-shadow"
          >
            Brochure
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            지혜의밭의 프로그램과 가치를 한눈에 확인하세요.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
