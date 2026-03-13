type ProgramEntry = {
  id: string;
  title: string;
  desktopTitle?: string;
  image: string;
  desktopTextTop: string;
  desktopTextLines: readonly string[];
  desktopFootLines?: readonly string[];
  mobileTextLines: readonly string[];
  tabletTextLines?: readonly string[];
  desktopReverse: boolean;
  mobileReverse: boolean;
  tabletReverse: boolean;
};

const PROGRAMS: readonly ProgramEntry[] = [
  {
    id: "bodyfulness",
    title: "Bodyfulness(소매틱스)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%EB%AA%B8%EC%89%BC.png",
    desktopTextTop: "120px",
    desktopTextLines: [
      "홀리즘 관점의 건강관으로 몸과 마음의 통합적 접근법입니다.",
      "소매틱스 창시자Tomas hanna는 스트레스와 신경생리학적 기전을",
      "연구하여 노화의 신비(Myth of Aging)라고 하는 프로토콜을 만들었습니다.",
      "Soma(살아있는 몸)의 주관적 경험을 중시하며 만성통증, 스트레스 해소,",
      "잘못된 자세 등을 개선할 수 있습니다.",
    ],
    mobileTextLines: [
      "홀리즘 관점의 건강관으로 몸과 마음의 통합적 접근법입니다.",
      "소매틱스 창시자Tomas hanna는 스트레스와 신경생리학적 기전을 연구하여 노화의 신비(Myth of Aging)라고 하는 프로토콜을 만들었습니다.",
      "Soma(살아있는 몸)의 주관적 경험을 중시하며 만성통증, 스트레스 해소, 잘못된 자세 등을 개선할 수 있습니다.",
    ],
    desktopReverse: false,
    mobileReverse: false,
    tabletReverse: false,
  },
  {
    id: "mindfulness",
    title: "Mindfulness(명상)",
    desktopTitle: "Mindfulness (명상)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%EC%86%8C%EB%A6%AC%EB%AA%85%EC%83%81-1.png",
    desktopTextTop: "100px",
    desktopTextLines: [
      "사마타(집중명상)와 위빠사나(통찰명상)로 나눌 수 있지만,",
      "행법에 따라 다양하게 분류하기도 합니다.",
      "온화한 주의력을 통해 있는 그대로의 현존을",
      "알아차리는 것이 핵심입니다.",
      "일상의 모든 것은 명상의 방편이 될 수 있습니다.",
    ],
    desktopFootLines: [
      "자애명상 / 미소명상 / 호흡명상 / 차명상 / 소리명상 / 걷기명상 등",
    ],
    mobileTextLines: [
      "사마타(집중명상)와 위빠사나(통찰명상)로 나눌 수 있지만, 행법에 따라 다양하게 분류하기도 합니다.",
      "온화한 주의력을 통해 있는 그대로의 현존을 알아차리는 것이 핵심입니다.",
      "일상의 모든 것은 명상의 방편이 될 수 있습니다.",
      "자애명상 / 미소명상 / 호흡명상 / 차명상 / 소리명상 / 걷기명상 등",
    ],
    desktopReverse: true,
    mobileReverse: false,
    tabletReverse: true,
  },
  {
    id: "therapy",
    title: "Therapy(치유)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%ED%9E%90%EC%86%8C%EB%A7%88-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EB%AF%B8%EC%A7%80_%ED%85%8C%EB%9D%BC%ED%94%BC1.png",
    desktopTextTop: "100px",
    desktopTextLines: [
      "봉사를 뜻하는 'Therapeia'에서 유래되었으며",
      "문제 해결을 스스로 할 수 있도록 도움을 주는",
      "치유로써 다양한 방법론이 있습니다.",
      "인간의 내재 된 치유력을 믿고 자연의 상태로",
      "돌아가서 회복할 것을 돕습니다.",
    ],
    desktopFootLines: [
      "아로마테라피 / 춤테라피 / 사운드 테라피 / 컬러테라피 / 스파테라피 등",
    ],
    mobileTextLines: [
      "봉사를 뜻하는 'Therapeia'에서 유래되었으며 문제 해결을 스스로 할 수 있도록 도움을 주는 치유로써 다양한 방법론이 있습니다.",
      "인간의 내재 된 치유력을 믿고 자연의 상태로 돌아가서 회복할 것을 돕습니다.",
      "아로마테라피 / 춤테라피 / 사운드 테라피 / 컬러테라피 / 스파테라피 등",
    ],
    desktopReverse: false,
    mobileReverse: false,
    tabletReverse: false,
  },
  {
    id: "expressive",
    title: "Expressive Art(표현 예술)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%ED%9E%90%EC%86%8C%EB%A7%88-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EB%AF%B8%EC%A7%80_%EC%98%88%EC%88%A0.png",
    desktopTextTop: "100px",
    desktopTextLines: [
      "고대 사회의 제례의식에서 기원되었습니다.",
      "다양한 예술활동을 통해 내담자의 내적 감정의 표현 매체로써",
      "무의식의 방어기제를 승화하도록 돕습니다.",
      "예술활동을 하는 과정에서 자기를 표현하고 인식하게 됨으로써",
      "성장과 가능성을 열어줍니다. 대체요법으로 활용되고 있습니다.",
    ],
    desktopFootLines: [
      "음악치료 / 미술치료 / 무용동작치료 / 연극치료 / 문학치료 / 통합예술치료 등",
    ],
    mobileTextLines: [
      "고대 사회의 제례의식에서 기원되었습니다.",
      "다양한 예술활동을 통해 내담자의 내적 감정의 표현 매체로써 무의식의 방어기제를 승화하도록 돕습니다.",
      "예술활동을 하는 과정에서 자기를 표현하고 인식하게 됨으로써 성장과 가능성을 열어줍니다. 대체요법으로 활용되고 있습니다.",
      "음악치료 / 미술치료 / 무용동작치료 / 연극치료 / 문학치료 / 통합예술치료 등",
    ],
    tabletTextLines: [
      "고대 사회의 제례의식에서 기원되었습니다.",
      "다양한 예술활동을 통해 내담자의 내적 감정의 표현 매체로써무의식의 방어기제를 승화하도록 돕습니다.",
      "예술활동을 하는 과정에서 자기를 표현하고 인식하게 됨으로써성장과 가능성을 열어줍니다. 대체요법으로 활용되고 있습니다.",
      "음악치료 / 미술치료 / 무용동작치료 / 연극치료 / 문학치료 / 통합예술치료 등",
    ],
    desktopReverse: true,
    mobileReverse: false,
    tabletReverse: true,
  },
  {
    id: "group",
    title: "Group Counseling(집단 상담)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%EC%8B%AC%EB%A6%AC%EC%83%81%EB%8B%B4.png",
    desktopTextTop: "130px",
    desktopTextLines: [
      "관계를 통한 치유로써 정서적 상처로 부터 자유로워지는 것이 목표입니다.",
      "고통의 감정은 두려움에서 나옵니다. 안전한 공간에서 귀기울이고,",
      "두려움의 고통들을 표출하도록 북돋아 줍니다.",
      "지지적 관계 내에서의 discharge는 개인과 공동체의 유용성에 기여합니다.",
    ],
    mobileTextLines: [
      "관계를 통한 치유로써 정서적 상처로 부터 자유로워지는 것이 목표입니다.",
      "고통의 감정은 두려움에서 나옵니다. 안전한 공간에서 귀기울이고, 두려움의 고통들을 표출하도록 북돋아 줍니다.",
      "지지적 관계 내에서의 discharge는 개인과 공동체의 유용성에 기여합니다.",
    ],
    tabletTextLines: [
      "관계를 통한 치유로써 정서적 상처로 부터 자유로워지는 것이 목표입니다.",
      "고통의 감정은 두려움에서 나옵니다. 안전한 공간에서 귀기울이고, 두려움의 고통들을 표출하도록 북돋아 줍니다.",
      "지지적 관계 내에서의 discharge는 개인과 공동체의 유용성에 기여합니다.",
    ],
    desktopReverse: false,
    mobileReverse: false,
    tabletReverse: false,
  },
  {
    id: "creative",
    title: "Creative Drama(연극놀이)",
    image:
      "https://artswisdom.com/wp-content/uploads/2025/04/%ED%9E%90%EC%86%8C%EB%A7%88-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8-%EC%9D%B4%EB%AF%B8%EC%A7%80_%EC%97%B0%EA%B7%B9%EB%86%80%EC%9D%B4.png",
    desktopTextTop: "110px",
    desktopTextLines: [
      "직원 교육이나 집체 교육 프로그램으로 활용되면 좋습니다.",
      "쉽고, 재미있고 안전한 공간에서 과정을 통해 드라마가 만들어지며,",
      "집단 지성이 발휘되어 문제의 대한 창의적인 아이디어 도출이 용이합니다.",
      "극적 놀이를 통해 팀의 결속력을 높이고 성장의 자양분을 이끌어 냅니다.",
      "언어와 비언어적인 활동, 다양한 캐릭터 등이 가능하며 누구나 참여하여",
      "즐겁게 성찰합니다.",
    ],
    mobileTextLines: [
      "직원 교육이나 집체 교육 프로그램으로 활용되면 좋습니다.",
      "쉽고, 재미있고 안전한 공간에서 과정을 통해 드라마가 만들어지며, 집단 지성이 발휘되어 문제의 대한 창의적인 아이디어 도출이 용이합니다.",
      "극적 놀이를 통해 팀의 결속력을 높이고 성장의 자양분을 이끌어 냅니다. 언어와 비언어적인 활동, 다양한 캐릭터 등이 가능하며 누구나 참여하여 즐겁게 성찰합니다.",
    ],
    tabletTextLines: [
      "직원교육이나 집체 교육 프로그램으로 활용되면 좋습니다.",
      "쉽고, 재미있고 안전한 공간에서 과정을 통해 드라마가 만들어지며, 집단 지성이 발휘되어 문제의 대한 창의적인 아이디어 도출이 용이합니다.",
      "극적 놀이를 통해 팀의 결속력을 높이고 성장과 성과를 이끌어 냅니다. 언어와 비언어적인 활동, 다양한 캐릭터 등이 가능하여 누구나 참여하여 즐겁게 인사이트를 얻습니다.",
    ],
    desktopReverse: true,
    mobileReverse: false,
    tabletReverse: true,
  },
];

export function ProgramsLayout() {
  return (
    <div className="bg-[#FCF3EB]">
      {PROGRAMS.map((program) => (
        <section
          key={program.id}
          id={program.id}
          className="scroll-mt-[76px] bg-[#FCF3EB]"
        >
          <div className="mx-auto max-w-[1200px] px-0 py-0 lg:px-0">
            <div className="md:hidden">
              <div
                className={`w-full ${
                  program.mobileReverse ? "order-2" : "order-1"
                }`}
              >
                <img
                  src={program.image}
                  alt=""
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div
                className={`w-full px-5 py-5 text-left ${
                  program.mobileReverse ? "order-1" : "order-2"
                }`}
              >
                <CompactTextBlock
                  title={program.title}
                  lines={program.mobileTextLines}
                />
              </div>
            </div>

            <div className="hidden items-center md:flex lg:hidden">
              <div
                className={`w-1/2 shrink-0 ${
                  program.tabletReverse ? "order-2" : "order-1"
                }`}
              >
                <img
                  src={program.image}
                  alt=""
                  className="block h-auto w-full"
                  loading="lazy"
                />
              </div>
              <div
                className={`w-1/2 shrink-0 px-5 py-4 text-left ${
                  program.tabletReverse ? "order-1" : "order-2"
                }`}
              >
                <CompactTextBlock
                  title={program.title}
                  lines={program.tabletTextLines ?? program.mobileTextLines}
                />
              </div>
            </div>

            <div className="hidden lg:grid lg:grid-cols-[10%_40%_40%_10%] lg:items-start">
              <div />
              <div className={program.desktopReverse ? "order-2" : "order-1"}>
                {program.desktopReverse ? (
                  <div style={{ paddingTop: program.desktopTextTop }}>
                    <DesktopTextBlock
                      title={program.desktopTitle ?? program.title}
                      lines={program.desktopTextLines}
                      footLines={program.desktopFootLines}
                    />
                  </div>
                ) : (
                  <img
                    src={program.image}
                    alt=""
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                )}
              </div>
              <div className={program.desktopReverse ? "order-1" : "order-2"}>
                {program.desktopReverse ? (
                  <img
                    src={program.image}
                    alt=""
                    className="block h-auto w-full"
                    loading="lazy"
                  />
                ) : (
                  <div style={{ paddingTop: program.desktopTextTop }}>
                    <DesktopTextBlock
                      title={program.desktopTitle ?? program.title}
                      lines={program.desktopTextLines}
                      footLines={program.desktopFootLines}
                    />
                  </div>
                )}
              </div>
              <div />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

function CompactTextBlock({
  title,
  lines,
}: {
  title: string;
  lines: readonly string[];
}) {
  return (
    <div>
      <h2 className="text-center font-['Times_New_Roman',Times,serif] text-[29px] font-semibold leading-[1.08] tracking-[-1px] text-[#541404]">
        {title}
      </h2>
      <div className="mt-3 font-['Noto_Sans_KR',sans-serif] text-[15px] font-normal leading-[1.62] tracking-[-0.4px] text-[#333333]">
        <p>
          {lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function DesktopTextBlock({
  title,
  lines,
  footLines,
}: {
  title: string;
  lines: readonly string[];
  footLines?: readonly string[];
}) {
  return (
    <div className="text-center">
      <h2 className="font-['Times_New_Roman',Times,serif] text-[45px] font-semibold tracking-[-1px] text-[#541404]">
        {title}
      </h2>
      <div className="mt-3 font-['Noto_Sans_KR',sans-serif] text-[17px] font-normal leading-[1.7] tracking-[-0.4px] text-[#333333]">
        <p>
          {lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
        {footLines?.length ? (
          <p className="mt-3">
            {footLines.map((line, index) => (
              <span key={line}>
                {line}
                {index < footLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </p>
        ) : null}
      </div>
    </div>
  );
}
