"use client";

import {
  BusinessHero,
  IntroSection,
  EducationSection,
  EventSection,
  DifferentiatorsSection,
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
      <PartnersSection />
      <CTASection />
    </main>
  );
}
