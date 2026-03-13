"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { companyInfo } from "@/constants/navigation";
import { images } from "@/constants/images";

const socialLinks = [
  {
    href: "https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g",
    icon: images.social.youtube,
    label: "YouTube",
  },
  {
    href: "https://blog.naver.com/artswisdom",
    icon: images.social.naver,
    label: "Blog",
  },
  {
    href: "https://www.instagram.com/artswisdom_official/",
    icon: images.social.instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/artswisdom/",
    icon: images.social.facebook,
    label: "Facebook",
  },
] as const;

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/brochure") {
    return null;
  }

  return (
    <footer
      className="border-t border-black/5 bg-[#f2ddcc] pt-6 md:pt-[25px]"
      style={{
        paddingBottom:
          "calc(2.5rem + var(--brochure-banner-safe-space) + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div className="container mx-auto max-w-[800px] px-4">
        
        <div className="mx-auto mb-10 grid max-w-[420px] grid-cols-4 items-center md:mb-12">
          {socialLinks.map((item) => (
            <div key={item.label} className="flex items-center justify-center py-2 md:py-3">
              <SocialLink href={item.href} icon={item.icon} label={item.label} />
            </div>
          ))}
        </div>

        {/* Logo & Info Section */}
        <div className="mx-auto flex max-w-[520px] flex-col items-center justify-center gap-8 text-center md:grid md:max-w-[560px] md:grid-cols-[140px_minmax(0,1fr)] md:items-center md:gap-x-8 md:gap-y-0 md:text-left">
            
            {/* Center: Large Box Logo */}
            <div className="md:justify-self-center">
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
            <div className="space-y-1.5 text-center text-[12px] text-[#2b2b2b] md:text-left md:text-[14px]">
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
      className="flex h-8 w-full items-center justify-center md:h-9"
      aria-label={label}
    >
      <img src={icon} alt={label} className="max-h-full w-auto object-contain" />
    </a>
  );
}
