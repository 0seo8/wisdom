"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

const PARTNER_LOGOS = [
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/environment-3751682_1920-e1586679519394-qdoxj8pgg4nahj9tbpoocf9euo5dwexaudwm6h6wi8.png",
    alt: "environment-3751682_1920",
  },
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/abstract-1751248-qdoxj6ts2gkpubcjmovf7fqhnwenh0pu64ln7x9ouo.png",
    alt: "abstract-1751248",
  },
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/Earth-Day-blue-rectangle-logo-1-e1586675775975-qdoxj7rm9am05xb6h7a1rxhy9aa0optki994p78aog.png",
    alt: "Earth-Day-blue-rectangle-logo-1",
  },
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/주석_2020-04-12_143549-removebg-preview-1-qdoxj9namyokt58g683awx0vg20r44116ik3nr5ic0.png",
    alt: "blog",
  },
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/2040957195_JTQOnsMu_64a79c3a9e3cc58cd65618598ca7f3e0bd7e4ef5-qdoxj6ts2gkpubcjmovf7fqhnwenh0pu64ln7x9ouo.png",
    alt: "2040957195_JTQOnsMu_64a79c3a9e3cc58cd65618598ca7f3e0bd7e4ef5",
  },
  {
    src: "https://artswisdom.com/wp-content/uploads/elementor/thumbs/logo-qdoxj9namyokt58g683awx0vg20r44116ik3nr5ic0.png",
    alt: "logo",
  },
] as const;

export function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { active: true },
      },
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="partners" className="bg-[#FCF3EB] px-4 pb-[20px] pt-[20px] md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-[20px] text-center font-['Noto_Sans_KR',sans-serif] text-[24px] font-semibold text-[#242424] md:text-[35px]">
          함께한 기업,기관
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="이전"
            className="absolute left-[-6px] top-1/2 z-10 hidden -translate-y-1/2 text-[#242424] md:flex"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <div className="overflow-hidden md:mx-[28px]" ref={emblaRef}>
            <div className="flex">
              {PARTNER_LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className="min-w-0 flex-[0_0_calc((100%-50px)/3)] px-[12.5px] md:flex-[0_0_calc((100%-100px)/5)]"
                >
                  <div className="flex h-full items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-auto w-full"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="다음"
            className="absolute right-[-6px] top-1/2 z-10 hidden -translate-y-1/2 text-[#242424] md:flex"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}
