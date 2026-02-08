"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProgramImages {
  intro: string;
  performances: string[];
  recommend: string[];
}

interface ProgramCardProps {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  features: string[];
  images: ProgramImages;
  color: "blue" | "green" | "orange";
  reverse?: boolean;
}

export function ProgramCard({
  id,
  title,
  subtitle,
  tagline,
  description,
  features,
  images: programImages,
  color,
  reverse = false,
}: ProgramCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    blue: {
      bg: "from-[var(--color-blue-light)]/40 to-[#f0f8ff]",
      accent: "bg-[var(--color-blue)]",
      text: "text-[var(--color-blue)]",
      border: "border-[var(--color-blue)]",
      featureBg: "bg-[var(--color-blue)]/10",
      tagBg: "bg-[var(--color-blue)]/10",
    },
    green: {
      bg: "from-[var(--color-green-light)]/30 to-[#f0fff0]",
      accent: "bg-[var(--color-green)]",
      text: "text-[var(--color-green)]",
      border: "border-[var(--color-green)]",
      featureBg: "bg-[var(--color-green)]/10",
      tagBg: "bg-[var(--color-green)]/10",
    },
    orange: {
      bg: "from-[var(--color-orange-light)] to-[#fff8f0]",
      accent: "bg-[var(--color-orange)]",
      text: "text-[var(--color-orange)]",
      border: "border-[var(--color-orange)]",
      featureBg: "bg-[var(--color-orange)]/10",
      tagBg: "bg-[var(--color-orange)]/10",
    },
  };

  const colors = colorClasses[color];

  return (
    <section id={id} ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-16 items-center`}
        >
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="space-y-4">
              {/* Main intro image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group">
                <Image
                  src={programImages.intro}
                  alt={`${title} - ${subtitle}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div
                      className={`inline-block w-16 h-16 ${colors.accent} rounded-xl mb-3 flex items-center justify-center shadow-lg`}
                    >
                      <ProgramIcon type={id} />
                    </div>
                    <p className="font-bold text-xl text-white">{title}</p>
                    <p className="text-white/80 text-sm mt-1">{subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Performance images grid */}
              {programImages.performances.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {programImages.performances.slice(0, 2).map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                      className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-md"
                    >
                      <Image
                        src={img}
                        alt={`${title} performance ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <div
              className={`inline-block px-3 py-1 ${colors.tagBg} rounded-full mb-4`}
            >
              <span className={`text-sm font-medium ${colors.text}`}>
                #{id}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>

            <p className={`text-lg font-medium ${colors.text} mb-2`}>
              {subtitle}
            </p>

            <p className="text-gray-500 font-medium mb-4">{tagline}</p>

            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {features.map((feature, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`px-4 py-2 ${colors.featureBg} rounded-full text-sm font-medium text-gray-700`}
                >
                  {feature}
                </motion.span>
              ))}
            </div>

            {/* Recommend Images */}
            {programImages.recommend.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">
                  프로그램 현장
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {programImages.recommend.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                      className="relative aspect-[3/2] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image
                        src={img}
                        alt={`${title} 추천 ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramIcon({ type }: { type: string }) {
  const iconClass = "w-12 h-12 text-white";

  switch (type) {
    case "communication":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      );
    case "sympathy":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      );
    case "reduce":
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClass}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      );
  }
}
