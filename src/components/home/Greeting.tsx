"use client";

import { Section } from "@/components/common";
import { images } from "@/constants/images";
import { motion } from "framer-motion";
import Image from "next/image";


export function Greeting() {
  return (
    <Section id="greeting" className="relative bg-[#FCF3EB] pb-16 pt-12 md:py-20 lg:py-28">
      <div className="flex flex-col md:flex-row items-center max-w-[1140px] mx-auto">
        {/* Left: CEO Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-[45.077%] flex justify-center p-[10px]"
        >
          <div className="w-full shadow-[0_0_20px_rgba(0,0,0,0.15)] bg-white overflow-hidden md:transform md:translate-x-[20px] md:-translate-y-[28px] md:scale-[0.8]" style={{ aspectRatio: '969/961' }}>
             <Image
              src={images.ceo.main}
              alt="대표이사 문수정"
              width={969}
              height={961}
              className="w-full h-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Greeting Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[54.923%] flex flex-col justify-center p-[10px] md:pl-0"
        >
          {/* Spacer representation */}
          <div className="h-[20px] md:h-[50px]"></div>

          <div className="mb-[-42px] relative z-10">
            <h2 
              style={{ fontFamily: '"Times New Roman", Times, serif' }} 
              className="text-[36px] md:text-[40px] font-semibold text-[#85544D] leading-[1em] tracking-normal inline-block"
            >
              Welcome to<br />&nbsp;the Artswisdom
            </h2>
          </div>

          <div style={{ fontFamily: '"Noto Sans KR", sans-serif' }} className="text-[#5B5B5B] text-[15px] font-normal leading-[1.8] tracking-normal space-y-[20px] relative z-0 mt-[62px]">
            <p>
              인간의 최대 가치를 행복이라고 말합니다.<br />
              행복의 요건을 충족하려면 관계맺기를 잘 해야 하는데 가장 먼저 나와의 건강한 관계를<br />
              형성하지 못하면, 처음에는 그럴듯하게 보이던 타인과의 관계도 어느덧 원만하지 못하여<br />
              고통을 받게 됩니다.
            </p>
            <p>
              그 타인은 사랑하는 연인관계이며, 직장상사나 동료관계 이고, 공동체일 수도 있으며,<br />
              이웃일 수도 있습니다.
            </p>
            <p>
              인간은 사회적 동물이기에 함께 있을 때 비로소 행복감을 느끼는데 함께 있는 것이<br />
              고통이라면 문제가 아닐까요. 사랑하며, 사랑받고 싶어하는 인간의 기본 욕구가 온전히<br />
              채워지지 않아서 다양한 사회문제가 야기됩니다.
            </p>
            <p>
              누구에게나 잠재되어 있는 무한한 가능성을 회복하여 삶의 터전을 지혜롭게 가꾼다면<br />
              이 사회는 아름다운 사회, 살기 좋은 사회가 된다는 분명한 믿음으로 “지금 계신 그 곳이 <br />
              지혜의 자리가 될 수 있도록…”<br />
              힘을 보태는 지혜의밭이 될 것을 약속합니다.
            </p>
            <p>
              감사합니다.
            </p>
          </div>
        </motion.div>
      </div>

    </Section>
  );
}
