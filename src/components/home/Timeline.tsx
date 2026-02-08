import Image from "next/image";
import { Section, SectionTitle } from "@/components/common";
import { images } from "@/constants/images";

const timelineData = [
  {
    year: 2017,
    title: "지혜의밭 설립",
    description: "예술의 힘으로 건강한 사회를 만들어가는 소셜벤처 창업",
    image: images.timeline[2017],
  },
  {
    year: 2018,
    title: "소매틱 프로그램 런칭",
    description: "바디풀니스, 마인드풀니스 프로그램 개발 및 운영",
    image: images.timeline[2018],
  },
  {
    year: 2019,
    title: "사회적기업 인증",
    description: "고용노동부 사회적기업 인증 획득",
    image: images.timeline[2019],
  },
  {
    year: 2020,
    title: "힐소마 브랜드 런칭",
    description: "HEAL + SOMA 통합 웰니스 프로그램 브랜드화",
    image: images.timeline[2020],
  },
  {
    year: 2021,
    title: "소매틱랩 설립",
    description: "소매틱 연구 전담부서 인정 및 연구 활동 시작",
    image: images.timeline[2021],
  },
  {
    year: 2022,
    title: "일상의 예술 확장",
    description: "무늬만, 넋두리, 내비춤 프로그램 전국 확대",
    image: images.timeline[2022],
  },
  {
    year: 2024,
    title: "ESG 경영 강화",
    description: "지속가능발전목표 연계 사업 확대 및 파트너십 강화",
    image: images.timeline[2024],
  },
  {
    year: 2025,
    title: "새로운 도약",
    description: "디지털 전환과 글로벌 파트너십 확대",
    image: images.timeline[2025],
  },
];

export function Timeline() {
  return (
    <Section background="gray">
      <SectionTitle
        title="연혁"
        subtitle="지혜의밭이 걸어온 길"
      />

      <div className="max-w-4xl mx-auto">
        <div className="timeline-vertical">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.year}
                className={`timeline-item ${isLeft ? "timeline-left" : "timeline-right"}`}
              >
                {/* Desktop: alternating layout */}
                <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 items-center">
                  {isLeft ? (
                    <>
                      <div className="text-right pr-4">
                        <span className="text-2xl font-bold text-[var(--color-orange)]">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <div className="timeline-dot" />
                      <div className="pl-4">
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                          <Image
                            src={item.image}
                            alt={`${item.year}년 ${item.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-right pr-4">
                        <div className="relative w-48 h-32 rounded-lg overflow-hidden ml-auto">
                          <Image
                            src={item.image}
                            alt={`${item.year}년 ${item.title}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="timeline-dot" />
                      <div className="pl-4">
                        <span className="text-2xl font-bold text-[var(--color-orange)]">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 mt-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile: simple list */}
                <div className="flex gap-4 md:hidden">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.year}년 ${item.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <span className="text-[var(--color-orange)] font-bold text-lg">
                      {item.year}
                    </span>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
