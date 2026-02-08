"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Placeholder partner logos - will be replaced with actual logos
const partners = [
  { name: "Partner Company 1", placeholder: true },
  { name: "Partner Company 2", placeholder: true },
  { name: "Partner Company 3", placeholder: true },
  { name: "Partner Company 4", placeholder: true },
  { name: "Partner Company 5", placeholder: true },
  { name: "Partner Company 6", placeholder: true },
  { name: "Partner Company 7", placeholder: true },
  { name: "Partner Company 8", placeholder: true },
];

export function PartnersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[var(--color-yellow-dark)] mb-6 shadow-sm">
            Partners
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            함께하는 기업
          </h2>
          <p className="text-gray-600 text-lg">
            다양한 기업들과 함께 사회적 가치를 만들어가고 있습니다.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className="bg-white rounded-xl p-8 flex items-center justify-center h-32 shadow-sm hover:shadow-md transition-shadow"
            >
              {partner.placeholder ? (
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-400">Logo</span>
                </div>
              ) : (
                <span className="text-gray-800 font-medium">{partner.name}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          * 파트너사 로고는 추후 업데이트 예정입니다.
        </motion.p>
      </div>
    </section>
  );
}
