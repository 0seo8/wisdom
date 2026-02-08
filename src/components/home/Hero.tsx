"use client";

import Image from "next/image";
import { Button } from "@/components/common";
import { images } from "@/constants/images";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    title: "일상의 예술",
    subtitle: "Arts of Living",
    cta: "/daily-art",
    image: images.hero.slide1,
  },
  {
    title: "온전한 쉼",
    subtitle: "Healsoma",
    cta: "/healasoma",
    image: images.hero.slide2,
  },
  {
    title: "소매틱랩",
    subtitle: "Somatic Laboratory",
    cta: "/somatic-lab",
    image: images.hero.slide3,
  },
  {
    title: "기업교육 및 행사",
    subtitle: "Educational Event",
    cta: "/business",
    image: images.hero.main,
  },
];

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
    <section className="relative w-full h-screen overflow-hidden -mt-20">
      <div className="h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 max-w-3xl mx-auto">
                  {selectedIndex === index && (
                    <div className="animate-fade-in">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8">
                        {slide.subtitle}
                      </p>
                      <Button href={slide.cta} size="lg">
                        바로가기
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/30 ${
              selectedIndex === index
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
