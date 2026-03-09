# Artswisdom 원본 대비 스타일 차이 및 개선 계획

작성일: 2026-03-08  
비교 기준: 원본 `https://artswisdom.com` vs 로컬 `http://127.0.0.1:3005`  
캡처 경로: `/tmp/aw-compare/*.png`

## 1) 비교 범위
- 홈: `/`
- 힐소마: `/healsoma`
- 소매틱랩: `/somatic-lab`
- 일상의예술: `/daily-art`
- 기업교육 및 행사: `/business`
- 문의하기: `/contact`
- 공지사항: `/notice`

## 2) 페이지별 차이점

### 홈 `/`
- 원본은 중앙 타이포 조합(한글+스크립트 영문+단일 CTA) 구조가 단순하고 시선 집중이 강함.
- 로컬은 부제/설명/버튼 계층이 원본과 달라 정보 밀도가 높고 인상 차이가 큼.
- 상태: 차이 큼.

### 힐소마 `/healsoma`
- 배경/컬러/구성은 원본과 유사.
- 본문 첫 섹션 시작 높이(히어로 하단 여백)에서 미세 차이 존재.
- 상태: 차이 작음.

### 소매틱랩 `/somatic-lab`
- 원본과 로컬의 히어로 배경 이미지 무드가 다름.
- 타이틀 대비(밝기/그림자)가 낮아 원본 대비 가독성이 떨어짐.
- 상태: 차이 매우 큼 (최우선).

### 일상의예술 `/daily-art`
- 전체 레이아웃은 유사.
- 타이틀 폰트 느낌(기울기/두께)과 위치에서 미세 차이.
- 상태: 차이 작음.

### 기업교육 및 행사 `/business`
- 히어로 구성은 유사.
- 타이틀 수직 위치 및 본문 시작 높이에서 중간 수준 차이.
- 상태: 차이 중간.

### 문의하기 `/contact`
- 배경 톤은 유사.
- 타이틀 `Contact us` 대비가 원본보다 낮아 흐리게 보임.
- 상태: 차이 중간~큼.

### 공지사항 `/notice`
- 문의하기와 유사한 패턴.
- 타이틀 `Notice` 대비가 원본보다 낮아 존재감이 약함.
- 상태: 차이 중간~큼.

## 3) 공통 원인
- 히어로 타이틀의 색/불투명도/그림자 값이 페이지별로 불균일.
- 히어로 높이와 본문 시작 간격이 페이지마다 다름.
- 일부 페이지는 원본과 다른 히어로 배경 에셋/톤을 사용.
- 홈은 텍스트 구조 자체가 원본과 다른 방향으로 구성됨.

## 4) 개선 계획 (우선순위)

## P0-1. 히어로 공통 토큰 정리
- 범위: 모든 `*Hero.tsx`
- 작업:
- 타이틀 컬러/opacity/shadow 공통값 정의
- 오버레이 강도 범위 통일
- 히어로 높이 기준 통일
- 완료 기준: contact/notice/somatic에서 타이틀 가독성 일관화
- 예상: 0.5일

## P0-2. 소매틱랩 히어로 원본 동기화
- 범위: `src/components/somatic-lab/SomaticLabHero.tsx`
- 작업:
- 원본 무드에 맞는 배경 이미지 재지정
- 타이틀 대비(색/그림자) 보정
- 오버레이 레벨 조정
- 완료 기준: 첫 화면 인상이 원본과 같은 축으로 인지
- 예상: 0.5~1일

## P1-1. 홈 히어로 구조 동기화
- 범위: `src/components/home/Hero.tsx`
- 작업:
- 원본 기준 카피 구조/버튼 위치/타이포 계층 재정렬
- 완료 기준: 원본과 동일한 정보 인지 순서
- 예상: 1일

## P1-2. business/healsoma/daily-art 간격 미세 조정
- 범위: 각 Hero + 첫 본문 섹션
- 작업:
- 히어로 하단~본문 상단 간격값 통일
- 타이틀 Y축 위치 미세 조정
- 완료 기준: 페이지 전환 시 수직 리듬 불일치 최소화
- 예상: 0.5일

## P2. 캡처 기반 QA 루프
- 작업:
- 동일 뷰포트(Desktop Chrome) 재캡처
- 페이지별 체크리스트 검수
- 완료 기준: 주요 시각 차이 80% 이상 해소
- 예상: 0.5일

## 5) 실행 순서 제안
1. P0-1 히어로 공통 토큰 정리
2. P0-2 소매틱랩 동기화
3. P1-1 홈 히어로 동기화
4. P1-2 서브페이지 간격 조정
5. P2 캡처 QA 및 최종 보정

## 6) 참고 파일
- `src/components/home/Hero.tsx`
- `src/components/healsoma/HealsomaHero.tsx`
- `src/components/somatic-lab/SomaticLabHero.tsx`
- `src/components/daily-art/DailyArtHero.tsx`
- `src/components/business/BusinessHero.tsx`
- `src/components/contact/ContactHero.tsx`
- `src/components/notice/NoticeHero.tsx`
