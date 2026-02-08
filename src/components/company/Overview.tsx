"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";

const companyInfo = [
  { label: "회사명", value: "주식회사 지혜의밭" },
  { label: "대표이사", value: "(대표이사명)" },
  { label: "설립일", value: "2017년" },
  { label: "주소", value: "서울시 영등포구 대림로 231 MG 빌딩 3층" },
  { label: "전화번호", value: "070-8264-6477" },
  { label: "사업자등록번호", value: "436-81-00789" },
];

export function Overview() {
  return (
    <Section id="overview" background="gray">
      <SectionTitle
        title="회사개요"
        subtitle="지혜의밭을 소개합니다"
        align="center"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full">
            <tbody>
              {companyInfo.map((item, index) => (
                <motion.tr
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={index !== companyInfo.length - 1 ? "border-b border-gray-100" : ""}
                >
                  <th className="px-6 py-5 text-left bg-[var(--color-yellow-light)]/50 w-1/3 font-semibold text-gray-900">
                    {item.label}
                  </th>
                  <td className="px-6 py-5 text-gray-700">
                    {item.value}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
}
