import { Metadata } from "next";
import {
  DailyArtHero,
  IntroSection,
  ProgramCard,
  ValuesSection,
} from "@/components/daily-art";
import { images } from "@/constants/images";

export const metadata: Metadata = {
  title: "일상의 예술 - 쉽고, 재미있고, 안전한 예술 경험 | 지혜의밭",
  description:
    "일상의 예술은 누구나 예술가가 될 수 있는 참여형 예술 프로그램입니다. 무늬만(소통극장), 넋두리(공감극장), 내비춤(춤명상)을 통해 소통, 공감, 해소를 경험하세요.",
  keywords: [
    "일상의 예술",
    "참여형 예술",
    "소통극장",
    "공감극장",
    "춤명상",
    "무늬만",
    "넋두리",
    "내비춤",
    "포럼시어터",
    "플레이백시어터",
  ],
};

const programs = [
  {
    id: "communication",
    title: "무늬만",
    subtitle: "소통극장",
    tagline: "참여형 갈등 해결 공연",
    description:
      "관객이 주인공이 되어 갈등 상황을 연기하고 해결책을 찾는 참여형 공연입니다. 포럼시어터(Forum Theatre) 기법을 활용하여 관객들이 직접 무대에 올라 상황을 변화시키고, 함께 더 나은 결말을 만들어갑니다. 소통의 어려움을 겪는 상황에서 새로운 관점과 해결책을 발견할 수 있습니다.",
    features: ["갈등 상황 재현", "관객 참여 연기", "해결책 모색", "토론과 성찰"],
    images: {
      intro: images.dailyArt.muniman.intro,
      performances: [
        images.dailyArt.muniman.performance1,
        images.dailyArt.muniman.performance4,
      ],
      recommend: [
        images.dailyArt.muniman.recommend1,
        images.dailyArt.muniman.recommend2,
        images.dailyArt.muniman.recommend3,
        images.dailyArt.muniman.recommend4,
      ],
    },
    color: "blue" as const,
  },
  {
    id: "sympathy",
    title: "넋두리",
    subtitle: "공감극장",
    tagline: "즉흥 공연으로 공감 창출",
    description:
      "실시간 관객의 이야기를 바탕으로 즉흥 연기를 펼치는 공감 중심 공연입니다. 플레이백시어터(Playback Theatre) 기법을 통해 관객의 경험과 감정이 무대 위에서 예술적으로 재현됩니다. 자신의 이야기가 존중받고 공유되는 경험을 통해 깊은 공감과 치유를 경험할 수 있습니다.",
    features: ["실시간 이야기 수집", "즉흥 연기", "공감 형성", "감정 정화"],
    images: {
      intro: images.dailyArt.nukduri.intro,
      performances: [
        images.dailyArt.nukduri.performance5,
        images.dailyArt.nukduri.performance2,
      ],
      recommend: [
        images.dailyArt.nukduri.recommend1,
        images.dailyArt.nukduri.recommend2,
        images.dailyArt.nukduri.recommend3,
        images.dailyArt.nukduri.recommend4,
      ],
    },
    color: "green" as const,
  },
  {
    id: "reduce",
    title: "내비춤",
    subtitle: "춤명상",
    tagline: "몸의 움직임을 통한 치유",
    description:
      "음악에 맞춰 자유롭게 몸을 움직이며 스트레스를 해소하는 움직임 명상입니다. 춤에 대한 기술이나 경험이 필요 없으며, 오직 자신의 몸과 호흡에 집중합니다. 억압된 감정을 몸을 통해 표현하고 해방하며, 내면의 자유로움을 되찾는 시간입니다.",
    features: ["자유로운 움직임", "음악과 호흡", "스트레스 해소", "내면 탐색"],
    images: {
      intro: images.dailyArt.navichoom.hero,
      performances: [
        images.dailyArt.navichoom.performance,
        images.dailyArt.navichoom.workshop,
      ],
      recommend: [
        images.dailyArt.navichoom.recommend1,
        images.dailyArt.navichoom.recommend2,
        images.dailyArt.navichoom.recommend3,
        images.dailyArt.navichoom.recommend4,
      ],
    },
    color: "orange" as const,
  },
];

export default function DailyArtPage() {
  return (
    <main>
      <DailyArtHero />
      <IntroSection />

      {/* Program Sections */}
      <div className="divide-y divide-gray-100">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} {...program} reverse={index % 2 === 1} />
        ))}
      </div>

      <ValuesSection />

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--color-blue-light)]/30 via-white to-[var(--color-green-light)]/20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              일상의 예술 프로그램에 참여하고 싶으신가요?
            </h2>
            <p className="text-gray-600 mb-8">
              기업, 학교, 단체를 위한 맞춤 프로그램을 제공합니다.
              <br />
              문의를 통해 자세한 내용을 안내받으세요.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-blue)] text-white font-medium rounded-full hover:bg-[var(--color-blue-dark)] transition-colors duration-200 shadow-lg shadow-[var(--color-blue)]/30"
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
