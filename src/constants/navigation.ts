export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "지혜의밭",
    href: "/",
    children: [
      { label: "인사말", href: "/#greeting" },
      { label: "비전", href: "/#vision" },
      { label: "발자취", href: "/#history" },
      { label: "CI", href: "/#ci" },
      { label: "오시는 길", href: "/#location" },
    ],
  },
  {
    label: "힐소마",
    href: "/healasoma",
    children: [
      { label: "힐소마 소개", href: "/healasoma#intro" },
      { label: "통합예술치유", href: "/healasoma#therapy" },
      { label: "프로그램", href: "/healasoma#program" },
    ],
  },
  {
    label: "소매틱랩",
    href: "/somatic-lab",
    children: [
      { label: "연구소 소개", href: "/somatic-lab#intro" },
      { label: "연구활동", href: "/somatic-lab#research" },
      { label: "출판물", href: "/somatic-lab#publication" },
    ],
  },
  {
    label: "일상의 예술",
    href: "/daily-art",
    children: [
      { label: "프로젝트 소개", href: "/daily-art#intro" },
      { label: "활동 갤러리", href: "/daily-art#gallery" },
    ],
  },
  {
    label: "기업의 예술",
    href: "/business",
    children: [
      { label: "기업교육", href: "/business#education" },
      { label: "행사기획", href: "/business#event" },
    ],
  },
  {
    label: "공지사항",
    href: "/notice",
  },
  {
    label: "문의하기",
    href: "/contact",
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
