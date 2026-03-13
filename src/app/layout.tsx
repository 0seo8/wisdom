import type { Metadata } from "next";
import {
  Alex_Brush,
  Dancing_Script,
  Libre_Baskerville,
  Libre_Caslon_Text,
  Noto_Sans_KR,
} from "next/font/google";
import { Header, Footer, WebBrochureBanner } from "@/components/layout";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-brush",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const libreCaslonText = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon-text",
});

export const metadata: Metadata = {
  // ... (existing metadata)
  title: {
    default: "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 ⋅ 사회적기업",
    template: "%s | 지혜의밭",
  },
  description:
    "몸과 마음을 잇는, 사람과 사람을 잇는 보다 건강하고 아름다운 사회를 만듭니다.",
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
  icons: {
    icon: [
      { url: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-symbol.png" },
      { url: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-symbol.png", sizes: "32x32" },
      { url: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-symbol.png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-symbol.png",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://artswisdom.com",
    siteName: "지혜의밭",
    title: "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 ⋅ 사회적기업",
    description:
      "몸과 마음을 잇는, 사람과 사람을 잇는 보다 건강하고 아름다운 사회를 만듭니다.",
    images: [
      {
        url: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-vertical.png",
        width: 1200,
        height: 630,
        alt: "지혜의밭 로고 이미지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "7NAQ48KAtamHmGy1nBJA5mw3eOEO9z79J17u8XJjxYo",
    other: {
      "naver-site-verification": "3d8bab9b466effac9387a43138551211bd61aa6a",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} ${libreBaskerville.variable} ${alexBrush.variable} ${dancingScript.variable} ${libreCaslonText.variable} antialiased`}
      >
        {/* Schema.org Organization Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "지혜의밭",
              alternateName: "Artswisdom",
              url: "https://artswisdom.com",
              logo: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/logo/logo-square.png",
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

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SYVZ8HN5KS"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SYVZ8HN5KS');
            `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLQ4KV4');`,
          }}
        />
        {/* End Google Tag Manager */}
        <Header />
        <main
          className="min-h-screen"
          style={{
            paddingTop: "var(--header-height)",
          }}
        >
          {children}
        </main>
        <Footer />
        <WebBrochureBanner />
      </body>
    </html>
  );
}
