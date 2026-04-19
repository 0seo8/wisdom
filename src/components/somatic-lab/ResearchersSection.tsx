"use client";

import Image from "next/image";
import { type Researcher } from "@/types/database";

interface ResearchersSectionProps {
  researchers: Researcher[];
}

export function ResearchersSection({ researchers }: ResearchersSectionProps) {
  return (
    <section id="people" className="bg-[#85544D] py-16 md:py-24 scroll-mt-[76px]">
      <div className="container px-4 md:px-6">
        <h2 className="text-center text-[30px] text-white hero-font-times font-semibold md:text-[45px]">
          Somatics Researcher
        </h2>
        <div className="mx-auto mt-6 max-w-[900px] text-center somatic-body text-[16px] leading-[1.9] md:text-[17px] text-white">
          <p className="hidden md:block">
            발레 전공, 한국 무용 전공, 표현 예술 심리상담 전공, 물리 치료 전공, 요가, 명상 전공, 통합 예술 치유 전공,
            <br />
            교육학 등을 전공하고 소매틱스를 통해 몸과 마음을 깊이 있게 공부하신 최고 수준의 전문가들로 구성되어 있습니다.
          </p>
          <p className="md:hidden">
            발레 전공, 한국 무용 전공, 표현 예술 심리상담 전공, 물리 치료 전공, 요가, 명상 전공,
            <br />
            통합 예술 치유 전공, 교육학 등을 전공하고 소매틱스를 통해 몸과 마음을 깊이 있게
            <br />
            공부하신 최고 수준의 전문가들로 구성되어 있습니다.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5 md:gap-x-8 md:gap-y-12">
          {researchers.map((researcher) => (
            <div key={researcher.name} className="text-center">
              <div className="relative mx-auto mb-3 aspect-square w-full max-w-[180px] md:max-w-none">
                <Image
                  src={researcher.image_url || ""}
                  alt={researcher.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-[20px] text-white hero-font-times font-semibold md:text-[26px]">
                {researcher.name}
              </p>
              <p className="-mt-1 text-[15px] text-white">{researcher.specialty}</p>
              <div className="mt-3 text-left somatic-body text-[13px] leading-[1.8] md:text-[15px] text-white">
                {(researcher.qualifications || []).map((qual, i) => (
                  <p key={`q-${i}`}>- {qual}</p>
                ))}
                {(researcher.bio ? researcher.bio.split("\n") : []).map((exp, i) => (
                  <p key={`e-${i}`}>- {exp}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
