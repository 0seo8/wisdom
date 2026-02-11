"use client";

import {
  DailyArtHero,
  ProgramCard,
  GallerySection,
} from "@/components/daily-art";
import { WebBrochureBanner } from "@/components/layout";
import { images } from "@/constants/images";

const programs = [
  {
    id: "communication",
    englishTitle: "Muniman",
    title: "무늬만",
    description: `시대가 바뀌어도 우리에게 요구되는 능력은
더 유연하고 더 포용적으로 연결할 수 있는 능력이 아닐까요.
'따로 또 같이' 개별성은 존중하되 다양성을 인정할 수 있는 관계에서 자율성과 소속감을 모두 충족시킬 수 있습니다.

무늬만에서는 개인과 조직의 다양한 문제를 객관화하여 갈등 해결을 위한 아이디어를 연습해보는 소통의 장입니다.
균형과 조화로운 솔루션을 통해 상호성과 연결감을 경험하게 됩니다.`,
    collageImage: images.dailyArt.hero,
    present: {
      image: images.dailyArt.muniman.performance1,
      bullets: [
        "참여형으로 관객이 주인공이 되어 배우와 직접 만들어 보는 열린 무대",
        "일상에서부터 큰 이슈까지, 다양한 아이디어를 연습해봄으로써 얻는 Insight",
        "찾아가는 공연에서 비대면 공연까지, 고객의 Needs에 따른 맞춤형 기획 콘텐츠",
        "전문적인 Conductor와 훈련된 소통 배우의 Quality 높은 서비스",
        "다양한 문제를 입체적으로 가시화하여 무대의 Frame을 통해 안전하게 연습",
      ],
    },
    recommendItems: [
      { image: images.dailyArt.muniman.recommend1, caption: "재미있고 안전하게 건강한 관계를 맺고 싶은 개인 및 조직" },
      { image: images.dailyArt.muniman.recommend2, caption: "수평적인 소통으로 지속가능한 성장을 도모하는 개인 및 조직" },
      { image: images.dailyArt.muniman.recommend3, caption: "민주적인 문화를 조성하여 팀워크를 개발하고 싶은 공동체" },
      { image: images.dailyArt.muniman.recommend4, caption: "문제를 객관화하여 관찰자의 시각으로 인사이트를 원하는 조직" },
    ],
    reviews: [
      {
        text: `서로 이해하고 상대방의 입장에서 생각한다는게 쉽지 않다.
조금씩 상대방의 생각을 읽어주고 그 입장에서 생각한다면 싸울 일이 없을 텐데…
우리는 알지만 같은 실수를 한다.
좋은 공연 잘 봤습니다. 많은 생각을 하게 만들어주셔서 감사합니다.`,
      },
      {
        text: `내 삶을 돌아보는 시간이 되었다. 항상 내 입장만 생각했었는데,
상대방의 관점에서 한번 생각할 수 있는 시간을 가지도록 노력해봐야겠다.
어린시절의 성장과정이 아이의 삶에 주는 영향을 깊이 새겨야 할것 같습니다.`,
      },
    ],
    reviewBgImage: images.dailyArt.muniman.performance8,
  },
  {
    id: "sympathy",
    englishTitle: "Nukduri",
    title: "넛두리",
    description: `지금 편하게 속을 털어놓을 상대가 있으신가요?
이발사가 대나무 숲에서 "임금님 귀는 당나귀 귀" 라고 외쳤을 때 얼마나 후련했을까요.

대나무 숲에서 느낄 수 있는 속 시원한 자리가 바로 공감극장 '넛두리'입니다.
이야기는 이발사에게만 있는 게 아닙니다.
우리는 이야기를 가지고 살아가지만, 다만 안전한 공간이 없을 뿐이지요.

여러분의 공동체와 조직에 오직 여러분만을 위한 대나무 숲을 만들어 드립니다.`,
    collageImage: images.dailyArt.performanceGeneric,
    present: {
      image: "/images/daily-art/nukduri-present.jpg",
      bullets: [
        "개인과 사회의 문제를 안전하게 해결하고 성장할 수 있는 장",
        "환대와 수용을 통한 자기 신뢰, 감사와 사랑을 통한 회복탄력성",
        "화자만을 위한 배우와 뮤지션의 콜라보로 전해지는 특별한 감동",
        "즉흥공연으로 만들어지는 사람을 살리고, 관계를 살리는 공감의 힘",
        "신비하고 경이로운 온/오프라인 양방향 소통·공감 공연 Know-How",
        "남녀노소 구분 없이 참여하여 모두가 공감으로 하나 되는 열린 무대",
        "개별성과 다양성을 있는 그대로 허용하고 지지하는 안전한 공간",
      ],
    },
    recommendItems: [
      { image: images.dailyArt.nukduri.recommend1, caption: "개인의 성장이 사회의 성장과 연결되어 있음을 아는 공동체" },
      { image: images.dailyArt.nukduri.recommend2, caption: "구성원들의 모멘텀을 위해 차별화된 Refresh가 필요한 조직" },
      { image: images.dailyArt.nukduri.recommend3, caption: "팀원들의 관계 회복을 통해 창의적이고 Active 한 문화를 원하는 조직" },
      { image: images.dailyArt.nukduri.recommend4, caption: "내부의 문제를 보다 근원적으로 접근하고 싶은 개인 및 조직" },
    ],
    reviews: [
      {
        text: `내 마음을 표현해 준다는게 기분 좋은 일이네요.
3자의 입장에서 바라 볼 수 있어서 좋았어요.
이야기를 듣고 표현한다는게 쉽지가 않았을텐데 다양한 표정으로 표현을 잘 하신거 같아요.
노래도 너무 듣기 좋았네요. 귀가 편안하게 쉬고 가는 기분이었어요. 수고하셨습니다.
이런 좋은 연극이 멈추지 않고 계속해서 이어져서
더 많은 사람들이 관계회복의 기회가 되었으면 좋겠습니다.`,
      },
      {
        text: `연극이라는거 자체가 생소했었는데 신선한 방식의 공연이어서 참 좋았습니다.
많은 사람들 앞에서 제 얘길 한다는거 상상도 해본적 없었는데
누군가에게는 내 얘길 들어준다는 것만으로도 큰 힘이 될거 같습니다.
연극 너무 따뜻했습니다. 오랫동안 제 기억속에 남을거 같아요.
앞으로도 따뜻한 연극 많이 만들어주세요.
감사합니다. 그리고 목소리 너무 좋으세요…넛두리 화이팅!!`,
      },
    ],
    reviewBgImage: images.dailyArt.muniman.performance8,
  },
  {
    id: "reduce",
    englishTitle: "Navichoom",
    title: "내비춤",
    description: `나비의 몸짓 '내비춤'은 자유로운 움직임으로 해방감을 느끼는 몸을 만나게 됩니다.
무의식에 자리 잡은 내면 아이의 고통을 춤을 통해 해소합니다.
왜 고통스러울까요. 왜 힘이 드는 걸까요.
원인을 알면 자유로울 수 있습니다.
몸이 보내는 신호를 알아차리기 위해서는 감각을 깨우는 게 중요합니다.
내면과 소통하고 세상과 공감하는 움직임, 내비춤은 춤명상입니다.

그동안 돌보지 못했던 몸에게 말합니다.
"몸아, 미안해!", "몸아, 고마워!"`,
    collageImage: images.dailyArt.navichoom.hero,
    present: {
      image: images.dailyArt.navichoom.performance,
      bullets: [
        "몸이 원하는 움직임을 통해 스트레스를 흘려보내는 해소의 장",
        "커뮤니티 댄스와 접촉 즉흥을 통한 정서적 지지와 연대감",
        "Somatics를 통해 부드러움을 확장하여 누구나 쉽게 춤출 수 있는 메소드",
        "보여주기 위한 춤이 아닌 나의 내면을 정화하는 '나'를 위한 춤",
        "몸의 다양성을 존중하고 함께 조화를 이루는 진정한 관계를 위한 춤",
        "부드러운 움직임을 통한 신체 활성화와 뇌 가소성",
      ],
    },
    recommendItems: [
      { image: images.dailyArt.navichoom.recommend1, caption: "개인의 성장이 사회의 성장과 연결되어 있음을 아는 공동체" },
      { image: images.dailyArt.navichoom.recommend2, caption: "구성원들의 모멘텀을 위해 차별화된 Refresh가 필요한 조직" },
      { image: images.dailyArt.navichoom.recommend3, caption: "팀원들의 관계 회복을 통해 창의적이고 Active 한 문화를 원하는 조직" },
      { image: images.dailyArt.navichoom.recommend4, caption: "내부의 문제를 보다 근원적으로 접근하고 싶은 개인 및 조직" },
    ],
    reviews: [
      {
        text: `가끔 이유없이 몸이 아프고 쑤신데 나이 때문이라고 생각했어요.
알고보니 참고 사느라 몸이 딱딱하게 굳어서 알아달라고 아우성치는 거였어요.
머리부터 발끝까지 알아본다는 게 뭔지 알겠어요. 같이 어울려 춤을 추다 보면 어느새 눈물이 흘렀어요.
내가 남들 앞에서 절대로 울지 않는 사람인데 참 편했나 봐요.. 세상 편하게 살고 싶다는 생각이 듭니다.`,
      },
      {
        text: `운동을 하면 몸이 건강해진다고 하잖아요. 내비춤을 추면 몸이 건강해져요.
따뜻하게 쉴 수 있게 해주셔서 감사합니다.
어색했지만 몸을 움직이고 따라다 보면 좋을 추고 있는 거예요.
태어나서 처음으로 남들 앞에서 자유롭게 춤을 췄어요.
나비처럼요.. 무대가 두렵긴 했는데 자신감이 생깁니다.`,
      },
    ],
    reviewBgImage: images.dailyArt.nukduri.performance2Full,
  },
];

export default function DailyArtPage() {
  return (
    <main className="bg-white">
      <DailyArtHero />
      <WebBrochureBanner />

      {/* Program Sections */}
      {programs.map((program) => (
        <ProgramCard key={program.id} {...program} />
      ))}

      <GallerySection />
      <WebBrochureBanner />
    </main>
  );
}
