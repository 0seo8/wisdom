import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업교육 및 행사",
  description:
    "지혜의밭의 ESG 기반 맞춤형 기업교육과 행사기획 서비스. 문화예술을 접목한 소통교육, 리더십교육, 참여형 공연, 힐링 프로그램을 제공합니다.",
  openGraph: {
    title: "기업교육 및 행사 | 지혜의밭",
    description:
      "ESG 기반 맞춤형 기업교육과 행사기획 서비스",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
