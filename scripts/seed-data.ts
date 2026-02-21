import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const BUCKET_NAME = 'images';
const STORAGE_PREFIX = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}`;

const getImageUrl = (localPath: string) => {
    // Remove leading slash or /images/ prefix
    const cleanPath = localPath.replace(/^\/?images\//, '');
    return `${STORAGE_PREFIX}/${cleanPath}`;
}

const healsomaPrograms = [
  {
    category: 'healasoma',
    slug: 'bodyfulness',
    title: '소매틱스',
    subtitle: 'Bodyfulness',
    description: '홀리즘 관점의 건강관으로 몸과 마음의 통합적 접근법입니다.\n소매틱스 창시자Tomas hanna는 스트레스와 신경생리학적 기전을\n연구하여 노화의 신비(Myth of Aging)라고 하는 프로토콜을 만들었습니다.\nSoma(살아있는 몸)의 주관적 경험을 중시하며 만성통증, 스트레스 해소,\n잘못된 자세 등을 개선할 수 있습니다.',
    features: ["신체 자각", "움직임 탐구", "호흡 연결", "몸-마음 통합"],
    image_url: getImageUrl('/images/healsoma/program-bodyfulness.png'),
    order: 1,
    is_active: true
  },
  {
    category: 'healasoma',
    slug: 'mindfulness',
    title: '명상',
    subtitle: 'Mindfulness',
    description: '마음챙김에 기반하여 지금 여기서 일어나는 몸의 감각, 생각, 감정을 알아차리는 명상입니다.\n호흡명상, 자비명상, 걷기 명상 등 다양한 명상 기법을 통해 스트레스를 완화하고 정서적 안정을 돕습니다.\n일상 속에서 깨어있는 마음을 연습하며 삶의 질을 높일 수 있습니다.',
    features: ["사마타 명상", "위빠사나 명상", "일상 마음챙김", "집중력 향상"],
    image_url: getImageUrl('/images/healsoma/program-mindfulness.png'),
    order: 2,
    is_active: true
  },
  {
    category: 'healasoma',
    slug: 'therapy',
    title: '치유',
    subtitle: 'Therapy',
    description: '봉사를 뜻하는 ‘Therapeia’에서 유래되었으며\n문제 해결을 스스로 할 수 있도록 도움을 주는\n치유로써 다양한 방법론이 있습니다.\n인간의 내재 된 치유력을 믿고 자연의 상태로\n돌아가서 회복할 것을 돕습니다.',
    features: ["아로마테라피", "춤테라피", "사운드 테라피", "컬러테라피", "스파테라피 등"],
    image_url: getImageUrl('/images/healsoma/program-therapy.png'),
    order: 3,
    is_active: true
  },
  {
    category: 'healasoma',
    slug: 'expressive-art',
    title: '표현 예술',
    subtitle: 'Expressive Art',
    description: '고대 사회의 제례의식에서 기원되었습니다.\n다양한 예술활동을 통해 내담자의 내적 감정의 표현 매체로써\n무의식의 방어기제를 승화하도록 돕습니다.\n예술활동을 하는 과정에서 자기를 표현하고 인식하게 됨으로써\n성장과 가능성을 열어줍니다. 대체요법으로 활용되고 있습니다.',
    features: ["음악치료", "미술치료", "무용동작치료", "연극치료", "문학치료", "통합예술치료 등"],
    image_url: getImageUrl('/images/healsoma/program-expressive-art.png'),
    order: 4,
    is_active: true
  },
  {
    category: 'healasoma',
    slug: 'group-counseling',
    title: '집단 상담',
    subtitle: 'Group Counseling',
    description: '관계를 통한 치유로써 정서적 상처로 부터 자유로워지는 것이 목표입니다.\n고통의 감정은 두려움에서 나옵니다. 안전한 공간에서 귀기울이고,\n두려움의 고통들을 표출하도록 북돋아 줍니다.\n지지적 관계 내에서의 discharge는 개인과 공동체의 유용성에 기여합니다.',
    features: ["그룹 역동", "대인관계 성장", "공감 능력", "상호 지지"],
    image_url: getImageUrl('/images/healsoma/program-group-counseling.png'),
    order: 5,
    is_active: true
  },
  {
    category: 'healasoma',
    slug: 'creative-drama',
    title: '연극놀이',
    subtitle: 'Creative Drama',
    description: '직원 교육이나 집체 교육 프로그램으로 활용되면 좋습니다.\n쉽고, 재미있고 안전한 공간에서 과정을 통해 드라마가 만들어지며,\n집단 지성이 발휘되어 문제의 대한 창의적인 아이디어 도출이 용이합니다.\n극적 놀이를 통해 팀의 결속력을 높이고 성장의 자양분을 이끌어 냅니다.\n언어와 비언어적인 활동, 다양한 캐릭터 등이 가능하며 누구나 참여하여\n즐겁게 성찰합니다.',
    features: ["즉흥 연기", "역할 놀이", "창의적 표현", "상상력 개발"],
    image_url: getImageUrl('/images/healsoma/program-creative-drama.png'),
    order: 6,
    is_active: true
  }
];

const dailyArtPrograms = [
    {
      category: 'daily-art',
      slug: 'muniman',
      title: '무늬만',
      subtitle: 'Muniman',
      description: `시대가 바뀌어도 우리에게 요구되는 능력은\n더 유연하고 더 포용적으로 연결할 수 있는 능력이 아닐까요.\n'따로 또 같이' 개별성은 존중하되 다양성을 인정할 수 있는 관계에서 자율성과 소속감을 모두 충족시킬 수 있습니다.\n\n무늬만에서는 개인과 조직의 다양한 문제를 객관화하여 갈등 해결을 위한 아이디어를 연습해보는 소통의 장입니다.\n균형과 조화로운 솔루션을 통해 상호성과 연결감을 경험하게 됩니다.`,
      features: [
        "참여형으로 관객이 주인공이 되어 배우와 직접 만들어 보는 열린 무대",
        "일상에서부터 큰 이슈까지, 다양한 아이디어를 연습해봄으로써 얻는 Insight",
        "찾아가는 공연에서 비대면 공연까지, 고객의 Needs에 따른 맞춤형 기획 콘텐츠",
        "전문적인 Conductor와 훈련된 소통 배우의 Quality 높은 서비스",
        "다양한 문제를 입체적으로 가시화하여 무대의 Frame을 통해 안전하게 연습",
      ],
      image_url: getImageUrl('/images/daily-art/muniman-performance-1.jpg'),
      order: 1,
      is_active: true
    },
    {
      category: 'daily-art',
      slug: 'nukduri',
      title: '넛두리',
      subtitle: 'Nukduri',
      description: `지금 편하게 속을 털어놓을 상대가 있으신가요?\n이발사가 대나무 숲에서 "임금님 귀는 당나귀 귀" 라고 외쳤을 때 얼마나 후련했을까요.\n\n대나무 숲에서 느낄 수 있는 속 시원한 자리가 바로 공감극장 '넛두리'입니다.\n이야기는 이발사에게만 있는 게 아닙니다.\n우리는 이야기를 가지고 살아가지만, 다만 안전한 공간이 없을 뿐이지요.\n\n여러분의 공동체와 조직에 오직 여러분만을 위한 대나무 숲을 만들어 드립니다.`,
      features: [
        "개인과 사회의 문제를 안전하게 해결하고 성장할 수 있는 장",
        "환대와 수용을 통한 자기 신뢰, 감사와 사랑을 통한 회복탄력성",
        "화자만을 위한 배우와 뮤지션의 콜라보로 전해지는 특별한 감동",
        "즉흥공연으로 만들어지는 사람을 살리고, 관계를 살리는 공감의 힘",
        "신비하고 경이로운 온/오프라인 양방향 소통·공감 공연 Know-How",
        "남녀노소 구분 없이 참여하여 모두가 공감으로 하나 되는 열린 무대",
        "개별성과 다양성을 있는 그대로 허용하고 지지하는 안전한 공간",
      ],
      image_url: getImageUrl('/images/daily-art/nukduri-present.jpg'),
      order: 2,
      is_active: true
    },
    {
      category: 'daily-art',
      slug: 'navichoom',
      title: '내비춤',
      subtitle: 'Navichoom',
      description: `나비의 몸짓 '내비춤'은 자유로운 움직임으로 해방감을 느끼는 몸을 만나게 됩니다.\n무의식에 자리 잡은 내면 아이의 고통을 춤을 통해 해소합니다.\n왜 고통스러울까요. 왜 힘이 드는 걸까요.\n원인을 알면 자유로울 수 있습니다.\n몸이 보내는 신호를 알아차리기 위해서는 감각을 깨우는 게 중요합니다.\n내면과 소통하고 세상과 공감하는 움직임, 내비춤은 춤명상입니다.\n\n그동안 돌보지 못했던 몸에게 말합니다.\n"몸아, 미안해!", "몸아, 고마워!"`,
      features: [
        "몸이 원하는 움직임을 통해 스트레스를 흘려보내는 해소의 장",
        "커뮤니티 댄스와 접촉 즉흥을 통한 정서적 지지와 연대감",
        "Somatics를 통해 부드러움을 확장하여 누구나 쉽게 춤출 수 있는 메소드",
        "보여주기 위한 춤이 아닌 나의 내면을 정화하는 '나'를 위한 춤",
        "몸의 다양성을 존중하고 함께 조화를 이루는 진정한 관계를 위한 춤",
        "부드러운 움직임을 통한 신체 활성화와 뇌 가소성",
      ],
      image_url: getImageUrl('/images/daily-art/navichoom-performance.jpg'),
      order: 3,
      is_active: true
    }
];

const somaticLabPrograms = [
    {
        category: 'somatic-lab',
        slug: 'hanna-somatics',
        title: 'Hanna Somatics',
        subtitle: '한나 소매틱스',
        description: "체학 분야의 창시자 토마스 한나의 HSE를 기반한 프로그램으로 근육운동기억을 재훈련하고 통증을 완화하기 위해 신경과학과 동양철학등을 통섭한 1차 체험의 repatterning 과정입니다.\n진화 과정을 통해 누구나 겪게 될 척추의 응축을 부드럽게 이완하여 우아한 움직임의 길을 찾아갑니다",
        features: [
            "부드러운 호흡과 움직임으로 잃어버린 내부감각과 고유감각을 회복합니다.",
            "움직임을 인지하여 자동화된 습관을 알아차림하여 신경계를 변화시킵니다.",
            "몸의 긴장을 이완하며 자연스럽고 효율적인 방법으로 통증을 완화합니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/kids-7426792_1280.jpg'), // maps to children image
        order: 1,
        is_active: true
    },
    {
        category: 'somatic-lab',
        slug: 'laban-dance-therapy',
        title: 'Laban & Dance Therapy',
        subtitle: '라반 댄스 테라피',
        description: "소매틱과 춤, 부드러운 움직임은 몸의 감각과 연결성을 회복시켜, 단절된 일상과 경쟁으로 인하여 극심한 스트레스를 벗어나게 도와줍니다.\n라반.바르테니에프의 PTBC(Patterns of Total Body Connectivity)신체 신경계 움직임 발달 6단계를 통해 무의식적으로 세포에 깃든 부정적 정서를 해소하여 삶의 활력을 되찾아 줍니다.",
        features: [
            "몸의 움직임에 대한 원리를 이해하고 나에게 맞는 움직임을 찾게 합니다.",
            "몸으로 소통하고 관계성을 향상 시킵니다.",
            "움직임을 통해 창의성과 예술성이 발휘됩니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/people-2605906_1280-1.jpg'), // maps to labanDance
        order: 2,
        is_active: true
    },
    {
        category: 'somatic-lab',
        slug: 'soma-healing-yoga',
        title: 'Soma Healing Yoga',
        subtitle: '소마 힐링 요가',
        description: "소매틱 힐링 요가는 관절과 근육의 유연성으로 동작을 만들어내야 하는 기존의 요가가 아닌, 있는 그대로의 몸을 자각하고 내부 감각을 깨워 몸이 조화와 균형을 회복하도록 돕는 힐링 프로그램입니다.",
        features: [
            "의식적, 무의식적인 긴장으로부터 깊은 이완을 줍니다.",
            "부드럽고 섬세한 움직임이 뭉친 근막을 풀어냅니다.",
            "쉬운 움직임을 통해 관절과 근육이 정렬되어 몸이 바르게 서게 됩니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/yoga-5281458_1280.jpg'), // maps to healingYoga
        order: 3,
        is_active: true
    },
    {
        category: 'somatic-lab',
        slug: 'soma-ballet',
        title: 'Soma Ballet',
        subtitle: '소마 발레',
        description: "일상에 지친 몸을 돌보며 소매틱 발레를 통해 내 안의 생기와 우아함을 찾아가는 수업입니다. 발레는 부드러운 움직임을 통해 긴장된 몸과 마음을 이완 시키고 내면의 아름다움을 발견하도록 합니다.\n기존 발레와 다른, 잘 쉬고, 바르게 서고, 편안하게 걷는 것 만으로도 저절로 춤이 되는 신선한 경험을 하고 싶은 분들을 기다립니다.",
        features: [
            "부드러운 움직임을 통해 긴장된 몸을 이완 시킵니다.",
            "몸의 바른 정렬을 찾고 유연함을 회복 시킵니다.",
            "잃어버렸던 생기와 우아함을 발견하게 합니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/vintage-2608934_1280.jpg'), // maps to ballet
        order: 4,
        is_active: true
    },
    {
        category: 'somatic-lab',
        slug: 'move-move-body-body',
        title: 'Move Move Body Body',
        subtitle: '무브 무브 바디 바디',
        description: "어린이들이 흔히 하는 놀이나 취미, 그리고 일상에서의 움직임이 춤으로 연결되어 몸으로 표현하게 하는 체험형 통합예술교육 프로그램입니다.",
        features: [
            "신체 여러 감각을 활용하여 상호작용을 통해 사회성을 길러 줍니다.",
            "춤을 통해 서로 소통하고 다양한 자기 표현 법을 익힙니다.",
            "예술적 감성과 창의력을 향상시켜 건강한 자신감을 키웁니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/kids-7426792_1280.jpg'), // maps to children
        order: 5,
        is_active: true
    },
    {
        category: 'somatic-lab',
        slug: 'contact-improvisation',
        title: 'Contact Improvisation & Circle Dance',
        subtitle: '접촉즉흥 & 써클댄스',
        description: "\"당신을 행복하게 하는 움직임이라면 무엇이든 춤이 될 수 있다\"\nSteve Paxton 의 말처럼 일상의 움직임으로 소통하는 기분좋은 관계를 만듭니다.\n함께 춤으로써 자신을 발견하고 상대를 배려하며 소통과 공감이 자연스럽게 일어납니다.\n몸의 중심과 바닥,중력과의 연결을 인지하며 모든 가능성을 탐구하게 됩니다.\n\n원(circle)은 평등과 평화를 상징합니다. 영원의 춤, 신성무라고도 불리며\n\"상징적이고 의식적인 체험이 치유력을 가져온다\"라고 말합니다.",
        features: [
            "커뮤니티 댄스를 통해 몸과 마음을 조우하여 공동체성을 회복합니다.",
            "써클로 함께 춤추는 가운데 화합과 연결을 통한 현대사회의 고립, 우울감을 해소합니다.",
        ],
        image_url: getImageUrl('/images/somatic-lab/folk-dance-54530_1280.jpg'), // maps to circleDance
        order: 6,
        is_active: true
    }
];

const researchers = [
  {
    name: "문수정",
    specialty: "Hanna Somatics",
    qualifications: ["소마전문사", "문화예술교육사", "Applied Drama Practitioner", "내면아이, 상호상담RC/명상 지도사"],
    bio: [
      "전)경기대학교 평생교육원 출강",
      "전주대학교 하계 교수 워크숍 '공감을 위한 비폭력 스킬'",
      "서원대 산업대학원 소셜벤처전공entrepreneurship 강의",
      "한국장학재단 상담센터 힐링캠프 진행",
      "동작구 시설관리공단 힐링캠프 진행",
      "자전적 공연-과천시민회관 <나에게 반하다> 외"
    ].join('\n'),
    image_url: getImageUrl('/images/somatic-lab/researcher-moon.png'),
    order: 1,
    is_active: true
  },
  {
    name: "최미라",
    specialty: "Laban & Dance Therapy",
    qualifications: ["소마전문사", "국제공인라반동작분석가", "인지행동발달심리상담사", "통합예술심리상담사/미술치료사"],
    bio: [
      "과천시 장애인 복지관<장애인을 위한 춤테라피>",
      "서귀포치유숲 자기돌봄예술치유",
      "토요예술학교 몸으로 읽는 그림책",
      "치매어르신을 위한 라반 기반 움직임",
      "국제즉흥춤축제 <Rebirth of sacrum>",
      "경의선 축제 몸 꽃 안무",
      "과천 민예총 춤타조타 안무 외"
    ].join('\n'),
    image_url: getImageUrl('/images/somatic-lab/researcher-choi-mira.png'),
    order: 2,
    is_active: true
  },
  {
    name: "이영선",
    specialty: "Soma Healing Yoga",
    qualifications: ["소마전문사", "요가, 명상 지도사", "물리치료사/도수치료사", "표현예술심리치료사", "미술치료사/놀이심리상담사"],
    bio: [
      "전)한양여대 요가과정 출강",
      "인도요가 및 아유르베다 연수",
      "목동문화센터 명상, 요가 강의",
      "하나원 소매틱과 춤 강의",
      "수도원 요가와 서클댄스",
      "강릉한옥마을 소매틱 요가",
      "이화여대 공연 <물끄러미 .하염없이> 외"
    ].join('\n'),
    image_url: getImageUrl('/images/somatic-lab/researcher-lee.png'),
    order: 3,
    is_active: true
  },
  {
    name: "정이와",
    specialty: "Soma Ballet",
    qualifications: ["소마전문사", "문화예술교육사", "이화여자대학교 무용과 출강", "정이와 댄스프로젝트 안무가"],
    bio: [
      "소마전문가 양성 과정 전임 강사",
      "<몸공부: Somatic Learning> 전문강사",
      "문화조성 사업 서대문구 50+센터 강의",
      "몸춤놀이학교 서대문구 50+센터 진행",
      "중랑구 성평등활동센터 자기돌봄 워크숍",
      "서울문화재단 링가링가 자이언트 얀",
      "서강대 메리홀 <보이지 않는 벽> 안무 외"
    ].join('\n'),
    image_url: getImageUrl('/images/somatic-lab/researcher-jung.png'),
    order: 4,
    is_active: true
  },
  {
    name: "최은화",
    specialty: "Movemove Bodybody",
    qualifications: ["소마전문사", "문화예술교육사", "경민대학교 공연예술과 출강", "움직임창작소See 대표", "한국문화예술교육진흥원 예술강사"],
    bio: [
      "서울문화재단 <SEARCH_예술적 거리두기 해제법> 연구",
      "인천문화재단<가족과 만나는 바다 속 이야기>",
      "국립현대미술관 서울관,과천관 통합예술교육",
      "서울문화재단 꿈다락토요문화학교 기획, 강의",
      "아르코·대학로 예술극장 대학로 놀이학교 기획",
      "국립극단 청소년시리즈<레스슬링시즌> 안무 외"
    ].join('\n'),
    image_url: getImageUrl('/images/somatic-lab/researcher-choi-eunhwa.png'),
    order: 5,
    is_active: true
  }
];

async function seedData() {
  console.log('Seeding Programs...');
  console.log('Clearing existing Programs...');
  await supabase.from('programs').delete().neq('id', 0);
  
  const allPrograms = [...healsomaPrograms, ...dailyArtPrograms, ...somaticLabPrograms];
  const { error: progError } = await supabase.from('programs').insert(allPrograms);
  if (progError) {
      console.error('Error inserting programs:', progError);
  } else {
      console.log('Inserted all programs successfully.');
  }

  console.log('Seeding Researchers...');
  // Researchers table might not have a slug, we'll upsert by name for this seed script.
  // We'll first delete existing researchers to keep it clean, or just use insert and let it append
  // Since we run this once, let's just delete and insert
  await supabase.from('researchers').delete().neq('id', 0); // Delete all
  const { error: resError } = await supabase.from('researchers').insert(researchers);
  if (resError) {
      console.error('Error inserting researchers:', resError);
  } else {
      console.log('Inserted all researchers successfully.');
  }

  console.log('Seed completed successfully!');
}

seedData();
