"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/contact/hero-bg.jpg')] bg-cover bg-center"
      >
        {/* Dark Overlay */}
        <div className="hero-overlay" />
      </div>

      <div className="container relative z-20">
        <motion.div className="hero-content">
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
