"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Sparkles, Users } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Brain,
  Sparkles,
  Users,
};

export interface ProgramCardData {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: "yellow" | "orange" | "green" | "blue";
  features: string[];
}

interface ProgramGridProps {
  cards: ProgramCardData[];
}

export function ProgramGrid({ cards }: ProgramGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProgramCard {...card} />
        </motion.div>
      ))}
    </div>
  );
}

function ProgramCard({
  icon,
  title,
  subtitle,
  description,
  href,
  color,
  features,
}: ProgramCardData) {
  const Icon = iconMap[icon] ?? Heart;

  const colorClasses = {
    yellow: {
      icon: "bg-[var(--color-yellow)] text-white",
      hover: "group-hover:bg-[var(--color-yellow-light)]",
      tag: "bg-[var(--color-yellow-light)] text-[var(--color-yellow-dark)]",
    },
    orange: {
      icon: "bg-[var(--color-orange)] text-white",
      hover: "group-hover:bg-[var(--color-orange-light)]",
      tag: "bg-[var(--color-orange-light)] text-[var(--color-orange-dark)]",
    },
    green: {
      icon: "bg-[var(--color-green)] text-white",
      hover: "group-hover:bg-[var(--color-green-light)]",
      tag: "bg-[var(--color-green-light)] text-[var(--color-green-dark)]",
    },
    blue: {
      icon: "bg-[var(--color-blue)] text-white",
      hover: "group-hover:bg-[var(--color-blue-light)]",
      tag: "bg-[var(--color-blue-light)] text-[var(--color-blue-dark)]",
    },
  };

  const classes = colorClasses[color];

  return (
    <Link href={href} className="group block">
      <div
        className={`bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 ${classes.hover}`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-xl ${classes.icon} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <span className="text-sm text-gray-500">{subtitle}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span
              key={feature}
              className={`px-3 py-1 rounded-full text-sm ${classes.tag}`}
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
