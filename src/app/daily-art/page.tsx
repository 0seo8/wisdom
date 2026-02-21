

import {
  DailyArtHero,
  ProgramCard,
  GallerySection,
} from "@/components/daily-art";
import { images } from "@/constants/images";
import { getPrograms } from "@/lib/queries/programs";

const extendedDataMap: Record<string, {
  englishTitle?: string;
  collageImage?: string;
  presentImage?: string;
  recommendItems?: { image: string; caption: string }[];
  reviews?: { text: string }[];
  reviewBgImage?: string;
}> = {
  "muniman": {
    englishTitle: "Muniman",
    collageImage: images.dailyArt.hero,
    presentImage: images.dailyArt.muniman.performance1,
    recommendItems: [
      { image: images.dailyArt.muniman.recommend1, caption: "재미있고 안전하게 건강한 관계를 맺고 싶은 개인 및 조직" },
      { image: images.dailyArt.muniman.recommend2, caption: "수평적인 소통으로 지속가능한 성장을 도모하는 개인 및 조직" },
      { image: images.dailyArt.muniman.recommend3, caption: "민주적인 문화를 조성하여 팀워크를 개발하고 싶은 공동체" },
      { image: images.dailyArt.muniman.recommend4, caption: "문제를 객관화하여 관찰자의 시각으로 인사이트를 원하는 조직" },
    ],
    reviews: [
      {
        text: `서로 이해하고 상대방의 입장에서 생각한다는게 쉽지 않다.\n조금씩 상대방의 생각을 읽어주고 그 입장에서 생각한다면 싸울 일이 없을 텐데…\n우리는 알지만 같은 실수를 한다.\n좋은 공연 잘 봤습니다. 많은 생각을 하게 만들어주셔서 감사합니다.`,
      },
      {
        text: `내 삶을 돌아보는 시간이 되었다. 항상 내 입장만 생각했었는데,\n상대방의 관점에서 한번 생각할 수 있는 시간을 가지도록 노력해봐야겠다.\n어린시절의 성장과정이 아이의 삶에 주는 영향을 깊이 새겨야 할것 같습니다.`,
      },
    ],
    reviewBgImage: images.dailyArt.muniman.performance8,
  },
  "nukduri": {
    englishTitle: "Nukduri",
    collageImage: images.dailyArt.performanceGeneric,
    presentImage: "https://refxscvyacxtohfjxysh.supabase.co/storage/v1/object/public/images/daily-art/nukduri-present.jpg",
    recommendItems: [
      { image: images.dailyArt.nukduri.recommend1, caption: "개인의 성장이 사회의 성장과 연결되어 있음을 아는 공동체" },
      { image: images.dailyArt.nukduri.recommend2, caption: "구성원들의 모멘텀을 위해 차별화된 Refresh가 필요한 조직" },
      { image: images.dailyArt.nukduri.recommend3, caption: "팀원들의 관계 회복을 통해 창의적이고 Active 한 문화를 원하는 조직" },
      { image: images.dailyArt.nukduri.recommend4, caption: "내부의 문제를 보다 근원적으로 접근하고 싶은 개인 및 조직" },
    ],
    reviews: [
      {
        text: `내 마음을 표현해 준다는게 기분 좋은 일이네요.\n3자의 입장에서 바라 볼 수 있어서 좋았어요.\n이야기를 듣고 표현한다는게 쉽지가 않았을텐데 다양한 표정으로 표현을 잘 하신거 같아요.\n노래도 너무 듣기 좋았네요. 귀가 편안하게 쉬고 가는 기분이었어요. 수고하셨습니다.\n이런 좋은 연극이 멈추지 않고 계속해서 이어져서\n더 많은 사람들이 관계회복의 기회가 되었으면 좋겠습니다.`,
      },
      {
        text: `연극이라는거 자체가 생소했었는데 신선한 방식의 공연이어서 참 좋았습니다.\n많은 사람들 앞에서 제 얘길 한다는거 상상도 해본적 없었는데\n누군가에게는 내 얘길 들어준다는 것만으로도 큰 힘이 될거 같습니다.\n연극 너무 따뜻했습니다. 오랫동안 제 기억속에 남을거 같아요.\n앞으로도 따뜻한 연극 많이 만들어주세요.\n감사합니다. 그리고 목소리 너무 좋으세요…넛두리 화이팅!!`,
      },
    ],
    reviewBgImage: images.dailyArt.muniman.performance8,
  },
  "navichoom": {
    englishTitle: "Navichoom",
    collageImage: images.dailyArt.navichoom.hero,
    presentImage: images.dailyArt.navichoom.performance,
    recommendItems: [
      { image: images.dailyArt.navichoom.recommend1, caption: "개인의 성장이 사회의 성장과 연결되어 있음을 아는 공동체" },
      { image: images.dailyArt.navichoom.recommend2, caption: "구성원들의 모멘텀을 위해 차별화된 Refresh가 필요한 조직" },
      { image: images.dailyArt.navichoom.recommend3, caption: "팀원들의 관계 회복을 통해 창의적이고 Active 한 문화를 원하는 조직" },
      { image: images.dailyArt.navichoom.recommend4, caption: "내부의 문제를 보다 근원적으로 접근하고 싶은 개인 및 조직" },
    ],
    reviews: [
      {
        text: `가끔 이유없이 몸이 아프고 쑤신데 나이 때문이라고 생각했어요.\n알고보니 참고 사느라 몸이 딱딱하게 굳어서 알아달라고 아우성치는 거였어요.\n머리부터 발끝까지 알아본다는 게 뭔지 알겠어요. 같이 어울려 춤을 추다 보면 어느새 눈물이 흘렀어요.\n내가 남들 앞에서 절대로 울지 않는 사람인데 참 편했나 봐요.. 세상 편하게 살고 싶다는 생각이 듭니다.`,
      },
      {
        text: `운동을 하면 몸이 건강해진다고 하잖아요. 내비춤을 추면 몸이 건강해져요.\n따뜻하게 쉴 수 있게 해주셔서 감사합니다.\n어색했지만 몸을 움직이고 따라다 보면 좋을 추고 있는 거예요.\n태어나서 처음으로 남들 앞에서 자유롭게 춤을 췄어요.\n나비처럼요.. 무대가 두렵긴 했는데 자신감이 생깁니다.`,
      },
    ],
    reviewBgImage: images.dailyArt.nukduri.performance2Full,
  },
};

export default async function DailyArtPage() {
  const dbPrograms = await getPrograms("daily-art");

  return (
    <main className="bg-white">
      <DailyArtHero />

      {/* Program Sections */}
      {dbPrograms.map((program) => {
        const ext = extendedDataMap[program.slug] || {};
        return (
          <ProgramCard 
            key={program.id} 
            id={program.slug}
            englishTitle={ext.englishTitle || program.subtitle || ""}
            title={program.title}
            description={program.description}
            collageImage={ext.collageImage || program.image_url || ""}
            present={{
              image: ext.presentImage || program.image_url || "",
              bullets: program.features || []
            }}
            recommendItems={ext.recommendItems || []}
            reviews={ext.reviews || []}
            reviewBgImage={ext.reviewBgImage || ""}
          />
        );
      })}

      <GallerySection />
    </main>
  );
}
