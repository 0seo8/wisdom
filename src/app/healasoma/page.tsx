import { Metadata } from "next";
import {
  HealaSomaHero,
  IntroSection,
  ProgramSection,
} from "@/components/healasoma";
import { images } from "@/constants/images";

export const metadata: Metadata = {
  title: "힐소마 - 온전한 쉼",
  description:
    "힐소마는 치유(HEAL)와 몸(SOMA)의 합성어로, 몸과 마음의 통합적 회복을 추구하는 웰니스 프로그램입니다. 바디풀니스, 마인드풀니스, 테라피, 표현 예술, 집단 상담, 연극 놀이 프로그램을 제공합니다.",
  keywords: [
    "힐소마",
    "HEALASOMA",
    "웰니스",
    "명상",
    "소매틱스",
    "아로마테라피",
    "표현예술치료",
    "집단상담",
    "연극놀이",
  ],
};

const programs = [
  {
    id: "bodyfulness",
    title: "바디풀니스",
    subtitle: "소매틱스 (Somatics)",
    description:
      "몸과 마음의 통합적 접근을 통해 신체 감각을 깨우고 움직임을 탐구합니다. 소마틱스는 '살아있는 몸'의 내적 경험에 주목하며, 자신의 몸을 통해 스스로를 이해하고 치유할 수 있도록 안내합니다. 호흡과 움직임의 연결을 통해 깊은 이완과 자기 인식을 경험해보세요.",
    features: ["신체 자각", "움직임 탐구", "호흡 연결", "몸-마음 통합"],
    imageSrc: images.healasoma.bodyfulness,
    imageAlt: "바디풀니스 프로그램",
    accentColor: "orange" as const,
  },
  {
    id: "mindfulness",
    title: "마인드풀니스",
    subtitle: "명상 (Meditation)",
    description:
      "사마타와 위빠사나 명상을 통해 현재 순간에 깨어있는 연습을 합니다. 마음의 평화와 명료함을 키우며, 일상 속에서도 마음챙김을 실천할 수 있는 기반을 마련합니다. 고요한 집중과 지혜로운 통찰을 통해 내면의 평화를 발견하세요.",
    features: ["사마타 명상", "위빠사나 명상", "일상 마음챙김", "집중력 향상"],
    imageSrc: images.healasoma.mindfulness,
    imageAlt: "마인드풀니스 프로그램",
    accentColor: "blue" as const,
  },
  {
    id: "therapy",
    title: "테라피",
    subtitle: "치유 (Healing Therapies)",
    description:
      "아로마테라피, 춤 테라피, 사운드 테라피, 컬러 테라피 등 다양한 치유 기법을 통해 심신의 균형을 회복합니다. 각각의 테라피는 서로 다른 감각을 자극하여 깊은 이완과 정서적 안정을 가져다줍니다. 자신에게 맞는 치유의 방법을 찾아보세요.",
    features: ["아로마테라피", "댄스무브먼트테라피", "사운드힐링", "컬러테라피"],
    imageSrc: images.healasoma.therapy,
    imageAlt: "테라피 프로그램",
    accentColor: "green" as const,
  },
  {
    id: "expressive",
    title: "표현 예술",
    subtitle: "Expressive Arts Therapy",
    description:
      "음악, 미술, 무용, 연극 등 다양한 예술 매체를 활용하여 내면을 탐색하고 표현합니다. 창의적 과정을 통해 억압된 감정을 자유롭게 표현하고, 자기 이해와 치유의 경험을 얻습니다. 예술은 말로 표현하기 어려운 것들을 드러내는 안전한 통로가 됩니다.",
    features: ["음악치료", "미술치료", "무용동작치료", "드라마치료"],
    imageSrc: images.healasoma.expressiveArt,
    imageAlt: "표현 예술 프로그램",
    accentColor: "yellow" as const,
  },
  {
    id: "group",
    title: "집단 상담",
    subtitle: "Group Counseling",
    description:
      "관계를 통한 치유를 경험합니다. 그룹 역동을 활용하여 대인관계 능력을 향상시키고, 타인과의 연결 속에서 성장합니다. 서로의 이야기를 듣고 공감하며, 자신만의 문제가 아닌 보편적인 인간 경험의 일부임을 깨닫게 됩니다.",
    features: ["그룹 역동", "대인관계 성장", "공감 능력", "상호 지지"],
    imageSrc: images.healasoma.groupCounseling,
    imageAlt: "집단 상담 프로그램",
    accentColor: "blue" as const,
  },
  {
    id: "creative",
    title: "연극 놀이",
    subtitle: "크리에이티브 드라마 (Creative Drama)",
    description:
      "즉흥 연기와 역할 놀이를 통해 자기 표현의 폭을 넓힙니다. 안전한 환경에서 다양한 역할을 경험하며 새로운 관점을 얻고, 창의성과 자발성을 기릅니다. 놀이를 통해 자유롭게 표현하고, 상상력의 세계를 탐험해보세요.",
    features: ["즉흥 연기", "역할 놀이", "창의적 표현", "상상력 개발"],
    imageSrc: images.healasoma.creativeDrama,
    imageAlt: "연극 놀이 프로그램",
    accentColor: "orange" as const,
  },
];

export default function HealaSomaPage() {
  return (
    <main>
      <HealaSomaHero />
      <IntroSection />

      {/* Program Sections */}
      <div id="program" className="divide-y divide-gray-100 scroll-mt-24">
        {programs.map((program, index) => (
          <ProgramSection
            key={program.id}
            {...program}
            reverse={index % 2 === 1}
          />
        ))}
      </div>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-orange-light)] via-white to-[var(--color-yellow-light)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              힐소마 프로그램에 대해 더 알고 싶으신가요?
            </h2>
            <p className="text-gray-600 mb-8">
              개인 또는 단체를 위한 맞춤 프로그램을 제공합니다.
              <br />
              문의를 통해 자세한 내용을 안내받으세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-orange)] text-white font-medium rounded-full hover:bg-[var(--color-orange-dark)] transition-colors duration-200 shadow-lg shadow-[var(--color-orange)]/30"
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
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              <a
                href="https://artswisdom.com/브로슈어/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-orange)] border-2 border-[var(--color-orange)] font-medium rounded-full hover:bg-[var(--color-orange-light)] transition-colors duration-200"
              >
                브로슈어 바로가기
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
