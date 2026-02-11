import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "일상의 예술 - 쉽고, 재미있고, 안전한 예술 경험",
  description:
    "일상의 예술은 누구나 예술가가 될 수 있는 참여형 예술 프로그램입니다. 무늬만(소통극장), 넋두리(공감극장), 내비춤(춤명상)을 통해 소통, 공감, 해소를 경험하세요.",
  openGraph: {
    title: "일상의 예술 | 지혜의밭",
    description:
      "쉽고, 재미있고, 안전한 참여형 예술 프로그램 - 무늬만, 넋두리, 내비춤",
  },
};

export default function DailyArtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
