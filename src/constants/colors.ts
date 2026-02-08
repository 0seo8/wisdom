// 지혜의밭 CI 기반 색상 팔레트
export const colors = {
  // Primary Colors (CI 기반)
  primary: {
    yellow: {
      DEFAULT: "#FFD700",
      light: "#FFF3CD",
      dark: "#B8860B",
    },
    orange: {
      DEFAULT: "#FF8C00",
      light: "#FFE4B5",
      dark: "#CC7000",
    },
    green: {
      DEFAULT: "#228B22",
      light: "#90EE90",
      dark: "#006400",
    },
    blue: {
      DEFAULT: "#4169E1",
      light: "#87CEEB",
      dark: "#00008B",
    },
  },

  // Semantic Colors
  semantic: {
    positive: "#FFD700", // 긍정의 에너지
    warmth: "#FF8C00", // 따뜻한 온정
    stability: "#228B22", // 마음의 안정
    healing: "#4169E1", // 내면의 치유
  },
} as const;

export type ColorKey = keyof typeof colors.primary;
