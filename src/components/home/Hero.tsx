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
    description: "예술이 힐링이 되는 곳! 쉽고, 재미있고, 안전한 예술 경험",
    cta: "/daily-art",
    image: images.hero.slide1,
  },
  {
    title: "온전한 쉼",
    subtitle: "Healsoma",
    description: "일상의 쉼을 더하는 곳, 당신도 온전한 쉼이 필요하다",
    cta: "/healsoma",
    image: images.hero.slide2,
  },
  {
    title: "소매틱랩",
    subtitle: "Somatic Laboratory",
    description: "Holistic 관점의 소매틱을 연구하고 실천합니다",
    cta: "/somatic-lab",
    image: images.hero.slide3,
  },
  {
    title: "기업교육 및 행사",
    subtitle: "Educational Event",
    description: "지속가능한 성장을 위해 ESG를 실천하는 곳!",
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
    <section className="relative w-full h-screen overflow-hidden">
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

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
                  {selectedIndex === index && (
                    <div className="animate-fade-in space-y-6">
                      <p className="text-base sm:text-lg md:text-xl text-white/90 tracking-[0.2em] uppercase font-light">
                        {slide.subtitle}
                      </p>
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-serif">
                        {slide.title}
                      </h1>
                      <div className="w-24 h-[1px] bg-white/50 mx-auto my-8" />
                      <p className="text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light leading-relaxed">
                        {slide.description}
                      </p>
                      <div className="pt-8">
                        <Button 
                          href={slide.cta} 
                          size="lg"
                          className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 min-w-[200px]"
                        >
                          자세히 보기
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`${index + 1}번 슬라이드로 이동`}
            className={`w-3 h-3 rounded-full transition-all duration-500 focus:outline-none ${
              selectedIndex === index
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
