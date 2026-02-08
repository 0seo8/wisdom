import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary" | "transparent";
}

export function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    primary: "bg-[var(--color-yellow-light)]",
    transparent: "bg-transparent",
  };

  return (
    <section
      id={id}
      className={`section ${bgClasses[background]} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
  };

  return (
    <div className={`mb-8 md:mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
