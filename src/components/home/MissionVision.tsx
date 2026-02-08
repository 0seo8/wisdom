"use client";

import { Section, SectionTitle } from "@/components/common";
import { motion } from "framer-motion";
import { Target, Eye, Heart } from "lucide-react";

const items: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string; description: string; color: "yellow" | "orange" | "green" | "blue" }[] = [
  {
    icon: Target,
    title: "미션",
    subtitle: "Mission",
    description:
      "예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾼다",
    color: "orange",
  },
  {
    icon: Eye,
    title: "비전",
    subtitle: "Vision",
    description: "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 · 사회적기업",
    color: "green",
  },
  {
    icon: Heart,
    title: "사회적 가치",
    subtitle: "Social Value",
    description: "관계로 건강해지는 사회",
    color: "blue",
  },
];

export function MissionVision() {
  return (
    <Section background="white">
      <SectionTitle
        title="미션 · 비전 · 가치"
        subtitle="지혜의밭이 추구하는 가치입니다"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <MissionCard {...item} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

interface MissionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  color: "yellow" | "orange" | "green" | "blue";
}

function MissionCard({
  icon: Icon,
  title,
  subtitle,
  description,
  color,
}: MissionCardProps) {
  const colorClasses = {
    yellow: {
      bg: "bg-[var(--color-yellow-light)]",
      icon: "text-[var(--color-yellow-dark)]",
      border: "border-[var(--color-yellow)]",
    },
    orange: {
      bg: "bg-[var(--color-orange-light)]",
      icon: "text-[var(--color-orange)]",
      border: "border-[var(--color-orange)]",
    },
    green: {
      bg: "bg-[var(--color-green-light)]",
      icon: "text-[var(--color-green)]",
      border: "border-[var(--color-green)]",
    },
    blue: {
      bg: "bg-[var(--color-blue-light)]",
      icon: "text-[var(--color-blue)]",
      border: "border-[var(--color-blue)]",
    },
  };

  const classes = colorClasses[color];

  return (
    <div
      className={`p-8 rounded-2xl border-2 ${classes.border} ${classes.bg} text-center h-full flex flex-col items-center`}
    >
      <div
        className={`w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm`}
      >
        <Icon className={`w-8 h-8 ${classes.icon}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{title}</h3>
      <span className="text-sm text-gray-500 mb-4">{subtitle}</span>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
