# SPEC-ARTSWISDOM-001: 지혜의밭 웹사이트 리빌드

## 1. 개요

### 1.1 프로젝트 정보
- **프로젝트명**: 지혜의밭(Artswisdom) 웹사이트 리빌드
- **기술 스택**: Next.js 16, TypeScript, Tailwind CSS
- **원본 사이트**: https://artswisdom.com/
- **목표**: 기존 사이트의 디자인과 기능을 Next.js App Router 기반으로 재구축

### 1.2 기업 정보
- **기관명**: ㈜지혜의밭 (Artswisdom)
- **슬로건**: "건강한 사회를 위해 웰니스 문화를 선도하는 소셜벤처 · 사회적기업"
- **위치**: 서울시 영등포구 대림로 231 MG 빌딩 3층
- **연락처**: 070-8264-6477

---

## 2. 사이트 구조

### 2.1 네비게이션 구조

```
├── / (홈)
├── /company (지혜의밭)
│   ├── #greeting (인사말)
│   ├── #overview (회사개요)
│   ├── #sdgs (SDGs 경영)
│   ├── #certification (인증)
│   ├── #ci (CI)
│   └── #map (오시는 길)
├── /healasoma (힐소마)
│   ├── #bodyfulness (바디풀니스)
│   ├── #mindfulness (마인드풀니스)
│   ├── #therapy (테라피)
│   ├── #expressive (표현 예술)
│   ├── #group (집단 상담)
│   └── #creative (연극 놀이)
├── /somatic-lab (소매틱랩)
│   ├── #overview (개요)
│   ├── #effect (효과)
│   ├── #article (논문)
│   ├── #people (연구원)
│   └── #program (프로그램)
├── /daily-art (일상의 예술)
│   ├── #communication (소통 - 무늬만)
│   ├── #sympathy (공감 - 넋두리)
│   └── #reduce (해소 - 내비춤)
├── /business (기업교육 및 행사)
│   ├── #education (기업교육)
│   └── #event (행사기획)
├── /contact (문의하기)
└── /notice (공지사항)
```

### 2.2 라우트 파일 구조

```
src/app/
├── layout.tsx              # 루트 레이아웃 (Header, Footer)
├── page.tsx                # 홈페이지
├── company/
│   └── page.tsx            # 지혜의밭 소개
├── healasoma/
│   └── page.tsx            # 힐소마 프로그램
├── somatic-lab/
│   └── page.tsx            # 소매틱랩 연구소
├── daily-art/
│   └── page.tsx            # 일상의 예술
├── business/
│   └── page.tsx            # 기업교육 및 행사
├── contact/
│   └── page.tsx            # 문의하기
└── notice/
    ├── page.tsx            # 공지사항 목록
    └── [id]/
        └── page.tsx        # 공지사항 상세
```

---

## 3. 디자인 시스템

### 3.1 색상 팔레트

```typescript
const colors = {
  // Primary Colors (CI 기반)
  yellow: {
    DEFAULT: '#FFD700',  // 긍정의 에너지
    light: '#FFF3CD',
    dark: '#B8860B',
  },
  orange: {
    DEFAULT: '#FF8C00',  // 따뜻한 온정
    light: '#FFE4B5',
    dark: '#CC7000',
  },
  green: {
    DEFAULT: '#228B22',  // 마음의 안정
    light: '#90EE90',
    dark: '#006400',
  },
  blue: {
    DEFAULT: '#4169E1',  // 내면의 치유
    light: '#87CEEB',
    dark: '#00008B',
  },

  // Neutral Colors
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
}
```

### 3.2 타이포그래피

```typescript
const typography = {
  fontFamily: {
    sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
    serif: ['Noto Serif KR', 'serif'],
  },
  fontSize: {
    'display-1': ['4rem', { lineHeight: '1.2', fontWeight: '700' }],
    'display-2': ['3rem', { lineHeight: '1.25', fontWeight: '700' }],
    'heading-1': ['2.5rem', { lineHeight: '1.3', fontWeight: '600' }],
    'heading-2': ['2rem', { lineHeight: '1.35', fontWeight: '600' }],
    'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
    'body-lg': ['1.125rem', { lineHeight: '1.6' }],
    'body': ['1rem', { lineHeight: '1.6' }],
    'body-sm': ['0.875rem', { lineHeight: '1.5' }],
    'caption': ['0.75rem', { lineHeight: '1.4' }],
  },
}
```

### 3.3 레이아웃 그리드

```typescript
const layout = {
  container: {
    maxWidth: '1280px',
    padding: {
      mobile: '1rem',
      tablet: '2rem',
      desktop: '4rem',
    },
  },
  section: {
    paddingY: {
      mobile: '3rem',
      tablet: '4rem',
      desktop: '6rem',
    },
  },
}
```

---

## 4. 컴포넌트 설계

### 4.1 공통 컴포넌트

```
src/components/
├── common/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   ├── Section.tsx
│   ├── SectionTitle.tsx
│   └── Badge.tsx
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   └── Logo.tsx
├── home/
│   ├── Hero.tsx
│   ├── MissionVision.tsx
│   ├── Timeline.tsx
│   ├── SDGsSection.tsx
│   └── NewsletterPreview.tsx
├── company/
│   ├── Greeting.tsx
│   ├── Overview.tsx
│   ├── Certification.tsx
│   ├── CISection.tsx
│   └── Map.tsx
├── healasoma/
│   ├── ProgramCard.tsx
│   └── ProgramSection.tsx
├── somatic-lab/
│   ├── ResearcherCard.tsx
│   ├── ProgramList.tsx
│   └── ArticleList.tsx
├── daily-art/
│   ├── ArtProgramCard.tsx
│   └── ProgramDetail.tsx
├── business/
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
├── contact/
│   └── ContactForm.tsx
└── notice/
    ├── NoticeList.tsx
    └── NoticeItem.tsx
```

### 4.2 주요 컴포넌트 명세

#### Header
- 고정 헤더 (sticky)
- 로고 + 메인 네비게이션
- 모바일: 햄버거 메뉴
- 드롭다운 서브메뉴

#### Hero Section
- 풀스크린 슬라이더/캐러셀
- 타이틀 + 서브타이틀 + CTA 버튼
- 자동 슬라이드 (5초 간격)

#### Section Component
- 일관된 패딩/마진
- 배경색 변경 옵션
- 타이틀 + 컨텐츠 구조

#### Card Component
- 이미지 + 타이틀 + 설명
- 호버 효과
- 반응형 그리드 배치

---

## 5. 페이지별 상세

### 5.1 홈페이지 (/)

#### 섹션 구성
1. **Hero**: 메인 비주얼 슬라이더
2. **미션·비전·가치**: 3열 카드 레이아웃
3. **타임라인**: 2017-2025 연혁 (수평 스크롤)
4. **SDGs 약속**: 7개 항목 그리드
5. **뉴스레터 미리보기**: 최근 공지사항 3개

### 5.2 지혜의밭 (/company)

#### 섹션 구성
1. **인사말**: 대표 메시지 + 이미지
2. **회사개요**: 기업 정보 테이블
3. **SDGs 경영**: SDGs 목표 및 실천 내용
4. **인증**: 인증서 그리드 (상표 6건, 저작권 4건, 기업인증 6건)
5. **CI**: 심볼마크, 로고, 색상체계 설명
6. **오시는 길**: 지도 + 주소 정보

### 5.3 힐소마 (/healasoma)

#### 프로그램 (6가지)
1. **바디풀니스(소매틱스)**: 몸과 마음의 통합적 접근
2. **마인드풀니스(명상)**: 사마타/위빠사나 명상
3. **테라피(치유)**: 아로마/춤/사운드/컬러 테라피
4. **표현 예술**: 음악/미술/무용/연극 치료
5. **집단 상담**: 관계를 통한 치유
6. **연극놀이**: 크리에이티브 드라마

#### 레이아웃
- 각 프로그램을 독립 섹션으로
- 이미지 + 설명 카드 형태
- 스크롤 애니메이션

### 5.4 소매틱랩 (/somatic-lab)

#### 섹션 구성
1. **개요**: 연구소 소개 및 소매틱스 개념
2. **효과**: 프로그램 효과 설명
3. **논문**: 연구 자료 목록 (외부 링크)
4. **연구원**: 5명 프로필 카드
5. **프로그램**: 6가지 프로그램 소개

#### 연구원 정보
| 이름 | 전공 | 자격 |
|------|------|------|
| 문수정 | 한나 소매틱스 | 소마전문사, 문화예술교육사 |
| 최미라 | 라반 댄스 테라피 | 국제공인라반동작분석가 |
| 이영선 | 소마 힐링 요가 | 물리치료사, 요가 지도사 |
| 정이화 | 소마 발레 | 이화여대 무용과 출강 |
| 최은화 | 무브 무브 바디 바디 | 움직임창작소 대표 |

### 5.5 일상의 예술 (/daily-art)

#### 프로그램 (3가지)
1. **무늬만 (소통극장)**: 참여형 갈등 해결 공연
2. **넋두리 (공감극장)**: 즉흥 공연으로 공감 창출
3. **내비춤 (춤명상)**: 몸의 움직임을 통한 치유

#### 공통 가치
- "쉽고, 재미있고, 안전한" 경험
- 참여자 개별성과 다양성 존중

### 5.6 기업교육 및 행사 (/business)

#### 서비스
1. **기업교육**
   - 맞춤형 강의 (소통, 협업, 리더십, 코칭)
   - 오픈스페이스 기술 (민주적 토론)

2. **행사기획**
   - 참여형 공연
   - 신체·정신 관리 프로그램

#### 차별점
- 문화예술 접목
- 과정중심 접근
- ESG 실천

### 5.7 문의하기 (/contact)

#### 폼 필드
- 이름 (필수)
- 이메일 (필수)
- 전화번호 (선택)
- 문의 내용 (필수, textarea)
- 첨부파일 (선택)
- 개인정보 동의 (필수)

#### 연락처 정보
- 주소: 서울시 영등포구 대림로 231 MG 빌딩 3층
- 전화: 070-8264-6477
- 이메일: (추가 필요)

### 5.8 공지사항 (/notice)

#### 기능
- 목록 페이지 (페이지네이션)
- 상세 페이지
- 검색 기능

---

## 6. 기능 요구사항

### 6.1 필수 기능
- [x] 반응형 디자인 (모바일/태블릿/데스크탑)
- [ ] 고정 헤더 네비게이션
- [ ] 드롭다운 서브메뉴
- [ ] 모바일 햄버거 메뉴
- [ ] 스무스 스크롤 (앵커 링크)
- [ ] 이미지 최적화 (next/image)
- [ ] SEO 최적화 (메타데이터)
- [ ] 문의 폼 (이메일 발송)
- [ ] 공지사항 CRUD

### 6.2 선택 기능
- [ ] Hero 슬라이더/캐러셀
- [ ] 스크롤 애니메이션 (Intersection Observer)
- [ ] 다크 모드
- [ ] 다국어 지원 (한/영)
- [ ] 소셜 미디어 연동

### 6.3 외부 연동
- YouTube 채널 링크
- 블로그 링크
- Instagram 링크
- Facebook 링크
- 카카오맵/네이버맵 (오시는 길)

---

## 7. 기술 스택

### 7.1 프레임워크 & 라이브러리

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "embla-carousel-react": "^8.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "tailwindcss": "^4.x",
    "@tailwindcss/postcss": "^4.x"
  }
}
```

### 7.2 폴더 구조

```
wisdom/
├── src/
│   ├── app/                    # Next.js App Router
│   ├── components/             # React 컴포넌트
│   ├── lib/                    # 유틸리티 함수
│   ├── hooks/                  # 커스텀 훅
│   ├── types/                  # TypeScript 타입
│   ├── constants/              # 상수 (메뉴, 색상 등)
│   └── styles/                 # 전역 스타일
├── public/
│   ├── images/                 # 이미지 에셋
│   ├── icons/                  # 아이콘
│   └── fonts/                  # 커스텀 폰트
├── .moai/                      # MoAI 설정
├── docs/                       # 문서
└── package.json
```

---

## 8. 구현 우선순위

### Phase 1: 기본 구조 (MVP)
1. 프로젝트 설정 (Tailwind, 폰트)
2. 레이아웃 컴포넌트 (Header, Footer)
3. 홈페이지
4. 지혜의밭 (회사소개)

### Phase 2: 주요 페이지
5. 힐소마 페이지
6. 소매틱랩 페이지
7. 일상의 예술 페이지
8. 기업교육 및 행사 페이지

### Phase 3: 기능 구현
9. 문의하기 폼
10. 공지사항 (목록/상세)
11. 반응형 최적화

### Phase 4: 고도화
12. 애니메이션 효과
13. SEO 최적화
14. 성능 최적화

---

## 9. 참고 자료

- 원본 사이트: https://artswisdom.com/
- 소매틱 연구 자료: https://somatic.artswisdom.com/

---

**생성일**: 2026-02-08
**버전**: 1.0.0
**상태**: Draft
