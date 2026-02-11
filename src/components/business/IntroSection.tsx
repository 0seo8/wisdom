"use client";

import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="pt-24 pb-16 bg-[#fcf3eb] text-center">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 mb-10 leading-tight tracking-tight break-keep">
            지속가능한 성장을 위해 ESG를 실천하는 곳!
          </h2>

          {/* Description */}
          <div className="space-y-1 text-md md:text-lg text-gray-600 leading-relaxed font-medium break-keep">
            <p>기관 및 기업의 지속적인 성장과 생존에 직결되는 핵심가치로,</p>
            <p>환경(Environmental), 사회(Social), 지배구조(Governance)의</p>
            <p>비재무적인 지표가 실질적인 평가에 도움이 될 수 있도록</p>
            <p>사회적 책임과 인권을 함께 만들어 갑니다.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
