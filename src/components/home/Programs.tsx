import { Section, SectionTitle } from "@/components/common";
import { getPrograms } from "@/lib/queries";
import { ProgramGrid } from "./ProgramGrid";

// Category metadata (icon/color mapping not stored in DB)
const categoryMeta: Record<
  string,
  { icon: string; color: "orange" | "green" | "blue" | "yellow"; subtitle: string; href: string }
> = {
  healasoma: { icon: "Heart", color: "orange", subtitle: "HEALASOMA", href: "/healasoma" },
  "somatic-lab": { icon: "Brain", color: "green", subtitle: "SOMATIC LAB", href: "/somatic-lab" },
  "daily-art": { icon: "Sparkles", color: "blue", subtitle: "ART IN LIFE", href: "/daily-art" },
  business: { icon: "Users", color: "yellow", subtitle: "BUSINESS", href: "/business" },
};

// Category display info (matches original hardcoded design exactly)
const categoryDisplay: Record<
  string,
  { title: string; description: string; features: string[] }
> = {
  healasoma: {
    title: "힐소마",
    description: "온전한 쉼을 통해 몸과 마음을 회복하는 웰니스 프로그램",
    features: ["바디풀니스", "마인드풀니스", "테라피", "표현 예술"],
  },
  "somatic-lab": {
    title: "소매틱랩",
    description: "홀리스틱 관점의 소매틱을 연구하는 전담 연구 부서",
    features: ["연구 논문", "전문 연구원", "프로그램 개발"],
  },
  "daily-art": {
    title: "일상의 예술",
    description: "예술을 통한 소통, 공감, 해소의 참여형 공연 프로그램",
    features: ["무늬만 (소통극장)", "넋두리 (공감극장)", "내비춤 (춤명상)"],
  },
  business: {
    title: "기업교육 및 행사",
    description: "ESG를 실천하는 맞춤형 기업교육 및 행사기획",
    features: ["맞춤형 강의", "오픈스페이스", "참여형 공연"],
  },
};

// Fixed display order
const categoryOrder = ["healasoma", "somatic-lab", "daily-art", "business"] as const;

export async function Programs() {
  // Fetch to verify categories exist in DB, but use fixed display data
  const programs = await getPrograms();
  const activeCategories = new Set(programs.map((p) => p.category));

  const cards = categoryOrder
    .filter((category) => activeCategories.has(category))
    .map((category) => {
      const meta = categoryMeta[category];
      const display = categoryDisplay[category];

      return {
        icon: meta.icon,
        title: display.title,
        subtitle: meta.subtitle,
        description: display.description,
        href: meta.href,
        color: meta.color,
        features: display.features,
      };
    });

  return (
    <Section background="gray">
      <SectionTitle
        title="프로그램"
        subtitle="지혜의밭이 제공하는 다양한 웰니스 프로그램을 만나보세요"
      />
      <ProgramGrid cards={cards} />
    </Section>
  );
}
