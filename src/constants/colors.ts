// 지혜의밭 CI 기반 색상 팔레트 (CMYK → HEX 정밀 변환)
export const colors = {
  // Primary Colors (CI 기반)
  primary: {
    yellow: {
      DEFAULT: "#FFCC00",
      light: "#FFF8E1",
      dark: "#C69C00",
    },
    orange: {
      DEFAULT: "#FF6600",
      light: "#FFF0E6",
      dark: "#CC5200",
    },
    green: {
      DEFAULT: "#8CBA2A",
      light: "#F1F8E4",
      dark: "#5C7E1A",
    },
    blue: {
      DEFAULT: "#1A0EDA",
      light: "#E8E6FD",
      dark: "#0F0A8A",
    },
  },

  // Semantic Colors
  semantic: {
    positive: "#FFCC00", // 긍정의 에너지
    warmth: "#FF6600", // 따뜻한 온정
    stability: "#8CBA2A", // 마음의 안정
    healing: "#1A0EDA", // 내면의 치유
  },
} as const;

export type ColorKey = keyof typeof colors.primary;
