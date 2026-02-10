"use client";

import Image from "next/image";
import { Section } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

interface CoreValueItem {
  imageSrc: string;
  title: string;
  description: string;
  subDescription: string;
}

const coreValues: CoreValueItem[] = [
  {
    imageSrc: images.values.differentiation,
    title: "차별성",
    description: "디테일의 차이가 감동으로 이어진다",
    subDescription: "The difference in detail leads to emotion",
  },
  {
    imageSrc: images.values.inclusivity,
    title: "포용성",
    description: "지속 가능한 성장을 위하여 변화를 수용한다",
    subDescription: "Embrace change for sustainable growth",
  },
  {
    imageSrc: images.values.connectivity,
    title: "연결성",
    description: "모든 에너지는 서로 연결되어 있으므로 우리는 하나다",
    subDescription: "All energy is connected, so we are one",
  },
];

export function CoreValues() {
  return (
    <Section id="core-values" className="py-20 md:py-32 bg-[#f9f9f9]">
      <div className="container text-center">
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#8c5a5a] tracking-wider uppercase mb-2">
            Core Value
          </h2>
          <div className="w-10 h-1 bg-[#8c5a5a] mx-auto opacity-70"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {coreValues.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center group"
            >
              {/* Icon Circle */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 rounded-full overflow-hidden bg-white flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-sm">
                <div className="relative w-full h-full p-4">
                    <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                    />
                </div>
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-lg break-keep px-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
