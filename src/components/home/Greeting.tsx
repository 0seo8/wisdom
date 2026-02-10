"use client";

import { Section } from "@/components/common";
import { images } from "@/constants/images";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Import Link

export function Greeting() {
  return (
    <Section id="greeting" className="bg-[var(--background)] py-20 lg:py-28 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: CEO Portrait (Original Order) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start" // Align left
        >
          <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden shadow-2xl">
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

        {/* Right: Greeting Text (Original Order) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#8c5a5a] mb-8 tracking-tight">
            Welcome to the Artswisdom
          </h2>

          <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed font-light">
            <p>
              인간의 최대 가치를 행복이라고 말합니다.
            </p>
            <p>
              행복의 요건을 충족하려면 관계맺기를 잘 해야 하는데 가장 먼저 나와의 건강한 관계를 형성하지 못하면, 처음에는 그럴듯하게 보이던 타인과의 관계도 어느덧 원만하지 못하여 고통을 받게 됩니다.
            </p>
            <p>
              그 타인은 사랑하는 연인관계이며, 직장상사나 동료관계 이고, 공동체일 수도 있으며, 이웃일 수도 있습니다.
            </p>
            <p>
              인간은 사회적 동물이기에 함께 있을 때 비로소 행복감을 느끼는데 함께 있는 것이 고통이라면 문제가 아닐까요. 사랑하며, 사랑받고 싶어하는 인간의 기본 욕구가 온전히 채워지지 않아서 다양한 사회문제가 야기됩니다.
            </p>
            <p>
              누구에게나 잠재되어 있는 무한한 가능성을 회복하여 삶의 터전을 지혜롭게 가꾼다면 이 사회는 아름다운 사회, 살기 좋은 사회가 된다는 분명한 믿음으로 “지금 계신 그 곳이 지혜의 자리가 될 수 있도록…” 힘을 보태는 지혜의밭이 될 것을 약속합니다.
            </p>
            <p className="font-medium pt-4">
              감사합니다.
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-[#8c5a5a]/20">
             <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Societal Enterprise</p>
                  <p className="text-xl font-bold text-gray-900">
                    주식회사 지혜의밭
                  </p>
                </div>
                {/* CEO Info removed from text flow in original, keeping simple or adding signature if needed. 
                    Original seems to just have text. I will keep it simple. */}
             </div>
          </div>
        </motion.div>
      </div>

       {/* Web Brochure Banner (Sticky/Bottom) */}
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#8c5a5a]/10 rounded-full flex items-center justify-center text-[#8c5a5a]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-900">지혜의밭 웹브로슈어</h3>
                <p className="text-sm text-gray-500">회사 소개 및 프로그램 안내를 확인해보세요.</p>
            </div>
        </div>
        <Link 
            href="https://artswisdom.com/브로슈어/" 
            target="_blank"
            className="px-6 py-3 bg-[#8c5a5a] text-white font-medium rounded-lg hover:bg-[#7a4e4e] transition-colors flex items-center gap-2 whitespace-nowrap"
        >
            바로가기
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </Link>
      </motion.div>
    </Section>
  );
}
