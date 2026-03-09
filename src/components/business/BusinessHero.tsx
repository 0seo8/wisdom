"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BusinessHero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/business/legacy_business_2.png"
          alt="Business Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="hero-overlay" />
      </div>

      <div className="container relative z-20 px-4">
        <motion.div className="hero-content">
          <h1 
            className="text-5xl md:text-7xl lg:text-7xl font-serif text-white tracking-tight drop-shadow-2xl hero-font-libre hero-title-shadow"
          >
            Educational Event
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
