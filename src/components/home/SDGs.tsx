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

        {/* Desktop: Centered Vertical List */}
        <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
            {[
                "국민 건강 불평등 해소를 위해 웰니스 문화에 앞장선다.",
                "지속 가능한 지구를 위해 일회용품 사용을 자제한다.",
                "기후 변화 대응을 위해 대중교통을 생활화한다.",
                "양성 평등한 권리의 기업 문화를 조성한다.",
                "지속 가능한 일자리를 위해 사회적 약자를 고용한다.",
                "지역사회와 상생하며 혁신과 인프라를 구축한다.",
                "건강하고 안전한 사회를 위해 기부를 실천한다."
            ].map((text, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row items-center md:items-baseline gap-2 text-center md:text-left"
                >
                    <span className="text-gray-900 font-bold text-xl md:text-2xl whitespace-nowrap">하나,</span>
                    <p className="text-gray-700 text-lg md:text-xl font-medium break-keep">
                        {text}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </Section>
  );
}
