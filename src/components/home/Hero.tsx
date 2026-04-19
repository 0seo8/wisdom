"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const slides = [
  {
    title: "일상의 예술",
    subtitle: "Arts of Living",
    href: "/일상의예술",
    image: `${bucketUrl}/hero/main-1.jpg`,
    overlay: "#05050570",
  },
  {
    title: "온전한 쉼'",
    subtitle: "Healsoma",
    href: "/힐소마",
    image: `${bucketUrl}/hero/main-2.jpg`,
    overlay: "#05050570",
  },
  {
    title: "몸과 마음을 연구",
    subtitle: "Somatic Laboratory",
    href: "/소매틱랩",
    image: `${bucketUrl}/hero/hero-bg.jpg`,
    overlay: "#05050570",
  },
  {
    title: "지속 가능한 ESG 실천",
    subtitle: "Sustainable Growth",
    href: "/기업교육-및-행사",
    image: `${bucketUrl}/hero/main-3.jpg`,
    overlay: "#0505053D",
  },
] as const;

export function Hero() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="relative h-[400px] w-full overflow-hidden md:h-[1090px]">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full min-w-0 flex-[0_0_100%]">
              <div
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: slide.overlay }}
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="mx-auto w-full max-w-full px-4 text-center md:max-w-[65%]">
                  {selectedIndex === index && (
                    <div className="animate-fade-in text-center">
                      <h1 className="home-slider-title mb-[10px] text-[30px] md:text-[65px]">
                        {slide.title}
                      </h1>
                      <p className="home-slider-subtitle hero-font-alex-brush mb-[35px] text-[25px] md:text-[65px]">
                        {slide.subtitle}
                      </p>
                      <Link
                        href={slide.href}
                        className="home-slider-button inline-flex items-center justify-center px-5 py-2 text-[12px] md:px-8 md:py-3 md:text-[20px]"
                      >
                        바로가기
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-3 md:bottom-12 md:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            className={`h-2.5 w-2.5 rounded-full transition-all duration-500 focus:outline-none md:h-3 md:w-3 ${
              selectedIndex === index
                ? "scale-125 bg-[#EFEDE1]"
                : "bg-white/45 hover:bg-white/65"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
