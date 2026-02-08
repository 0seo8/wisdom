"use client";

import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { images } from "@/constants/images";

export function Greeting() {
  return (
    <Section id="greeting" background="white">
      <SectionTitle
        title="인사말"
        subtitle="대표이사 인사말씀"
        align="center"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              안녕하세요, 지혜의밭을 찾아주셔서 감사합니다.
            </p>

            <p>
              지혜의밭은 예술의 힘으로 본래의 인간성을 회복하고,
              건강한 사회를 만들어가는 소셜벤처입니다.
            </p>

            <p>
              우리는 삶의 터전을 지혜롭게 가꾸어가며,
              모든 이가 웰니스를 통해 더 나은 삶을 영위할 수 있도록
              다양한 프로그램과 서비스를 제공하고 있습니다.
            </p>

            <p>
              예술과 웰니스의 융합을 통해 개인의 성장과 사회적 가치를
              동시에 추구하며, 지속가능한 발전에 기여하겠습니다.
            </p>

            <p>
              여러분의 삶에 지혜의밭이 함께할 수 있기를 바랍니다.
            </p>

            <div className="pt-4">
              <p className="text-gray-900 font-semibold">
                주식회사 지혜의밭
              </p>
              <p className="text-[var(--color-orange)] font-bold text-lg">
                대표이사 <span className="ml-2">문수정</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* CEO Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={images.ceo.main}
              alt="지혜의밭 대표이사"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
