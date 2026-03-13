"use client";

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
      <div className="hero-section hero-section--fixed hero-section--mobile-tall">
        <div
          className="absolute inset-0 z-0 hidden bg-cover bg-no-repeat md:block"
          style={{ backgroundImage: `url('${images.somaticLab.programsHeader}')` }}
        />
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center md:hidden"
          style={{ backgroundImage: `url('${images.somaticLab.programsHeader}')` }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        <h2 className="relative z-20 text-[32px] text-white hero-font-times font-semibold md:text-[80px]">
          Somatics Program
        </h2>
      </div>

      {programs.map((program, index) => {
        const isReverse = index % 2 === 1;
        const subtitle = program.subtitle || getLabel(program.slug);

        return (
          <div key={program.id} className="bg-[#fcf3eb]">
            <div className="hidden md:block">
              <div className="container px-6">
                <div className={`grid grid-cols-2 ${isReverse ? "" : ""}`}>
                  <div className={`relative min-h-[470px] ${isReverse ? "order-2" : ""}`}>
                    <Image
                      src={program.image_url || ""}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className={`flex min-h-[470px] items-center justify-center px-10 ${isReverse ? "order-1" : ""}`}>
                    <div className="max-w-[430px] text-center">
                      <p className="mb-4 text-[17px] text-[#541404]">{subtitle}</p>
                      <h3 className="mb-6 text-[45px] leading-[1.1] text-[#85544d] hero-font-times font-semibold">
                        {program.title}
                      </h3>
                      <div className="somatic-body space-y-4 text-[17px] leading-[1.9]">
                        <p className="whitespace-pre-line">{program.description}</p>
                        {!!program.features?.length && (
                          <p className="whitespace-pre-line">
                            {program.features.map((bullet) => `- ${bullet}`).join("\n")}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="relative min-h-[240px] w-full">
                <Image
                  src={program.image_url || ""}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="container px-4 py-8">
                <div className="mx-auto max-w-[560px] text-left">
                  <p className="mb-3 text-[15px] text-[#541404]">{subtitle}</p>
                  <h3 className="mb-4 text-[30px] leading-tight text-[#85544d] hero-font-times font-semibold">
                    {program.title}
                  </h3>
                  <div className="somatic-body space-y-4 text-[16px] leading-[1.9]">
                    <p className="whitespace-pre-line">{program.description}</p>
                    {!!program.features?.length && (
                      <p className="whitespace-pre-line">
                        {program.features.map((bullet) => `- ${bullet}`).join("\n")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
