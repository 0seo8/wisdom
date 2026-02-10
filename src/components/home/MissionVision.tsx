"use client";

import { motion } from "framer-motion";
import { images } from "@/constants/images";
import Image from "next/image";

export function MissionVision() {
  return (
    <section id="vision" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.hero.main} // Using hero background as fallback/base
          alt="Mission Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
      </div>

      <div className="container relative z-10 text-white">
        {/* Top Row: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-wide text-white">
              MISSION
            </h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed break-keep">
              예술의 힘으로 본래의 인간성을 회복하여 <br className="hidden md:block" />
              삶의 터전을 지혜롭게 가꾼다
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-end text-right"
          >
            <h3 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-wide text-white">
              VISION
            </h3>
            <p className="text-xl md:text-2xl font-medium leading-relaxed break-keep">
              건강한 사회를 위해 <br className="hidden md:block" />
              웰니스 문화를 선도하는 <br />
              소셜벤처 · 사회적기업
            </p>
          </motion.div>
        </div>

        {/* Bottom Row: Social Value */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-4xl md:text-5xl font-bold font-serif mb-8 tracking-wide text-white">
            SOCIAL VALUE
          </h3>
          <p className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
            관계로 건강해지는 사회!
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed break-keep">
            몸과 마음을 잇는, 사람과 사람을 잇는 <br className="hidden sm:block" />
            보다 건강하고 아름다운 사회를 만듭니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
