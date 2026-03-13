import { Metadata } from "next";
import {
  HealsomaHero,
  IntroSection,
  ProgramDivider,
  ProgramsLayout,
} from "@/components/healsoma";

export const metadata: Metadata = {
  title: "힐소마 - 온전한 쉼",
  description:
    "힐소마는 치유(HEAL)와 몸(SOMA)의 합성어로, 몸과 마음의 통합적 회복을 추구하는 웰니스 프로그램입니다. 바디풀니스, 마인드풀니스, 테라피, 표현 예술, 집단 상담, 연극 놀이 프로그램을 제공합니다.",
  keywords: [
    "힐소마",
    "HEALSOMA",
    "웰니스",
    "명상",
    "소매틱스",
    "아로마테라피",
    "표현예술치료",
    "집단상담",
    "연극놀이",
  ],
};

export default async function HealsomaPage() {
  return (
    <main className="bg-[#fcf3eb]">
      <HealsomaHero />
      <IntroSection />
      <ProgramDivider />
      <ProgramsLayout />
    </main>
  );
}
