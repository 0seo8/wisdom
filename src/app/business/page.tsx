"use client";

import {
  BusinessHero,
  IntroSection,
  EducationSection,
  EventSection,
  RecommendationSection,
  PresentSection,
  ReviewSection,
  GallerySection,
} from "@/components/business";

export default function BusinessPage() {
  return (
    <main className="bg-[#fcf3eb] min-h-screen">
      <BusinessHero />
      <IntroSection />
      <EducationSection />
      <EventSection />
      <GallerySection />
    </main>
  );
}
