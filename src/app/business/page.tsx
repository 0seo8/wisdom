"use client";

import {
  BusinessHero,
  IntroSection,
  EducationSection,
  EventSection,
  DifferentiatorsSection,
  GallerySection,
  CTASection,
} from "@/components/business";

export default function BusinessPage() {
  return (
    <main>
      <BusinessHero />
      <IntroSection />
      <EducationSection />
      <EventSection />
      <DifferentiatorsSection />
      <GallerySection />
      <CTASection />
    </main>
  );
}
