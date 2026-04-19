const bucketUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/images";

const originalBusinessAssets = {
  introBackground: `${bucketUrl}/business/legacy_business_1.png`,
  corporatePrimary: `${bucketUrl}/business/123456-1150x1536.png`,
  corporateSecondary: `${bucketUrl}/business/20230513_193104995_23-1024x768.jpg`,
  corporateMobile: `${bucketUrl}/business/education-main.png`,
  corporatePresentDesktop: `${bucketUrl}/business/20230513_193104995_19-scaled.jpg`,
  corporatePresentMobile: `${bucketUrl}/business/20230513_193104995_19-768x576.jpg`,
  corporateReviewDesktop: `${bucketUrl}/business/IMG_7974-scaled.jpg`,
  corporateReviewMobile: `${bucketUrl}/business/legacy_business_11.jpg`,
  eventPrimary: `${bucketUrl}/business/Untitled-2-1.jpg`,
  eventSecondary: `${bucketUrl}/business/legacy_business_9.jpg`,
  eventPresentDesktop: `${bucketUrl}/business/legacy_business_7.jpg`,
  eventPresentMobile: `${bucketUrl}/business/legacy_business_12.png`,
  eventReviewDesktop: `${bucketUrl}/business/20210615_113153-2.png`,
  eventReviewTablet: `${bucketUrl}/business/20210615_112135.png`,
  eventReviewMobile: `${bucketUrl}/business/legacy_business_13.png`,
} as const;

const corporateRecommendations = [
  {
    image: `${bucketUrl}/business/recommend-partnership.jpg`,
    text: "새롭고 참신한 방법으로 행사의 퀄리티를\n높이고 싶은 조직",
  },
  {
    image: `${bucketUrl}/business/recommend-onestop.jpg`,
    text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직",
  },
  {
    image: `${bucketUrl}/business/recommend-professional.jpg`,
    text: "One-Stop으로 편리하게 서비스를 받고\n싶은 조직 및 공동체",
  },
  {
    image: `${bucketUrl}/business/recommend-quality.jpg`,
    text: "일회성 행사에 그치지 않고 섬김과 존중을\n받고 싶은 조직 및 공동체",
  },
] as const;

const eventRecommendations = [
  {
    image: `${bucketUrl}/business/event-recommend-1.jpg`,
    text: "새롭고 참신한 방법으로 행사의 퀄리티를\n높이고 싶은 조직",
  },
  {
    image: `${bucketUrl}/business/event-recommend-2.jpg`,
    text: "행사의 목적에 부합하는 전문적인 결과를 내고 싶은 조직",
  },
  {
    image: `${bucketUrl}/business/event-recommend-3.jpg`,
    text: "One-Stop으로 편리하게 서비스를 받고\n싶은 조직 및 공동체",
  },
  {
    image: `${bucketUrl}/business/event-recommend-4.jpg`,
    text: "일회성 행사에 그치지 않고 섬김과 존중을\n받고 싶은 조직 및 공동체",
  },
] as const;

const galleryVideos = [
  {
    id: "u7ty2BU63TA",
    description:
      "멈춰진 공간, 아름다운 춤의 숨결로 생기를 불러일으키는 'Art on the Move Seoul' 공연.\n춤과 음악으로 영등포시장역이 새롭게 태어납니다.",
  },
  {
    id: "gtn_9wECD-s",
    description:
      "'Art on the Move Seoul'문화예술철도 12월 공연!\n'크리스마스 선물'을 주제로 도심 속 삭막한 지하철 공간에 예술의 숨결을 불어넣었습니다.",
  },
  {
    id: "hVSD7p8_UTA",
    description:
      "서원대학교 산업대학원 초청 특별강의 - 앙트러프러너십(entrepreneurship).\n평생교육학과(소셜벤처전공)석사과정 대상 사회적기업과 기업가정신에 대한 강의를 진행했습니다.",
  },
  {
    id: "QdldO-rgKQg",
    description:
      "업무 중간 중간 할 수 있는 '찾아가는 소매틱스' - 장시간 앉아 있는 직원들에게 진행된 소매틱스에 대한 생생 리얼 인터뷰를 들어 보세요",
  },
] as const;

function BusinessText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-[#5b5b5b] ${className}`}
      style={{
        fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif",
        letterSpacing: "-0.5px",
      }}
    >
      {children}
    </div>
  );
}

function RecommendationSection({
  items,
}: {
  items: readonly { image: string; text: string }[];
}) {
  return (
    <>
      <section className="bg-[#fcf3ea] px-[10px] pb-[10px] pt-0 md:px-[30px] md:pb-[16px]">
        <div className="mx-auto max-w-[1300px]">
          <h2
            className="py-0 text-left text-[20px] font-semibold leading-[2.1] text-[#2b2b2b] md:text-[35px]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            이런 대상에게 추천합니다
          </h2>
        </div>
      </section>
      <section className="bg-[#fcf3ea] px-[10px] pb-0 pt-0 md:px-0">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-y-[12px] md:grid-cols-4 md:gap-x-[20px] md:gap-y-0">
            {items.map((item, index) => (
              <div
                key={`${item.image}-${index}`}
                className="px-0 py-0 md:px-0"
              >
                <div className="mx-[10px] my-[10px] md:m-0">
                  <img className="block h-auto w-full" src={item.image} alt="" />
                  <BusinessText className="pb-[22px] pt-[10px] text-center text-[15px] leading-[1.5] whitespace-pre-line md:pb-[28px]">
                    {item.text}
                  </BusinessText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewSection({
  mobileBackground,
  tabletBackground,
  desktopBackground,
  title,
  firstReview,
  secondReview,
  variant = "default",
}: {
  mobileBackground: string;
  tabletBackground: string;
  desktopBackground: string;
  title: string;
  firstReview: string;
  secondReview: string;
  variant?: "default" | "event";
}) {
  const isEventVariant = variant === "event";

  return (
    <section className="relative overflow-hidden bg-[#fcf3ea]">
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url('${mobileBackground}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden md:block lg:hidden"
        style={{
          backgroundImage: `url('${tabletBackground}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          backgroundImage: `url('${desktopBackground}')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#131313]/[0.64]" aria-hidden="true" />

      <div
        className={`relative mx-auto flex min-h-[620px] max-w-[1000px] items-center justify-center px-5 py-[28px] md:px-8 ${
          isEventVariant ? "md:min-h-[760px] md:py-[52px]" : "md:min-h-[623px] md:py-[36px]"
        }`}
      >
        <div className="w-full text-center text-[#efede1]">
          <p
            className="hero-font-dancing-script text-[35px] font-normal italic leading-[0.1] text-[#bfbdb5] md:text-[55px] lg:text-[91px]"
            style={{ transform: "rotate(-8deg)" }}
          >
            Review of
          </p>
          <h2 className="hero-font-times mt-[30px] text-center text-[30px] font-semibold leading-[0.1] md:mt-[92px] md:text-[70px] md:leading-[1] lg:text-[90px]">
            <span className="whitespace-nowrap md:hidden">{title}</span>
            <span className="hidden md:inline whitespace-pre-line">
              {title.replace(" ", "\n")}
            </span>
          </h2>

          <div
            className={`mx-auto mt-[41px] max-w-[760px] space-y-[30px] ${
              isEventVariant ? "md:mt-[44px] md:space-y-[52px]" : "md:mt-[36px] md:space-y-[34px]"
            }`}
          >
            <div className={`space-y-[16px] ${isEventVariant ? "md:space-y-[18px]" : "md:space-y-[14px]"}`}>
              <div className="text-center text-[35px] text-[#f4d03f]">
                {"★★★★★"}
              </div>
              <BusinessText className="text-center text-[15px] font-normal leading-[1.9] text-[#efede1] whitespace-pre-line">
                {firstReview}
              </BusinessText>
            </div>

            <div className={`space-y-[16px] ${isEventVariant ? "md:space-y-[18px]" : "md:space-y-[14px]"}`}>
              <div className="text-center text-[35px] text-[#f4d03f]">
                {"★★★★★"}
              </div>
              <BusinessText className="text-center text-[15px] font-normal leading-[1.9] text-[#efede1] whitespace-pre-line">
                {secondReview}
              </BusinessText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Divider() {
  return (
    <section className="bg-[#fcf3ea] px-0 pt-0">
      <div className="mx-auto max-w-[1300px] bg-[#fcf3ea]">
        <div className="py-10 md:py-[50px]">
          <div className="mx-auto h-[5px] w-[15%] bg-[#5b5b5b]" />
        </div>
      </div>
    </section>
  );
}

export function BusinessLanding() {
  return (
    <>
      <section
        className="bg-[#fcf3ea] px-0 pb-0 pt-0"
      >
        <div className="mx-auto max-w-[1300px] pt-[55px] text-center">
          <h2
            className="px-4 text-center text-[18px] font-semibold text-[#2b2b2b] md:text-[30px]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            지속가능한 성장을 위해 ESG를 실천하는 곳!
          </h2>
          <BusinessText className="mt-0 px-4 pb-0 text-center text-[14px] leading-[1.8] md:text-[20px] md:leading-[1.7]">
            <span className="hidden md:inline whitespace-pre-line">
              기관 및 기업의 지속적인 성장과 생존에 직결되는 핵심가치로,
              {"\n"}환경(Environmental), 사회(Social), 지배구조(Governance)의
              {"\n"}비재무적인 지표가 실질적인 평가에 도움이 될 수 있도록
              {"\n"}사회적 책임과 인권을 함께 만들어 갑니다.
            </span>
            <span className="md:hidden whitespace-pre-line">
              기관 및 기업의 지속적인 성장과 생존에
              {"\n"}직결되는 핵심가치로, 환경(Environmental),
              {"\n"}사회(Social), 지배구조(Governance)의
              {"\n"}비재무적인 지표가 실질적인 평가에
              {"\n"}도움이 될 수 있도록
              {"\n"}사회적 책임과 인권을 함께 만들어 갑니다.
            </span>
          </BusinessText>
        </div>
      </section>

      <div id="education" className="bg-[#fcf3ea]" />

      <section className="hidden bg-[#fcf3ea] px-[30px] py-[60px] md:block lg:px-10">
        <div className="mx-auto flex max-w-[1300px] gap-0">
          <div className="w-[27.189%]">
            <h2 className="hero-font-times translate-x-[15px] text-left text-[59px] font-semibold text-[#85544d]">
              Corporate Education
            </h2>
            <h3
              className="translate-x-[15px] text-[35px] font-semibold leading-[0.1] text-[#2b2b2b]"
              style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
            >
              기업교육
            </h3>
            <BusinessText className="translate-x-[35px] translate-y-[42px] text-[15px] leading-[1.9] whitespace-pre-line">
              “맞춤형 강의”
              {"\n"}기업의 지속성장가능을 위한
              {"\n"}소통, 협업, 리더십, 코칭 Skill 등 기업의
              {"\n"}역량강화를 위한 인사이트 제공 및 기업이
              {"\n"}요구하는 맞춤형 교육을 진행합니다.
              {"\n\n"}“Open Space Technology”
              {"\n"}조직 내 다양한 이슈를 선택하여
              {"\n"}모두가 자유로우며 평등하게 토론하고
              {"\n"}짧은 공연을 통해 해결방안 도출 및
              {"\n"}창의적인 아이디어와 함께
              {"\n"}유연한 조직을 만들 수 있습니다.
            </BusinessText>
          </div>

          <div className="z-[1] w-[34.931%]">
            <img
              className="block scale-[0.8] shadow-[-7px_20px_50px_0_rgba(0,0,0,0.48)]"
              src={originalBusinessAssets.corporatePrimary}
              alt=""
            />
          </div>

          <div className="z-0 w-[37.544%]">
            <img
              className="block translate-x-[-90px] translate-y-[55px] scale-[1.3]"
              src={originalBusinessAssets.corporateSecondary}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3ea] px-[10px] pt-[25px] md:hidden">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="hero-font-times text-left text-[30px] font-semibold text-[#541301]">
            Corporate Education
          </h2>
          <h3
            className="text-left text-[20px] font-semibold leading-[0.1] text-[#2b2b2b]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            기업교육
          </h3>
          <BusinessText className="mobile-copy-gutter mt-6 text-[15px] leading-[1.9] whitespace-pre-line">
            “맞춤형 강의”
            {"\n"}기업의 지속성장가능을 위한 소통, 협업, 리더십, 코칭 Skill 등 기업의 역량강화를 위한 인사이트 제공 및 기업이 요구하는 맞춤형 교육을 진행합니다.
            {"\n\n"}“Open Space Technology”
            {"\n"}조직 내 다양한 이슈를 선택하여 모두가 자유로우며 평등하게 토론하고 짧은 공연을 통해 해결방안 도출 및창의적인 아이디어와 함께 유연한 조직을 만들 수 있습니다.
          </BusinessText>
          <img className="mt-0 block h-auto w-full" src={originalBusinessAssets.corporateMobile} alt="" />
        </div>
      </section>

      <section className="hidden bg-[#fcf3ea] px-10 pb-20 pt-10 md:block">
        <div className="mx-auto flex max-w-[1300px] flex-row-reverse">
          <div className="w-[48.354%]">
            <h2
              className="text-[35px] font-semibold leading-[0.1] text-[#2b2b2b]"
              style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
            >
              기업교육 present
            </h2>
            <BusinessText className="mt-[53px] whitespace-pre-line text-[14px] leading-[2.5] lg:text-[15px] lg:leading-[2.8]">
              • 이제는 경영에도 compassion이 필요합니다.
              {"\n"}• 문화예술을 접목하여 module의 특별함을 선사합니다.
              {"\n"}• 결과보다는 과정 중심으로 아이디어의 창의성을 깨웁니다.
              {"\n"}• 문제해결 능력을 민주적인 토의 방식으로 이끕니다.
              {"\n"}• 솔루션을 연습해봄으로써 업무 현장에서 자원이 됩니다.
              {"\n"}• 업무 저해 스트레스 관리 및 번아웃 증후군을 예방합니다.
            </BusinessText>
          </div>
          <div className="w-[51.608%]">
            <img
              className="block w-[80%] shadow-[-15px_20px_40px_0_rgba(0,0,0,0.31)]"
              src={originalBusinessAssets.corporatePresentDesktop}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3ea] px-[10px] pb-[30px] pt-[30px] md:hidden">
        <div className="mx-auto max-w-[1300px]">
          <h2
            className="text-left text-[20px] font-semibold leading-[0.1] text-[#2b2b2b]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            기업교육 present...
          </h2>
          <BusinessText className="mobile-copy-gutter pt-[30px] whitespace-pre-line text-[15px] leading-[1.9]">
            • 이제는 경영에도 compassion이 필요합니다.
            {"\n"}• 문화예술을 접목하여 module의 특별함을 선사합니다.
            {"\n"}• 결과보다는 과정중심으로 아이디어의 창의성을 깨웁니다.
            {"\n"}• 문제해결능력을 민주적인 토의방식으로 이끕니다.
            {"\n"}• 솔루션을 연습해봄으로써 업무현장에서 자원이 됩니다.
            {"\n"}• 업무저해 스트레스 관리 및 번아웃 증후군을 예방합니다.
          </BusinessText>
          <img className="block h-auto w-full -translate-y-6" src={originalBusinessAssets.corporatePresentMobile} alt="" />
        </div>
      </section>

      <RecommendationSection items={corporateRecommendations} />

      <ReviewSection
        mobileBackground={originalBusinessAssets.corporateReviewMobile}
        tabletBackground={originalBusinessAssets.corporateReviewDesktop}
        desktopBackground={originalBusinessAssets.corporateReviewDesktop}
        title="Corporate Education"
        firstReview={
          "우리는 늘 급하게 변하는 사회에 적응하기 위해\n무던히 노력해왔습니다.\n지난시절에 기술, 지식과 정보의 학습과 실천으로\n외적인 성장을 가져왔다면 이젠 우리\n스스로 내적고찰 비중을 확대하는\n체험과 학습도 필요한 시대입니다."
        }
        secondReview={
          "살아가면서 나의 이야기에 귀기울여 주는 사람이\n없어 마음 아파한 적이 많습니다.\n하지만 난 다른 사람들에게 그렇게 했을까요?\n사회가 복잡다단해지면서 우리에게 공감 능력은\n매우 중요하면서 발휘하지 못하는\n아픈 손가락입니다.\n이 아픈 손가락을 치유하는 ‘지혜의밭’ 공연과\n워크숍 프로그램을 여러분께 추천합니다."
        }
      />

      <Divider />

      <div id="event" className="bg-[#fcf3ea]" />

      <section className="hidden bg-[#fcf3ea] px-10 pb-0 pt-[60px] md:block">
        <div className="mx-auto flex max-w-[1300px] gap-0">
          <div className="w-[27.189%]">
            <h2 className="hero-font-times translate-x-[15px] text-left text-[59px] font-semibold text-[#85544d]">
              Event Planning
            </h2>
            <h3
              className="translate-x-[15px] text-[35px] font-semibold leading-[0.1] text-[#2b2b2b]"
              style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
            >
              행사기획
            </h3>
            <BusinessText className="translate-x-[35px] translate-y-[42px] whitespace-pre-line text-[15px] leading-[1.9]">
              “참여형 공연”
              {"\n"}구성원들의 다양한 이야기를
              {"\n"}마법같은 즉흥공연으로 반영하고
              {"\n"}수용과 지지 경험으로 서로를
              {"\n"}이해하고 연대감을 형성함으로써
              {"\n"}조직문화 활성화를 이끌 수 있습니다.
              {"\n\n"}“몸 챙김, 마음 챙김”
              {"\n"}소매틱, 춤, 명료한 앎을 통해
              {"\n"}스트레스 해소 및 refresh를 경험하여
              {"\n"}번아웃을 사전에 예방하고 감정에
              {"\n"}휘둘리지 않는 마음의 주인으로
              {"\n"}조직 내 갈등을 지혜롭게 해결합니다.
            </BusinessText>
          </div>

          <div className="z-[1] w-[34.931%]">
            <img
              className="block scale-[0.8] shadow-[-7px_20px_50px_0_rgba(0,0,0,0.48)]"
              src={originalBusinessAssets.eventPrimary}
              alt=""
            />
          </div>

          <div className="z-0 w-[37.544%]">
            <img
              className="block translate-x-[-90px] translate-y-[55px] scale-[1.3]"
              src={originalBusinessAssets.eventSecondary}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3ea] px-[10px] pb-0 pt-10 md:hidden">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="hero-font-times text-left text-[30px] font-semibold text-[#541301]">
            Event Planning
          </h2>
          <h3
            className="text-left text-[20px] font-semibold leading-[0.1] text-[#2b2b2b]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            행사기획
          </h3>
          <BusinessText className="mobile-copy-gutter mt-6 whitespace-pre-line text-[15px] leading-[1.9]">
            “참여형 공연”
            {"\n"}구성원들의 다양한 이야기를 마법같은 즉흥공연으로 반영하고 수용과 지지 경험으로 서로를 이해하고 연대감을 형성함으로써 조직문화 활성화를 이끌 수 있습니다.
            {"\n\n"}“몸 챙김, 마음 챙김”
            {"\n"}소매틱, 춤, 명료한 앎을 통해 스트레스 해소 및 refresh를 경험하여 번아웃을 사전에 예방하고 감정에 휘둘리지 않는 마음의 주인으로 조직 내 갈등을 지혜롭게 해결합니다.
          </BusinessText>
        </div>
      </section>

      <section className="hidden bg-[#fcf3ea] px-10 pb-20 pt-10 md:block">
        <div className="mx-auto flex max-w-[1300px] flex-row-reverse">
          <div className="w-[48.354%]">
            <h2
              className="translate-y-12 text-[35px] font-semibold leading-[0.1] text-[#2b2b2b]"
              style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
            >
              행사기획 present
            </h2>
            <BusinessText className="translate-x-[25px] translate-y-[53px] whitespace-pre-line text-[14px] leading-[2.5] lg:text-[15px] lg:leading-[2.8]">
              • 기업의 요구와 환경을 고려한 최적화된 서비스
              {"\n"}• 다양한 장르의 콜라보를 통한 창의적인 행사
              {"\n"}• 흥미로운 이벤트 구성으로 참여 동기 극대화
              {"\n"}• 즐거움과 행복을 추구하는 인간의 기본 욕구 충족
              {"\n"}• 재미와 더불어 삶의 유연성을 통한 긍정적인 변화
            </BusinessText>
          </div>
          <div className="w-[51.608%]">
            <img
              className="block w-[80%] shadow-[-15px_20px_40px_0_rgba(0,0,0,0.31)]"
              src={originalBusinessAssets.eventPresentDesktop}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fcf3ea] px-[10px] pb-[35px] pt-[30px] md:hidden">
        <div className="mx-auto max-w-[1300px]">
          <h2
            className="text-left text-[20px] font-semibold leading-[0.1] text-[#2b2b2b]"
            style={{ fontFamily: "var(--font-noto-sans-kr), 'Noto Sans KR', sans-serif" }}
          >
            행사기획 present...
          </h2>
          <BusinessText className="mobile-copy-gutter pt-0 whitespace-pre-line text-[15px] leading-[1.9]">
            • 기업의 요구와 환경을 고려한 최적화된 서비스
            {"\n"}• 다양한 장르의 콜라보를 통한 창의적인 행사
            {"\n"}• 흥미로운 이벤트 구성으로 참여 동기 극대화
            {"\n"}• 즐거움과 행복을 추구하는 인간의 기본 욕구 충족
            {"\n"}• 재미와 더불어 삶의 유연성을 통한 긍정적인 변화
          </BusinessText>
          <img className="block h-auto w-full -translate-y-6" src={originalBusinessAssets.eventPresentDesktop} alt="" />
          <img className="block h-auto w-full" src={originalBusinessAssets.eventPresentMobile} alt="" />
        </div>
      </section>

      <RecommendationSection items={eventRecommendations} />

      <ReviewSection
        mobileBackground={originalBusinessAssets.eventReviewMobile}
        tabletBackground={originalBusinessAssets.eventReviewTablet}
        desktopBackground={originalBusinessAssets.eventReviewDesktop}
        title="Event Planning"
        variant="event"
        firstReview={
          "어린이, 청소년들을 위한 다양한 프로그램을\n20여 년간 운영해 온 경험으로 바라볼 때\n넋두리와 내비침은 연극 치유의\n순수한 지향성을 가집니다\n비용 측면으로 맞춤식이 된다면\n치유 공연으로 많은 사랑 기대됩니다"
        }
        secondReview={
          "우리는 늘 급하게 변하는 사회에 적응하기 위해\n무던히 노력해왔습니다.\n지난 시절에 기술, 지식과 정보의 학습과 실천으로\n외적인 성적을 가져왔다면\n이제 우리 스스로 내적 고찰 비중을 확대하는\n체험과 학습도 필요한 시대입니다."
        }
      />

      <Divider />

      <section className="bg-[#fcf3ea] px-0 py-0">
        <div className="mx-auto max-w-[1300px] py-0 text-center">
          <h2 className="hero-font-times px-8 py-8 text-[50px] font-semibold leading-[0.3] text-[#85544d] md:text-[70px]">
            Gallery
          </h2>
        </div>
      </section>

      <section className="bg-[#fcf3ea] px-0 pb-0 pt-0">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-10 px-4 pb-10 md:grid-cols-2 md:gap-8 md:px-0 md:pb-0">
            {galleryVideos.map((video) => (
              <div key={video.id}>
                <div className="aspect-video w-full">
                  <iframe
                    className="h-full w-full border-0"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.id}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <BusinessText className="pb-[12px] pt-[10px] text-[15px] leading-[1.5] whitespace-pre-line md:pb-[16px]">
                  {video.description}
                </BusinessText>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
