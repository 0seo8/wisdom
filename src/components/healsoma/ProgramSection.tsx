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
  accentColor?: "beige" | "green" | "brown" | "blue" | "yellow";
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
  accentColor = "beige",
}: ProgramSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const bgColorMap = {
    // Offset background box colors
    beige: "bg-[#EEDCCB]", // Light skin/beige
    green: "bg-[#B5C7B1]", // Muted sage green
    brown: "bg-[#7C554D]", // Dark brown
    blue: "bg-[#E0E7FF]",
    yellow: "bg-[#FEF9C3]",
  };
  
  const titleColorMap = {
    // Text is consistently dark brown/reddish for most items in screenshots
    beige: "text-[#5D2E1E]", 
    green: "text-[#5D2E1E]",
    brown: "text-[#5D2E1E]",
    blue: "text-[#1E3A8A]",
    yellow: "text-[#854D0E]",
  }

  const offsetBg = bgColorMap[accentColor as keyof typeof bgColorMap] || "bg-gray-100";
  const textColor = titleColorMap[accentColor as keyof typeof titleColorMap] || "text-gray-900";

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 scroll-mt-20 overflow-hidden ${reverse ? 'bg-white' : 'bg-[#fffcf6]'}`}
    >
      <div className="container">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } gap-12 lg:gap-24 items-center`}
        >
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px]"
          >
             {/* Offset Background Box */}
            <div 
                className={`absolute ${reverse ? 'right-8 top-8' : 'left-8 top-8'} bottom-[-2rem] ${reverse ? 'left-[-2rem]' : 'right-[-2rem]'} ${offsetBg} -z-10`}
                style={{ width: '80%', height: '110%' }}
            />
            
            {/* Image Container */}
             <div className="relative w-full h-[300px] md:h-[400px] shadow-xl">
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

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`w-full md:w-1/2 text-center md:text-left ${reverse ? 'md:pr-12' : 'md:pl-12'}`}
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${textColor} mb-6 leading-tight`}>
              {subtitle}({title})
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-lg">
              {description}
            </p>

            {/* Simple list or features */}
            <div className={`text-sm md:text-base text-gray-600 font-medium`}>
               {features.join(" / ")}
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
