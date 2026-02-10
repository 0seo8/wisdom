"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";

const certifications = [
  {
    category: "상표등록증",
    icon: "stamp",
    items: [
      "넋두리 제 40-1665119 호",
      "무늬만 제 40-1665118 호",
      "내비춤 제 40-1677526 호",
      "소통극장 제 40-1677528 호",
      "공감극장 제 40-1677524 호",
      "지혜의밭 제 40-1705149 호",
    ],
  },
  {
    category: "기업인증",
    icon: "list",
    items: [
      "사회가치측정(SVI) 우수등급인증 (한국사회적기업진흥원)",
      "사회적기업 제 2021-058 호(고용노동부)",
      "여성기업 제 0111-2022-20045 호(서울지방중소벤처기업청)",
      "창업기업 제 202109-90191-0011960 호(중소벤처기업부)",
      "소매틱연구전담부서 제 2023155581 호(과학기술정보통신부)",
      "소셜벤처기업 제 2023-01-1008호(중소벤처기업부)",
    ],
  },
  {
    category: "저작권등록증",
    icon: "certificate",
    items: [
      "넋두리 제 C-2018-011080 호",
      "무늬만 가족 제 C-2017-024230 호",
      "네 이름이 뭐니? 제 C-2021-005812 호",
      "코로나19극복 공감UP 제 C-2021-009720호",
    ],
  },
];

export function Certification() {
  return (
    <Section id="certification" className="py-20 md:py-32 bg-[#FCF3EB]">
      <SectionTitle
        title="인증 및 지식재산권"
        subtitle=""
        align="center"
      />

      <div className="max-w-[1300px] mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="text-gray-600 mt-1">
                  <CertIcon icon={cert.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {cert.category}
                </h3>
              </div>

              {/* Items List */}
              <ul className="space-y-2 pl-0">
                {cert.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 text-sm md:text-base flex items-start gap-2">
                    <span className="text-gray-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CertIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "stamp":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
          <path d="M312 201.8c0-17.4 9.2-33.2 19.9-47C344.5 138.5 352 118.1 152 96.4V80c0-26.5-21.5-48-48-48S56 53.5 56 80v16.4c-6 1.7-12 3.4-18 5.5C11.5 110.8-3.9 139.2 1.2 169.2l26.3 155.5C31.5 344.3 50.2 360 71.7 360h368.6c21.5 0 40.2-15.7 44.1-35.3l26.3-155.5c5.1-30-10.3-58.4-36.8-67.3-6-2.1-12-3.8-18-5.5V80c0-26.5-21.5-48-48-48s-48 21.5-48 48v16.4c-200 21.7-192.5 42.1-179.9 58.4 10.7 13.8 19.9 29.6 19.9 47zM80 80c0-8.8 7.2-16 16-16s16 7.2 16 16v10.8c-10.3 2.3-20.8 5-31.2 8.1L80 80zm336 18.9c-10.4-3.1-20.9-5.8-31.2-8.1V80c0-8.8 7.2-16 16-16s16 7.2 16 16v18.9zM71.7 328L45.5 172.5c-1.7-10 5.2-19.5 15.2-21.5 53.5-11.3 123-17.5 195.3-17.5s141.8 6.2 195.3 17.5c10 2 16.9 11.5 15.2 21.5L440.3 328H71.7zM32 432c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-48H32v48z"/>
        </svg>
      );
    case "list":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
          <path d="M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/>
        </svg>
      );
    case "certificate":
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
          <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/>
        </svg>
      );
    default:
      return null;
  }
}
