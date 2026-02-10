"use client";

import {
  BusinessHero,
  IntroSection,
  EducationSection,
  EventSection,
  DifferentiatorsSection,
  GallerySection,
  PartnersSection,
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
      <PartnersSection />
      <CTASection />
    </main>
  );
}
