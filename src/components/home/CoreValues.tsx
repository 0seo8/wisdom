"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

interface CoreValueItem {
  imageSrc: string;
  title: string;
  description: string;
}

const coreValues: CoreValueItem[] = [
  {
    imageSrc: images.values.differentiation,
    title: "차별성",
    description: "디테일의 차이가 감동으로",
  },
  {
    imageSrc: images.values.inclusivity,
    title: "포용성",
    description: "변화를 수용하는 열린 자세",
  },
  {
    imageSrc: images.values.connectivity,
    title: "연결성",
    description: "모든 에너지는 연결되어 있습니다",
  },
];

export function CoreValues() {
  return (
    <Section background="white">
      <SectionTitle
        title="핵심가치"
        subtitle="디테일의 차이가 감동으로"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
        {coreValues.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <CoreValueCard {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CoreValueCard({ imageSrc, title, description }: CoreValueItem) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
      <div className="relative w-20 h-20 mb-6">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
