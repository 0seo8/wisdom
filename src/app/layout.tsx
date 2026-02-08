import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "지혜의밭 - 웰니스 문화를 선도하는 사회적기업",
    template: "%s | 지혜의밭",
  },
  description:
    "예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾸는 소셜벤처 · 사회적기업",
  keywords: [
    "지혜의밭",
    "Artswisdom",
    "웰니스",
    "소매틱스",
    "힐소마",
    "사회적기업",
    "소셜벤처",
    "기업교육",
    "웰빙",
  ],
  authors: [{ name: "㈜지혜의밭" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://artswisdom.com",
    siteName: "지혜의밭",
    title: "지혜의밭 - 웰니스 문화를 선도하는 사회적기업",
    description:
      "예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾸는 소셜벤처 · 사회적기업",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "지혜의밭",
              alternateName: "Artswisdom",
              url: "https://artswisdom.com",
              logo: "https://artswisdom.com/images/logo/logo-square.png",
              description:
                "예술의 힘으로 본래의 인간성을 회복하여 삶의 터전을 지혜롭게 가꾸는 소셜벤처·사회적기업",
              address: {
                "@type": "PostalAddress",
                streetAddress: "대림로 231, MG빌딩 3층",
                addressLocality: "영등포구",
                addressRegion: "서울특별시",
                addressCountry: "KR",
              },
              telephone: "070-8264-6477",
              email: "info@artswisdom.com",
              sameAs: [
                "https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g",
                "https://www.instagram.com/artswisdom_official/",
                "https://www.facebook.com/artswisdom/",
                "https://blog.naver.com/artswisdom",
              ],
            }),
          }}
        />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
