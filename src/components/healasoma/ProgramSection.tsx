"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface ProgramSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageSrc?: string;
  imageAlt: string;
  reverse?: boolean;
  accentColor?: "orange" | "yellow" | "green" | "blue";
}

export function ProgramSection({
  id,
  title,
  subtitle,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false,
  accentColor = "orange",
}: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    orange: {
      bg: "from-[var(--color-orange-light)] to-[#fff8f0]",
      accent: "bg-[var(--color-orange)]",
      text: "text-[var(--color-orange)]",
      border: "border-[var(--color-orange)]",
      featureBg: "bg-[var(--color-orange)]/10",
    },
    yellow: {
      bg: "from-[var(--color-yellow-light)] to-[#fffef0]",
      accent: "bg-[var(--color-yellow)]",
      text: "text-[var(--color-yellow-dark)]",
      border: "border-[var(--color-yellow)]",
      featureBg: "bg-[var(--color-yellow)]/20",
    },
    green: {
      bg: "from-[var(--color-green-light)]/30 to-[#f0fff0]",
      accent: "bg-[var(--color-green)]",
      text: "text-[var(--color-green)]",
      border: "border-[var(--color-green)]",
      featureBg: "bg-[var(--color-green)]/10",
    },
    blue: {
      bg: "from-[var(--color-blue-light)]/30 to-[#f0f8ff]",
      accent: "bg-[var(--color-blue)]",
      text: "text-[var(--color-blue)]",
      border: "border-[var(--color-blue)]",
      featureBg: "bg-[var(--color-blue)]/10",
    },
  };

  const colors = colorClasses[accentColor];

  return (
    <section
      id={id}
      ref={ref}
      className="py-16 md:py-24 scroll-mt-20"
    >
      <div className="container">
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-8 lg:gap-16 items-center`}
        >
          {/* Program Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
              {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
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
            <div className={`inline-block px-3 py-1 ${colors.featureBg} rounded-full mb-4`}>
              <span className={`text-sm font-medium ${colors.text}`}>#{id}</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {title}
            </h2>

            <p className={`text-lg font-medium ${colors.text} mb-4`}>
              {subtitle}
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              {description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProgramIcon({ type }: { type: string }) {
  const iconClass = "w-10 h-10 text-white";

  switch (type) {
    case "bodyfulness":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    case "mindfulness":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "therapy":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    case "expressive":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      );
    case "group":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case "creative":
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      );
  }
}
