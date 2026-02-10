"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

export function SDGs() {
  return (
    <Section id="sdgs" background="white" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#8c5a5a] tracking-wide mb-2">
          SDGs를 위한 약속
        </h2>
        <div className="w-16 h-1 bg-[#8c5a5a] mx-auto mt-4 opacity-70"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        {/* SDGs Main Image (Grid of Icons) */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex justify-center"
        >
            <div className="relative w-full max-w-3xl aspect-[2/1]">
                <Image
                    src={images.sdgs.main}
                    alt="UN SDGs Icons"
                    fill
                    className="object-contain"
                />
            </div>
        </motion.div>

        {/* Text Commitment List - "하나," format */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-start gap-3"
            >
                <span className="text-[#8c5a5a] font-bold text-xl whitespace-nowrap">하나,</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                    모든 이들의 몸과 마음의 건강을 위한 활동을 이어갑니다.
                </p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start gap-3"
            >
                <span className="text-[#8c5a5a] font-bold text-xl whitespace-nowrap">하나,</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                    지속 가능한 성장을 추구하며 지역 사회의 문제를 해결해 나갑니다.
                </p>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start gap-3"
            >
                <span className="text-[#8c5a5a] font-bold text-xl whitespace-nowrap">하나,</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                     세대 간의 격차를 줄이고 모두가 소통할 수 있는 문화를 만듭니다.
                </p>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-3"
            >
                <span className="text-[#8c5a5a] font-bold text-xl whitespace-nowrap">하나,</span>
                <p className="text-gray-700 text-lg leading-relaxed">
                    다음 세대를 위한 환경 보호와 윤리 경영을 실천합니다.
                </p>
            </motion.div>
        
        </div>
      </div>
    </Section>
  );
}
