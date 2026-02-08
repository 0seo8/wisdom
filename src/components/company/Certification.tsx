"use client";

import { Section, SectionTitle } from "@/components/common";
import { Card, CardContent } from "@/components/common/Card";
import { motion } from "framer-motion";

const certifications = [
  {
    category: "상표등록증",
    items: [
      { name: "지혜의밭 상표", year: "2018" },
      { name: "아트힐링 상표", year: "2019" },
    ],
  },
  {
    category: "저작권등록증",
    items: [
      { name: "아트테라피 프로그램", year: "2019" },
      { name: "웰니스 콘텐츠", year: "2020" },
    ],
  },
  {
    category: "기업인증서",
    items: [
      { name: "사회적기업 인증", year: "2020" },
      { name: "소셜벤처 인증", year: "2021" },
    ],
  },
];

export function Certification() {
  return (
    <Section id="certification" background="gray">
      <SectionTitle
        title="인증"
        subtitle="지혜의밭이 보유한 인증 및 등록 현황"
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full" hover={true}>
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-orange-light)] flex items-center justify-center">
                    <CertIcon category={cert.category} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {cert.category}
                  </h3>
                </div>

                {/* Certification Items */}
                <ul className="space-y-4">
                  {cert.items.map((item, itemIndex) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700 text-sm font-medium">
                        {item.name}
                      </span>
                      <span className="text-gray-500 text-xs bg-white px-2 py-1 rounded">
                        {item.year}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Placeholder for certificate image */}
                <div className="mt-6 aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg
                      className="w-12 h-12 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="text-xs">인증서 이미지</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function CertIcon({ category }: { category: string }) {
  const iconColor = "text-[var(--color-orange)]";

  switch (category) {
    case "상표등록증":
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      );
    case "저작권등록증":
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      );
    case "기업인증서":
      return (
        <svg className={`w-5 h-5 ${iconColor}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      );
    default:
      return null;
  }
}
