import type { Metadata } from "next";
import {
  Greeting,
  Overview,
  SDGsSection,
  Certification,
  CISection,
  MapSection,
} from "@/components/company";

export const metadata: Metadata = {
  title: "지혜의밭 소개",
  description:
    "㈜지혜의밭은 예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾸는 소셜벤처·사회적기업입니다. 인사말, 회사개요, SDGs, 인증, CI, 오시는 길을 안내합니다.",
  keywords: [
    "지혜의밭",
    "Artswisdom",
    "소셜벤처",
    "사회적기업",
    "SDGs",
    "ESG",
    "문화예술",
    "웰니스",
  ],
};

export default function CompanyPage() {
  return (
    <>
      <Greeting />
      <Overview />
      <SDGsSection />
      <Certification />
      <CISection />
      <MapSection />
    </>
  );
}
