import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소매틱랩",
  description:
    "지혜의밭 소매틱랩은 홀리스틱 관점의 소매틱을 연구합니다. 몸의 내적 경험을 통한 전인적 접근으로 신체적·심리적·사회적 효과를 연구합니다.",
  openGraph: {
    title: "소매틱랩 | 지혜의밭",
    description:
      "홀리스틱 관점의 소매틱을 연구하는 지혜의밭 소매틱 연구소",
  },
};

export default function SomaticLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
