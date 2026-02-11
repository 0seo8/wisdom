"use client";

import {
  SomaticLabHero,
  OverviewSection,
  ArticleSection,
  ResearchersSection,
  ProgramListSection,
} from "@/components/somatic-lab";
import { WebBrochureBanner } from "@/components/layout";

export default function SomaticLabPage() {
  return (
    <main className="bg-[#f5f1e8]">
      <SomaticLabHero />
      <OverviewSection />
      <ResearchersSection />
      <ProgramListSection />
      <ArticleSection />
      <WebBrochureBanner />
    </main>
  );
}
