"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/contact/hero-bg.jpg')] bg-cover bg-center"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10">
        <motion.div className="text-center">
          <h1 
            className="text-5xl md:text-7xl lg:text-7xl text-white tracking-tight leading-none font-semibold not-italic hero-font-libre hero-title-shadow-strong"
          >
            Contact us
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
