"use client";

import { motion } from "framer-motion";
import { images } from "@/constants/images";


export function MissionVision() {
  return (
    <section id="vision" className="relative py-20 md:py-32 overflow-hidden min-h-[680px] flex items-center justify-center">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
            backgroundImage: `url(${images.hero.main})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay opacity 0.5 */}
      </div>

      <div className="container relative z-10 text-white px-4">
        <div className="max-w-6xl mx-auto">
             {/* Inner Section with 3 Columns: Mission - Spacer - Vision */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 md:mb-32">
                {/* Mission Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 tracking-wide text-white uppercase">
                        MISSION
                    </h2>
                    <p className="text-lg md:text-xl font-medium leading-relaxed break-keep">
                        예술의 힘으로 본래의 인간성을 <br className="hidden lg:block"/>
                        회복하여 삶의 터전을 지혜롭게 가꾼다
                    </p>
                </motion.div>

                {/* Middle Column (Spacer) - Hidden on mobile if desired, or just empty space */}
                <div className="hidden md:block" />

                {/* Vision Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 tracking-wide text-white uppercase">
                        VISION
                    </h2>
                    <p className="text-lg md:text-xl font-medium leading-relaxed break-keep">
                        건강한 사회를 위해 웰니스 문화를 선도하는 <br className="hidden lg:block"/>
                        소셜벤처 ⋅ 사회적기업
                    </p>
                </motion.div>
            </div>

            {/* Social Value Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
            >
                <div className="mb-12">
                     <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 tracking-wide text-white uppercase">
                        SOCIAL VALUE
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 font-light">
                        A society where your become healthy through relationships.
                    </p>
                </div>

                <div className="space-y-6">
                    <p className="text-2xl md:text-3xl font-bold text-white">
                        “관계로 건강해지는 사회!”
                    </p>
                    <p className="text-lg md:text-xl text-white leading-relaxed break-keep">
                        몸과 마음을 잇는, 사람과 사람을 잇는 <br className="hidden sm:block" />
                        보다 건강하고 아름다운 사회를 만든다.
                    </p>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
}
