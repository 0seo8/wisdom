"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function WebBrochureBanner() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  if (pathname === "/brochure") {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., 200px)
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const applySafeSpace = () => {
      const height = isVisible ? bannerRef.current?.offsetHeight ?? 0 : 0;
      document.documentElement.style.setProperty(
        "--brochure-banner-safe-space",
        `${height}px`
      );
    };

    applySafeSpace();
    window.addEventListener("resize", applySafeSpace);
    return () => {
      window.removeEventListener("resize", applySafeSpace);
      document.documentElement.style.setProperty("--brochure-banner-safe-space", "0px");
    };
  }, [isVisible]);

  return (
    <motion.div
      ref={bannerRef}
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 overflow-hidden border-t border-white/20 bg-[var(--color-header-bg)]/95 px-4 py-3 shadow-lg backdrop-blur-sm md:px-8 md:py-4"
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 md:gap-4">
        <div className="min-w-0 flex-1 text-left">
          <h3 className="truncate text-[14px] font-bold text-white drop-shadow-sm md:text-xl">
            지혜의밭 웹브로슈어
          </h3>
          <p className="text-sm text-white/80 hidden md:block">
            회사 소개 및 프로그램 안내를 확인해보세요.
          </p>
        </div>
        <Link 
          href="/brochure" 
          className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#8c5a5a] px-3 py-2 text-[13px] font-medium text-white shadow-md transition-colors hover:bg-[#7a4e4e] md:gap-2 md:px-8 md:text-base"
        >
          바로가기
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
