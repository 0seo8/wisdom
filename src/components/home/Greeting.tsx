"use client";

import { Section, SectionTitle } from "@/components/common";
import { images } from "@/constants/images";
import { motion } from "framer-motion";
import Image from "next/image";

const greetingParagraphs = [
  "인간의 최대 가치를 행복이라고 말합니다. 행복한 삶을 위해서는 나 자신, 관계, 세상과의 균형이 필요합니다.",
  "지혜의밭은 '예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾼다'는 미션 아래, 소매틱스를 기반으로 한 힐소마(HEALASOMA), 예술을 통한 소통과 공감의 일상의 예술, 그리고 기업과 조직을 위한 맞춤형 교육까지 — 몸과 마음의 건강을 돌보는 웰니스 프로그램을 개발하고 운영하고 있습니다.",
  "우리는 사람과 사람, 사람과 세상을 연결하는 다리가 되고자 합니다. 지혜의밭과 함께 건강하고 행복한 세상을 만들어가겠습니다.",
];

export function Greeting() {
  return (
    <Section id="greeting" background="white">
      <SectionTitle title="인사말" align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Greeting Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-5">
            {greetingParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-gray-700 text-base md:text-lg leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-8 pt-6 border-t border-gray-200"
          >
            <p className="text-lg font-semibold text-gray-900">
              대표이사{" "}
              <span className="text-[var(--color-orange)]">문수정</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Right: CEO Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={images.ceo.main}
              alt="대표이사 문수정"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
