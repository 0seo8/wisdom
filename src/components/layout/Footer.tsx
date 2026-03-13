"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/constants/navigation";
import { images } from "@/constants/images";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/brochure") {
    return null;
  }

  return (
    <footer
      className="border-t border-black/5 bg-[#f2ddcc] pt-20"
      style={{
        paddingBottom:
          "calc(2.5rem + var(--brochure-banner-safe-space) + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="container max-w-[1300px] mx-auto px-4">
        
        {/* Social Icons Section - Centered */}
        <div className="flex justify-center gap-6 mb-16">
          <SocialLink
            href="https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g"
            icon={images.social.youtube}
            label="YouTube"
          />
          <SocialLink
            href="https://blog.naver.com/artswisdom"
            icon={images.social.naver}
            label="Blog"
          />
          <SocialLink
            href="https://www.instagram.com/artswisdom_official/"
            icon={images.social.instagram}
            label="Instagram"
          />
          <SocialLink
            href="https://www.facebook.com/artswisdom/"
            icon={images.social.facebook}
            label="Facebook"
          />
        </div>

        {/* Logo & Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
            
            {/* Center: Large Box Logo */}
            <div className="md:order-1">
                 <Link href="/" className="inline-block">
                    <Image 
                      src={images.logo.vertical}
                      alt="지혜의밭 Logo"
                      width={120}
                      height={150}
                      className="h-auto w-24 md:w-28"
                    />
                 </Link>
            </div>

            {/* Right: Company Details (will appear on right on desktop) */}
            <div className="md:order-2 space-y-1.5 text-[14px] text-gray-700 font-medium">
                <p>대표 : {companyInfo.ceo}</p>
                <p>주소 : {companyInfo.address}</p>
                <p>전화 : 070-8264-6477 | Fax : 0504-387-6477</p>
                <p>사업자등록번호 : 436-81-00789 <Link href="/privacy" className="font-bold hover:underline ml-2">개인정보 처리방침</Link></p>
                <p className="text-gray-500 mt-2">Copyright &copy; 2021 {companyInfo.name}. All rights reserved.</p>
            </div>
        </div>
      </div>

      {/* WebBrochureBanner is rendered globally in layout.tsx */}
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: string;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 flex items-center justify-center transition-transform hover:scale-110"
      aria-label={label}
    >
      <img src={icon} alt={label} className="w-full h-full object-contain" />
    </a>
  );
}
