"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const PARTNER_LOGOS = [
  {
    src: `${bucketUrl}/sdgs/environment.png`,
    alt: "environment-3751682_1920",
  },
  {
    src: `${bucketUrl}/sdgs/abstract-bg.png`,
    alt: "abstract-1751248",
  },
  {
    src: `${bucketUrl}/sdgs/earth-day.png`,
    alt: "Earth-Day-blue-rectangle-logo-1",
  },
  {
    src: `${bucketUrl}/misc/annotation-1.png`,
    alt: "blog",
  },
  {
    src: `${bucketUrl}/misc/annotation-2.png`,
    alt: "2040957195_JTQOnsMu_64a79c3a9e3cc58cd65618598ca7f3e0bd7e4ef5",
  },
  {
    src: `${bucketUrl}/misc/naver-cafe-logo.png`,
    alt: "logo",
  },
] as const;

export function Partners() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const syncCarouselState = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    syncCarouselState();
    emblaApi.on("reInit", syncCarouselState);
    emblaApi.on("select", syncCarouselState);

    return () => {
      emblaApi.off("reInit", syncCarouselState);
      emblaApi.off("select", syncCarouselState);
    };
  }, [emblaApi, syncCarouselState]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section
      id="partners"
      className="bg-[#FCF3EB] px-4 pb-[20px] pt-[30px] md:px-0"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-[20px] text-center font-['Noto_Sans_KR',sans-serif] text-[24px] font-semibold leading-tight text-[#242424] md:text-[35px]">
          함께한 기업,기관
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="이전"
            className="absolute left-[-4px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center text-[#242424] transition-opacity hover:opacity-70 md:left-[-8px]"
          >
            <ChevronLeft className="h-5 w-5 md:h-5 md:w-5" strokeWidth={2} />
          </button>

          <div className="mx-[24px] overflow-hidden md:mx-[30px]" ref={emblaRef}>
            <div className="flex">
              {PARTNER_LOGOS.map((logo) => (
                <div
                  key={logo.src}
                  className="min-w-0 flex-[0_0_calc((100%-50px)/3)] px-[12.5px] md:flex-[0_0_calc((100%-100px)/5)]"
                >
                  <div className="flex h-full min-h-[78px] items-center justify-center md:min-h-[88px]">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-auto max-h-[64px] w-full object-contain md:max-h-[78px]"
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
            className="absolute right-[-4px] top-1/2 z-10 flex -translate-y-1/2 items-center justify-center text-[#242424] transition-opacity hover:opacity-70 md:right-[-8px]"
          >
            <ChevronRight className="h-5 w-5 md:h-5 md:w-5" strokeWidth={2} />
          </button>
        </div>

        {scrollSnaps.length > 0 ? (
          <div className="mt-[18px] flex justify-center gap-[10px]">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`${index + 1}번 로고 보기`}
                aria-current={selectedIndex === index}
                className={`h-[8px] w-[8px] rounded-full transition-colors ${
                  selectedIndex === index ? "bg-[#242424]" : "bg-[#242424]/25"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
