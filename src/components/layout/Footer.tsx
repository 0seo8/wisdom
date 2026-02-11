import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/constants/navigation";

export function Footer() {
  return (
    <footer className="bg-[#f2ddcc] pt-20 pb-0 border-t border-black/5">
      <div className="container max-w-[1300px] mx-auto px-4">
        
        {/* Social Icons Section - Centered */}
        <div className="flex justify-center gap-6 mb-16">
          <SocialLink
            href="https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g"
            icon="/문의하기/yt_icon_rgb-qdoxjecg4ibquv4kky101rw5h92zt79rvsplatlutu.png"
            label="YouTube"
          />
          <SocialLink
            href="https://blog.naver.com/artswisdom"
            icon="/images/misc/naver-cafe-logo.png" // Using the naver logo if available or similar
            label="Blog"
          />
          <SocialLink
            href="https://www.instagram.com/artswisdom_official/"
            icon="/문의하기/인스타그램_로고_1920_01-e1586670078567-qdoxj9n96c5b8tbecdzv7b2uibq5qpr475g5wfstrg.png"
            label="Instagram"
          />
          <SocialLink
            href="https://www.facebook.com/artswisdom/"
            icon="/문의하기/f_logo_RGB-Hex-Blue_512-qdoxj8pezi40x7crhvl8mtbdwxusj0ndv0sof5u7xo.png"
            label="Facebook"
          />
        </div>

        {/* Logo & Info Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
            
            {/* Center: Large Box Logo */}
            <div className="md:order-1">
                 <Link href="/" className="inline-block">
                    <Image 
                      src="/문의하기/지혜의밭_기본형로고-1-787x1024-1-e1589805611202.png"
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

      <div className="bg-[#B5BAA0] py-4 mt-20">
        <div className="container mx-auto px-4 flex items-center justify-center gap-6">
          <span className="text-white font-bold text-lg">지혜의밭 웹브로슈어</span>
          <Link 
            href="/brochure" 
            className="bg-[#8C6A5E] text-white px-6 py-1.5 rounded-full text-sm font-medium hover:bg-[#7a5c52] transition-colors"
          >
            바로가기
          </Link>
        </div>
      </div>
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
