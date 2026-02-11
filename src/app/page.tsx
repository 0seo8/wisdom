import { Suspense } from "react";
import {
  Hero,
  Greeting,
  MissionVision,
  CoreValues,
  Timeline,
  SDGs,
  HomeNoticeContact,
  Partners,
} from "@/components/home";
import {
  Overview,
  Certification,
  CISection,
  MapSection,
} from "@/components/company";
import { WebBrochureBanner } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Hero />
      <Greeting />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <SDGs />
      <Certification />
      <CISection />
      <MapSection />
      <Suspense fallback={null}>
        <HomeNoticeContact />
      </Suspense>
      <Partners />
      <WebBrochureBanner />
    </>
  );
}
