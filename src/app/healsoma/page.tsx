import { Metadata } from "next";
import {
  HealsomaHero,
  IntroSection,
  ProgramSection,
  ProgramDivider,
} from "@/components/healsoma";
import { WebBrochureBanner } from "@/components/layout";
import { images } from "@/constants/images";

export const metadata: Metadata = {
  title: "힐소마 - 온전한 쉼",
  description:
    "힐소마는 치유(HEAL)와 몸(SOMA)의 합성어로, 몸과 마음의 통합적 회복을 추구하는 웰니스 프로그램입니다. 바디풀니스, 마인드풀니스, 테라피, 표현 예술, 집단 상담, 연극 놀이 프로그램을 제공합니다.",
  keywords: [
    "힐소마",
    "HEALSOMA",
    "웰니스",
    "명상",
    "소매틱스",
    "아로마테라피",
    "표현예술치료",
    "집단상담",
    "연극놀이",
  ],
};

const programs = [
  {
    id: "bodyfulness",
    title: "소매틱스",
    subtitle: "Bodyfulness",
    description:
      "홀리즘 관점의 건강관으로 몸과 마음의 통합적 접근법입니다.\n소매틱스 창시자Tomas hanna는 스트레스와 신경생리학적 기전을\n연구하여 노화의 신비(Myth of Aging)라고 하는 프로토콜을 만들었습니다.\nSoma(살아있는 몸)의 주관적 경험을 중시하며 만성통증, 스트레스 해소,\n잘못된 자세 등을 개선할 수 있습니다.",
    features: ["신체 자각", "움직임 탐구", "호흡 연결", "몸-마음 통합"],
    imageSrc: images.healsoma.bodyfulness,
    imageAlt: "바디풀니스 프로그램",
    accentColor: "beige" as const,
  },
  {
    id: "mindfulness",
    title: "명상",
    subtitle: "Mindfulness",
    description:
      "마음챙김에 기반하여 지금 여기서 일어나는 몸의 감각, 생각, 감정을 알아차리는 명상입니다.\n호흡명상, 자비명상, 걷기 명상 등 다양한 명상 기법을 통해 스트레스를 완화하고 정서적 안정을 돕습니다.\n일상 속에서 깨어있는 마음을 연습하며 삶의 질을 높일 수 있습니다.",
    features: ["사마타 명상", "위빠사나 명상", "일상 마음챙김", "집중력 향상"],
    imageSrc: images.healsoma.mindfulness,
    imageAlt: "마인드풀니스 프로그램",
    accentColor: "blue" as const,
  },
  {
    id: "therapy",
    title: "치유",
    subtitle: "Therapy",
    description:
      "봉사를 뜻하는 ‘Therapeia’에서 유래되었으며\n문제 해결을 스스로 할 수 있도록 도움을 주는\n치유로써 다양한 방법론이 있습니다.\n인간의 내재 된 치유력을 믿고 자연의 상태로\n돌아가서 회복할 것을 돕습니다.",
    features: ["아로마테라피", "춤테라피", "사운드 테라피", "컬러테라피", "스파테라피 등"],
    imageSrc: images.healsoma.therapy,
    imageAlt: "테라피 프로그램",
    accentColor: "green" as const, // Green back for Therapy as seen in screenshot
  },
  {
    id: "expressive",
    title: "표현 예술",
    subtitle: "Expressive Art",
    description:
      "고대 사회의 제례의식에서 기원되었습니다.\n다양한 예술활동을 통해 내담자의 내적 감정의 표현 매체로써\n무의식의 방어기제를 승화하도록 돕습니다.\n예술활동을 하는 과정에서 자기를 표현하고 인식하게 됨으로써\n성장과 가능성을 열어줍니다. 대체요법으로 활용되고 있습니다.",
    features: ["음악치료", "미술치료", "무용동작치료", "연극치료", "문학치료", "통합예술치료 등"],
    imageSrc: images.healsoma.expressiveArt,
    imageAlt: "표현 예술 프로그램",
    accentColor: "brown" as const, // Dark brown box for Expressive Art
  },
  {
    id: "group",
    title: "집단 상담",
    subtitle: "Group Counseling",
    description:
      "관계를 통한 치유로써 정서적 상처로 부터 자유로워지는 것이 목표입니다.\n고통의 감정은 두려움에서 나옵니다. 안전한 공간에서 귀기울이고,\n두려움의 고통들을 표출하도록 북돋아 줍니다.\n지지적 관계 내에서의 discharge는 개인과 공동체의 유용성에 기여합니다.",
    features: ["그룹 역동", "대인관계 성장", "공감 능력", "상호 지지"],
    imageSrc: images.healsoma.groupCounseling,
    imageAlt: "집단 상담 프로그램",
    accentColor: "beige" as const, // Beige box for Group Counseling
  },
  {
    id: "creative",
    title: "연극놀이",
    subtitle: "Creative Drama",
    description:
      "직원 교육이나 집체 교육 프로그램으로 활용되면 좋습니다.\n쉽고, 재미있고 안전한 공간에서 과정을 통해 드라마가 만들어지며,\n집단 지성이 발휘되어 문제의 대한 창의적인 아이디어 도출이 용이합니다.\n극적 놀이를 통해 팀의 결속력을 높이고 성장의 자양분을 이끌어 냅니다.\n언어와 비언어적인 활동, 다양한 캐릭터 등이 가능하며 누구나 참여하여\n즐겁게 성찰합니다.",
    features: ["즉흥 연기", "역할 놀이", "창의적 표현", "상상력 개발"],
    imageSrc: images.healsoma.creativeDrama,
    imageAlt: "연극 놀이 프로그램",
    accentColor: "brown" as const, // Dark brown box for Creative Drama
  },
];

export default function HealsomaPage() {
  return (
    <main className="bg-[#fcf3eb]">
      <HealsomaHero />
      <IntroSection />
      
      <ProgramDivider />

      {/* Program Sections */}
      <div id="program">
        {programs.map((program, index) => (
          <ProgramSection
            key={program.id}
            {...program}
            reverse={index % 2 === 1}
          />
        ))}
      </div>


      <WebBrochureBanner />
    </main>
  );
}
