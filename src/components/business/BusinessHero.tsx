"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BusinessHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/business/legacy_business_2.png"
          alt="Business Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div className="text-center">
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
