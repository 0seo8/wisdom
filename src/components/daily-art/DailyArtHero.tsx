"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function DailyArtHero() {
  return (
    <>
      {/* Hero Image Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={"/images/daily-art/muniman-performance-4.png"}
            alt="Arts of Living"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/40" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-5xl md:text-7xl lg:text-8xl font-serif text-white italic"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Arts of Living
        </motion.h1>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 md:py-20 bg-[#C8BFA9]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              예술이 힐링이 되는 곳!
            </h2>
            <p className="text-gray-800 leading-relaxed">
              &ldquo;예술의 본질은 존재를 완성하는데 있습니다.&rdquo;
              <br />
              예술을 통해 내적 성찰을 할 수 있도록
              <br />
              모두에게 열려 있지만 누구도 소외되지 않는
              <br />
              쉽고 편하고 안전한 리허설 공간을 만들어 드립니다.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
