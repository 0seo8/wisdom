export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "지혜의밭",
    href: "/#greeting",
    children: [
      { label: "인사말", href: "/#greeting" },
      { label: "회사개요", href: "/#overview" },
      { label: "SDGs 경영", href: "/#sdgs" },
      { label: "인증", href: "/#certification" },
      { label: "CI", href: "/#ci" },
      { label: "오시는 길", href: "/#map" },
    ],
  },
  {
    label: "힐소마",
    href: "/healasoma",
    children: [
      { label: "바디풀니스", href: "/healasoma#bodyfulness" },
      { label: "마인드풀니스", href: "/healasoma#mindfulness" },
      { label: "테라피", href: "/healasoma#therapy" },
      { label: "표현 예술", href: "/healasoma#expressive" },
      { label: "집단 상담", href: "/healasoma#group" },
      { label: "연극 놀이", href: "/healasoma#creative" },
    ],
  },
  {
    label: "소매틱랩",
    href: "/somatic-lab",
    children: [
      { label: "개요", href: "/somatic-lab#overview" },
      { label: "효과", href: "/somatic-lab#effect" },
      { label: "논문", href: "/somatic-lab#article" },
      { label: "연구원", href: "/somatic-lab#people" },
      { label: "프로그램", href: "/somatic-lab#program" },
    ],
  },
  {
    label: "일상의 예술",
    href: "/daily-art",
    children: [
      { label: "소통 - 무늬만", href: "/daily-art#communication" },
      { label: "공감 - 넋두리", href: "/daily-art#sympathy" },
      { label: "해소 - 내비춤", href: "/daily-art#reduce" },
    ],
  },
  {
    label: "기업교육 및 행사",
    href: "/business",
    children: [
      { label: "기업교육", href: "/business#education" },
      { label: "행사기획", href: "/business#event" },
    ],
  },
  {
    label: "문의하기",
    href: "/contact",
  },
  {
    label: "공지사항",
    href: "/notice",
  },
];

export const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/channel/UCR8ZIwOtV1cAFgMaXe8EO6g", icon: "youtube" },
  { label: "Blog", href: "https://blog.naver.com/artswisdom", icon: "blog" },
  { label: "Instagram", href: "https://www.instagram.com/artswisdom_official/", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/artswisdom/", icon: "facebook" },
];

export const companyInfo = {
  name: "㈜지혜의밭",
  nameEn: "Artswisdom",
  slogan: "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 · 사회적기업",
  address: "서울특별시 영등포구 대림로 231, MG빌딩 3층",
  phone: "070-8264-6477",
  fax: "0504-387-6477",
  email: "info@artswisdom.com",
  ceo: "문수정",
  businessNumber: "436-81-00789",
};
