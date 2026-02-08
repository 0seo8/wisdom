"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    icon: Target,
    label: "Mission",
    title: "미션",
    description:
      "예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾼다",
    color: "orange" as const,
  },
  {
    icon: Eye,
    label: "Vision",
    title: "비전",
    description:
      "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 · 사회적기업",
    color: "green" as const,
  },
  {
    icon: Heart,
    label: "Social Value",
    title: "사회적 가치",
    description: "관계로 건강해지는 사회",
    color: "blue" as const,
  },
];

const colorMap = {
  orange: {
    bg: "bg-[var(--color-accent)]",
    bgLight: "bg-[var(--color-accent-light)]",
    text: "text-[var(--color-accent)]",
    border: "border-[var(--color-accent)]",
  },
  green: {
    bg: "bg-[var(--color-primary)]",
    bgLight: "bg-[var(--color-primary-light)]",
    text: "text-[var(--color-primary)]",
    border: "border-[var(--color-primary)]",
  },
  blue: {
    bg: "bg-[var(--color-primary-dark)]",
    bgLight: "bg-[var(--color-primary-light)]",
    text: "text-[var(--color-primary-dark)]",
    border: "border-[var(--color-primary-dark)]",
  },
};

export function MissionVision() {
  return (
    <section id="vision" className="py-16 md:py-24">
      <div className="container">
        <div className="space-y-0">
          {items.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`py-12 md:py-16 ${
                  index < items.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <div className="max-w-3xl mx-auto text-center">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bgLight} mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>

                  {/* Label */}
                  <p
                    className={`text-sm font-semibold tracking-widest uppercase mb-2 ${colors.text}`}
                  >
                    {item.label}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
