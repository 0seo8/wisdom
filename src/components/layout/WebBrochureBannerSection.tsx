"use client";

import Link from "next/link";

export function WebBrochureBannerSection() {
  return (
    <div className="w-full bg-[#b6c2ae] py-4">
      <div className="container max-w-[1300px] mx-auto px-4 flex items-center justify-center gap-6">
        <h3 className="text-xl font-bold text-white tracking-tight">
          지혜의밭 웹브로슈어
        </h3>
        <Link 
          href="https://artswisdom.com/브로슈어/" 
          target="_blank"
          className="px-6 py-1.5 bg-[#8c5a5a] text-white text-sm font-medium rounded-full hover:bg-[#7a4e4e] transition-colors shadow-sm"
        >
          바로가기
        </Link>
      </div>
    </div>
  );
}
