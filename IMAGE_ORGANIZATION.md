# 이미지 폴더 정리 현황

## 📁 폴더 구조

### 영어 폴더 (권장 사용)
- `/public/images/somatic-lab/` - 소매틱랩
- `/public/images/healasoma/` - 힐소마
- `/public/images/daily-art/` - 일상의 예술
- `/public/images/business/` - 기업교육 및 행사

### 한국어 폴더 (레거시)
- `/public/소매틱랩/`
- `/public/힐소마/`
- `/public/일상의 예술/`
- `/public/기업의 예술/`

## ✅ 복사 완료된 이미지

### 소매틱랩
- `프로그램-소개-메인-이미지1.jpg` → `program-intro-main.jpg`
- `소매틱스-프로그램.jpg` → `programs-header.jpg`

### 일상의 예술
- `무늬만-소개-사진1-194x300.jpg` → `muniman-intro.jpg`
- `넋두리-소개-사진1.jpg` → `nukduri-intro.jpg`
- `공연-2-1-1024x768.jpg` → `nukduri-performance-2.jpg`
- `넋두리-공연-후-5.jpg` → `nukduri-performance-5.jpg`

### 논문 섹션 이미지
- `1-3.png` → `article-image-1.jpg`
- `2-2.png` → `article-image-2.jpg`

## 📋 이미 영어 폴더에 있는 이미지

### 소매틱랩 (`/public/images/somatic-lab/`)
- ✅ `hero-bg.jpg` (11.jpg)
- ✅ `certification-badge.png` (인증서-0510_08-1024x436.png)
- ✅ `trinity-concept.png` (힐소마-삼위일체.png)
- ✅ `difference-chart.png` (차이점1230.png)
- ✅ `methodology-main.jpg` (11.jpg)
- ✅ `connector-icon.png` (이음-150x150.png)
- ✅ 연령대별 이미지들 (청소년기.jpg, 청년기.jpg, 중장년기.jpg, 노년기.jpg, 운동선수2.jpg, 연예인.jpg)
- ✅ 연구원 사진들 (문수정님, 최미라님, 이영선님, 정이화님, 최은화님)
- ✅ 프로그램 이미지들

### 힐소마 (`/public/images/healasoma/`)
- ✅ `hero-bg.jpg`
- ✅ `bg-harmony.jpg` (harmony-5154766_1280.jpg)
- ✅ `bg-leaves.jpg` (leaves-8222919_1280-1.jpg)
- ✅ 프로그램 이미지들 (몸쉼.png, 소리명상-1.png, 심리상담.png 등)

### 일상의 예술 (`/public/images/daily-art/`)
- ✅ 무늬만 공연 사진들
- ✅ 넋두리 공연 사진들
- ✅ 내비춤 이미지들
- ✅ 추천 이미지들

### 기업교육 (`/public/images/business/`)
- ✅ 교육 사진들 (20210615_*.png)
- ✅ 행사 사진들
- ✅ 추천 이미지들

## 🗑️ 정리 권장사항

### 삭제 가능한 중복 파일들 (한국어 폴더)
모든 이미지가 영어 폴더로 복사되었으므로, 한국어 폴더는 백업 후 삭제 가능:
- `/public/소매틱랩/`
- `/public/힐소마/`
- `/public/일상의 예술/`
- `/public/기업의 예술/`
- `/public/공지사항/`
- `/public/문의하기/`

### 삭제 가능한 Next.js 기본 파일들
- `/public/file.svg`
- `/public/globe.svg`
- `/public/next.svg`
- `/public/vercel.svg`
- `/public/window.svg`

## 📝 constants/images.ts 사용법

모든 이미지는 `src/constants/images.ts`에 정의되어 있습니다:

```typescript
import { images } from "@/constants/images";

// 사용 예시
<Image src={images.somaticLab.hero} alt="소매틱랩" />
<Image src={images.healasoma.bodyfulness} alt="바디풀니스" />
<Image src={images.dailyArt.muniman.intro} alt="무늬만" />
<Image src={images.business.hero} alt="기업교육" />
```

## ⚠️ 주의사항

1. **한국어 폴더 삭제 전 백업 필수**
2. **영어 폴더의 이미지들이 올바르게 표시되는지 확인**
3. **constants/images.ts의 경로가 모두 올바른지 검증**
4. **프로덕션 배포 전 모든 페이지 테스트**
