"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { images } from "@/constants/images";
import { type Program } from "@/types/database";

interface ProgramListSectionProps {
  programs: Program[];
}

export function ProgramListSection({ programs }: ProgramListSectionProps) {
  // Optional: A helper to get the specific label string per slug if needed, or just use subtitle.
  const getLabel = (slug: string) => {
    switch (slug) {
      case 'hanna-somatics': return "한나 소매틱스";
      case 'laban-dance-therapy': return "라반 댄스 테라피";
      case 'soma-healing-yoga': return "소마 힐링 요가";
      case 'soma-ballet': return "소마 발레";
      case 'move-move-body-body': return "무브 무브 바디 바디";
      case 'contact-improvisation': return "접촉즉흥 & 써클댄스";
      default: return "";
    }
  };

  return (
    <section id="program">
      {/* Program Header - Dark photo background */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.somaticLab.programsHeader}
            alt="Somatics Program"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-black/50" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-4xl md:text-6xl lg:text-7xl font-serif text-white italic"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          Somatics Program
        </motion.h2>
      </div>

      {/* Programs List - alternating layout */}
      {programs.map((program, index) => {
        const isReverse = index % 2 === 1;
        const bgColor = index % 2 === 0 ? "bg-[#f5f1e8]" : "bg-[#e8e4db]";

        return (
          <div key={program.id} className={`${bgColor}`}>
            <div className="container py-0">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px]`}
              >
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative min-h-[350px] lg:min-h-[500px] ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={program.image_url || ""}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 ${
                    isReverse ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-sm text-[#8b6f47] mb-3">{getLabel(program.slug)}</p>
                  <h3
                    className="text-2xl md:text-4xl font-serif text-[#5D2E1E] mb-6 whitespace-pre-line"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    {program.title}
                  </h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line text-sm md:text-base">
                    <p>{program.description}</p>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {(program.features || []).map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-2 text-gray-700 text-sm md:text-base"
                      >
                        <span className="text-[#8b6f47] mt-0.5">–</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
