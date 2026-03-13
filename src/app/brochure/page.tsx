import { Metadata } from "next";
import { BrochureHero, BrochureGallery } from "@/components/brochure";

export const metadata: Metadata = {
  title: "웹브로슈어",
  description: "지혜의밭을 소개하는 웹브로슈어입니다. 회사 소개 및 관련 프로그램 안내를 확인하실 수 있습니다.",
  keywords: ["웹브로슈어", "지혜의밭 소개", "프로그램 안내", "회사소개서", "브로슈어"],
};

export default function BrochurePage() {
  return (
    <main
      className="bg-white"
      style={{ marginTop: "calc(var(--header-height) * -1)" }}
    >
      <BrochureHero />
      <BrochureGallery />
    </main>
  );
}
