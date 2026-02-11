"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export function WebBrochureBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down a bit (e.g., 200px)
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : 100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-header-bg)]/95 backdrop-blur-sm border-t border-white/20 shadow-lg py-4 px-6 md:px-8"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl">
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-sm">
            지혜의밭 웹브로슈어
          </h3>
          <p className="text-sm text-white/80 hidden md:block">
            회사 소개 및 프로그램 안내를 확인해보세요.
          </p>
        </div>
        <Link 
          href="https://artswisdom.com/브로슈어/" 
          target="_blank"
          className="px-8 py-2 bg-[#8c5a5a] text-white font-medium rounded-full hover:bg-[#7a4e4e] transition-colors shadow-md flex items-center gap-2"
        >
          바로가기
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}
