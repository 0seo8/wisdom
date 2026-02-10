"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/common/Button";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-yellow)] via-[var(--color-yellow-dark)] to-[var(--color-orange)] p-10 md:p-16 text-center"
        >
          {/* Background Decorations */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
            >
              기업의 성장과 함께하는
              <br />
              <span className="text-white/90">파트너가 되어 드립니다</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/90 text-lg mb-8 leading-relaxed"
            >
              귀사의 니즈에 맞는 맞춤형 프로그램을 제안해 드립니다.
              <br className="hidden md:block" />
              지금 바로 상담을 신청해 주세요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                href="/contact"
                className="bg-white text-orange-700 hover:bg-gray-100 focus:ring-white"
                size="lg"
              >
                상담 문의하기
              </Button>
              <Button
                href="https://artswisdom.com/브로슈어/"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                size="lg"
              >
                브로슈어 바로가기
              </Button>
              <Button
                href="tel:02-000-0000"
                variant="outline"
                className="border-white text-white hover:bg-white/20 focus:ring-white"
                size="lg"
              >
                전화 상담
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-white/80 text-sm"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>business@artswisdom.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>02-000-0000</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
