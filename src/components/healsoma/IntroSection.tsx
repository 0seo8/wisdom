"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="py-20 md:py-32 bg-[#BBCcb5] text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333] mb-8">
            일상의 쉼을 더하는 곳!
          </h2>
          
          <div className="space-y-4 text-lg md:text-xl text-[#444] leading-relaxed">
            <p className="font-medium text-2xl mb-6">&quot;당신도 온전한 쉼이 필요하다&quot;</p>
            <p>
              분주한 일상 너머, 깊은 쉼을 통해 평온함을 선사하는 공간.
            </p>
            <p>
              몸에 깃든 감각을 깨우고, 마음의 결을 다독이는 나를 위한 작은 사치.
            </p>
          </div>

          <div className="pt-12">
            <p className="text-[#555] font-bold text-lg mb-4">오직 한 쉼&apos; 힐소마는</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-[#555]">
               <span>Heal(치유/회복)</span>
               <span className="hidden md:inline">+</span>
               <span>Soma(몸)</span>
               <span className="hidden md:inline">=</span>
               <span>온전한 쉼으로 몸과 마음을 회복</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
