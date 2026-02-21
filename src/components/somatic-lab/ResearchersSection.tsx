"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { type Researcher } from "@/types/database";

interface ResearchersSectionProps {
  researchers: Researcher[];
}

export function ResearchersSection({ researchers }: ResearchersSectionProps) {
  return (
    <section id="people" className="bg-[#7C554D] py-16 md:py-24">
      <div className="container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            Somatics Researcher
          </h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            발레 전공, 한국 무용 전공, 표현 예술 심리상담 전공, 물리 치료 전공,
            요가, 명상 전공, 통합 예술 치유 전공,
            <br />
            교육학 등을 전공하고 소매틱스를 통해 몸과 마음을 깊이 있게
            공부하신 최고 수준의 전문가들로 구성되어 있습니다.
          </p>
        </motion.div>

        {/* Researchers Grid - 5 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {researchers.map((researcher, index) => (
            <motion.div
              key={researcher.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              {/* Profile Illustration */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-4">
                <Image
                  src={researcher.image_url || ""}
                  alt={researcher.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white">
                {researcher.name}
              </h3>
              <p className="text-white/70 text-sm mt-1 italic">
                {researcher.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Researcher Details - scrollable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {researchers.map((researcher) => (
            <div key={`detail-${researcher.name}`} className="text-white/80 text-xs leading-relaxed">
              {(researcher.qualifications || []).map((qual, i) => (
                <p key={`q-${i}`}>– {qual}</p>
              ))}
              <div className="mt-2">
                {(researcher.bio ? researcher.bio.split('\n') : []).map((exp, i) => (
                  <p key={`e-${i}`}>– {exp}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
