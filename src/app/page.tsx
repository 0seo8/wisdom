import { Suspense } from "react";
import {
  Hero,
  Greeting,
  MissionVision,
  CoreValues,
  Timeline,
  SDGs,
  NoticePreview,
  HomeContact,
  Partners,
} from "@/components/home";
import {
  Overview,
  Certification,
  CISection,
  MapSection,
} from "@/components/company";

export default function Home() {
  return (
    <>
      <Hero />
      <Greeting />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <SDGs />
      <Overview />
      <Certification />
      <CISection />
      <MapSection />
      <Suspense fallback={null}>
        <NoticePreview />
      </Suspense>
      <HomeContact />
      <Partners />
    </>
  );
}
