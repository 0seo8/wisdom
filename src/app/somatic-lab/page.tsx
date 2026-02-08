"use client";

import { motion } from "framer-motion";
import {
  SomaticLabHero,
  OverviewSection,
  EffectSection,
  ArticleSection,
  ResearchersSection,
  ProgramListSection,
} from "@/components/somatic-lab";

export default function SomaticLabPage() {
  return (
    <main>
      <SomaticLabHero />

      {/* Quick Navigation */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {[
              { id: "overview", label: "개요" },
              { id: "effect", label: "효과" },
              { id: "article", label: "논문" },
              { id: "people", label: "연구원" },
              { id: "program", label: "프로그램" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-4 py-2 bg-gray-50 hover:bg-[var(--color-green-light)] rounded-full text-sm font-medium text-gray-700 hover:text-[var(--color-green-dark)] transition-all"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Page Sections */}
      <OverviewSection />
      <EffectSection />
      <ArticleSection />
      <ResearchersSection />
      <ProgramListSection />

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-green-light)] via-white to-[#e8f5e9]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              소매틱랩 프로그램에 대해 더 알고 싶으신가요?
            </h2>
            <p className="text-gray-600 mb-8">
              개인 또는 단체를 위한 맞춤 프로그램을 제공합니다.
              <br />
              문의를 통해 자세한 내용을 안내받으세요.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-green)] text-white font-medium rounded-full hover:bg-[var(--color-green-dark)] transition-colors duration-200 shadow-lg shadow-[var(--color-green)]/30"
            >
              프로그램 문의하기
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
