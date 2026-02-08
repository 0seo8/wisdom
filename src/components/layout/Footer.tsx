import Link from "next/link";
import { Youtube, Instagram, Facebook } from "lucide-react";
import { companyInfo, navigation } from "@/constants/navigation";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo className="mb-4 [&_span]:text-white [&_rect]:stroke-white [&_line]:stroke-white [&_circle]:fill-white" />
            <p className="text-sm text-gray-400 mb-4">
              {companyInfo.slogan}
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g"
                icon={<Youtube className="w-5 h-5" />}
                label="YouTube"
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
              <SocialLink
                href="https://blog.naver.com/artswisdom"
                icon={<BlogIcon />}
                label="Blog"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              {navigation.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-4">프로그램</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/healasoma"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  힐소마
                </Link>
              </li>
              <li>
                <Link
                  href="/somatic-lab"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  소매틱랩
                </Link>
              </li>
              <li>
                <Link
                  href="/daily-art"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  일상의 예술
                </Link>
              </li>
              <li>
                <Link
                  href="/business"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  기업교육
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>대표: {companyInfo.ceo}</li>
              <li>{companyInfo.address}</li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition-colors"
                >
                  TEL: {companyInfo.phone}
                </a>
              </li>
              <li>FAX: {companyInfo.fax}</li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>사업자등록번호: {companyInfo.businessNumber}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                개인정보처리방침
              </Link>
            </div>
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
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-[var(--color-orange)] hover:text-white transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function BlogIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6zm2 2h4v2H8V6zm0 4h4v2H8v-2z" />
    </svg>
  );
}
