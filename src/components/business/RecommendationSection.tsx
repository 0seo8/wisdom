"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";

export function RecommendationSection() {
  const cards = [
    { 
      img: images.business.educationRecommend.partnership, 
      text: "새롭고 참신한 방법으로 행사의 퀄리티를 높이고 싶은 조직" 
    },
    { 
      img: images.business.educationRecommend.onestop, 
      text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직" 
    },
    { 
      img: images.business.educationRecommend.professional, 
      text: "One-Stop으로 편리하게 서비스를 받고 싶은 조직 및 공동체" 
    },
    { 
      img: images.business.educationRecommend.quality, 
      text: "일회성 행사에 그치지 않고 섬김과 존중을 받고 싶은 조직 및 공동체" 
    }
  ];

  return (
    <section className="py-24 bg-[#fcf3eb]">
      <div className="container px-4">
        <h3 className="text-[32px] md:text-[36px] font-bold text-center text-gray-800 mb-16 break-keep">
          이런 대상에게 추천합니다
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
              className="space-y-4"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-md group">
                <Image
                  src={card.img}
                  alt="Recommendation thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-gray-800 leading-relaxed break-keep px-1 text-[15px] md:text-base font-medium">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
