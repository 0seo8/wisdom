import Link from "next/link";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { companyInfo } from "@/constants/navigation";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#2a2826] text-white/80 py-16">
      <div className="container">
        
        {/* Top Section: Social Icons */}
        <div className="flex justify-end mb-8 border-b border-white/10 pb-8">
           <div className="flex gap-4">
              <SocialLink
                href="https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g"
                icon={<Youtube className="w-5 h-5" />}
                label="YouTube"
              />
              <SocialLink
                href="https://blog.naver.com/artswisdom"
                icon={<BlogIcon />}
                label="Blog"
              />
              <SocialLink
                href="https://www.instagram.com/artswisdom_official/"
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://www.facebook.com/artswisdom/"
                icon={<Facebook className="w-5 h-5" />}
                label="Facebook"
              />
            </div>
        </div>

        {/* Main Section: Logo & Info */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            
            {/* Left: Logo & Slogan */}
            <div className="max-w-sm">
                 <Link href="/" className="inline-block mb-6">
                    <Logo className="[&_span]:text-white [&_rect]:stroke-white [&_line]:stroke-white [&_circle]:fill-white" />
                 </Link>
                 <p className="text-sm text-white/60 leading-relaxed">
                    {companyInfo.slogan}
                 </p>
            </div>

            {/* Right: Company Details */}
            <div className="text-sm font-light space-y-2 text-white/70">
                <p className="font-bold text-white mb-4 text-lg">{companyInfo.name}</p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                     <div className="space-y-1">
                        <p>대표이사 : {companyInfo.ceo}</p>
                        <p>주소 : {companyInfo.address}</p>
                        <p>사업자등록번호 : 436-81-00789</p>
                     </div>
                     <div className="space-y-1">
                         <p>TEL : 070-8264-6477</p>
                         <p>FAX : 0504-387-6477</p>
                         <p>E-mail : {companyInfo.email}</p>
                     </div>
                </div>
            </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/40 flex justify-between items-center">
             <p>
               &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
             </p>
             <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-white transition-colors">
                    개인정보처리방침
                </Link>
             </div>
        </div>

      </div>
    </footer>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-[#8c5a5a] hover:text-white transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function BlogIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
        <path d="M11.05 6.75c-2.4 2.85-6.83 8-6.83 8s7 6.31 16.7 1.15c0 0-3.66-2.19-8.72-3.83 4.29-.65 7.85-1.92 7.85-1.92s-3.53-2.9-9-3.4zm-.92 1.34c3.48.33 5.48 1.48 5.48 1.48s-1.88.66-4.14 1.05c-2.45.43-4.66.7-4.66.7s2.51-2.92 3.32-3.23zM2.8 19.82c.45-.61 3.52-4.96 6.36-8.31.28.32.74.83.74.83s-4.42 5.09-5.18 5.76c-.76.67-1.39 1.17-1.92 1.72z"/>
    </svg>
  );
}
