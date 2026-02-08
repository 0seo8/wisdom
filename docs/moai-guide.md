# MoAI-ADK 사용 가이드

MoAI-ADK는 Claude Code를 위한 전략적 오케스트레이터입니다. **Plan → Run → Sync** 파이프라인을 통해 체계적인 개발 워크플로우를 제공합니다.

---

## 목차

1. [개요](#1-개요)
2. [설치](#2-설치)
3. [핵심 명령어](#3-핵심-명령어)
4. [워크플로우 상세](#4-워크플로우-상세)
5. [에이전트 시스템](#5-에이전트-시스템)
6. [개발 방법론](#6-개발-방법론)
7. [품질 프레임워크 (TRUST 5)](#7-품질-프레임워크-trust-5)
8. [설정 파일](#8-설정-파일)
9. [고급 기능](#9-고급-기능)
10. [문제 해결](#10-문제-해결)

---

## 1. 개요

### MoAI란?

MoAI(Modu AI)는 Claude Code의 기능을 확장하는 AI 개발 키트입니다.

**핵심 특징:**
- 28개 전문화된 AI 에이전트
- 64개 스킬
- 단일 Go 바이너리 (의존성 없음)
- ~5ms 네이티브 실행 속도
- 18개 프로그래밍 언어 지원

### 기본 철학

MoAI는 **오케스트레이터**로서 직접 구현하지 않고, 전문 에이전트에게 작업을 위임합니다.

```
사용자 요청 → MoAI 분석 → 에이전트 위임 → 결과 통합 → 사용자 응답
```

---

## 2. 설치

### macOS / Linux / WSL

```bash
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
```

### Windows PowerShell

```powershell
irm https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.ps1 | iex
```

### 소스에서 빌드 (Go 1.25+)

```bash
git clone https://github.com/modu-ai/moai-adk.git
cd moai-adk && make build
```

### 버전 확인

```bash
moai --version
```

### 프로젝트 초기화

```bash
moai init my-project
```

대화형 마법사가 다음을 자동 감지합니다:
- 프로그래밍 언어
- 프레임워크
- 개발 방법론

---

## 3. 핵심 명령어

### 명령어 개요

| 명령어 | 설명 | 단계 |
|--------|------|------|
| `/moai project` | 프로젝트 문서 생성 | 분석 |
| `/moai plan "설명"` | SPEC 문서 생성 | Plan |
| `/moai run SPEC-ID` | 구현 실행 | Run |
| `/moai sync SPEC-ID` | 문서화 및 PR 생성 | Sync |
| `/moai fix` | 자동 오류 수정 | 유틸리티 |
| `/moai loop` | 반복 수정 (최대 100회) | 유틸리티 |
| `/moai feedback` | 피드백 제출 | 유틸리티 |

### 3.1 `/moai project` - 프로젝트 분석

프로젝트 구조를 분석하고 문서를 생성합니다.

```bash
/moai project
```

**생성 결과물:**
- `product.md` - 제품 개요
- `structure.md` - 프로젝트 구조
- `tech.md` - 기술 스택 분석

### 3.2 `/moai plan` - 기능 계획

EARS(Easy Approach to Requirements Syntax) 형식의 SPEC 문서를 생성합니다.

```bash
# 기본 사용
/moai plan "사용자 인증 기능 추가"

# 팀 모드 강제
/moai plan "결제 시스템 구현" --team

# 솔로 모드 강제
/moai plan "버그 수정" --solo
```

**SPEC 문서 구조:**
```
SPEC-AUTH-001
├── 요구사항 분석
├── 도메인 모델
├── 기술 설계
├── 구현 계획
└── 테스트 전략
```

### 3.3 `/moai run` - 구현 실행

SPEC 문서를 기반으로 코드를 구현합니다.

```bash
# 기본 실행 (자동 모드 선택)
/moai run SPEC-AUTH-001

# 솔로 모드 (순차 처리)
/moai run SPEC-AUTH-001 --solo

# 팀 모드 (병렬 처리)
/moai run SPEC-AUTH-001 --team

# 자동 모드 (복잡도 기반 선택)
/moai run SPEC-AUTH-001 --auto
```

**실행 모드 비교:**

| 모드 | 처리 방식 | 적합한 경우 |
|------|----------|------------|
| `--solo` | 순차적 에이전트 위임 | 단순 작업, 낮은 복잡도 |
| `--team` | 병렬 팀 협업 | 3+ 도메인, 10+ 파일, 복잡도 7+ |
| `--auto` | 자동 선택 (기본값) | 대부분의 경우 권장 |

### 3.4 `/moai sync` - 동기화 및 PR

문서를 업데이트하고 Pull Request를 생성합니다.

```bash
/moai sync SPEC-AUTH-001
```

**수행 작업:**
- 코드 문서 자동 생성
- README/CHANGELOG 업데이트
- Pull Request 생성
- 품질 게이트 최종 검증

### 3.5 `/moai fix` - 자동 오류 수정

Ralph Engine을 사용하여 오류를 자동으로 수정합니다.

```bash
/moai fix
```

**처리 순서:**
1. 스캔 - 코드베이스 분석
2. 분류 - 오류 유형 분류
3. 수정 - 자동 수정 적용
4. 검증 - 수정 결과 확인

### 3.6 `/moai loop` - 반복 수정

완료 마커가 감지될 때까지 반복적으로 수정합니다.

```bash
/moai loop
```

**제한 사항:**
- 최대 100회 반복
- 5회 연속 진행 없으면 중단
- 동일 수정 2회 시도 시 중단

---

## 4. 워크플로우 상세

### Plan → Run → Sync 파이프라인

```
┌─────────────────────────────────────────────────────────────┐
│                    MoAI 워크플로우                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│  │   Plan   │ →  │   Run    │ →  │   Sync   │              │
│  │  30K 토큰 │    │ 180K 토큰 │    │  40K 토큰 │              │
│  └──────────┘    └──────────┘    └──────────┘              │
│       │               │               │                     │
│       ▼               ▼               ▼                     │
│   SPEC 문서       코드 구현       문서화/PR                  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Phase 1: Plan (계획)

**목적:** 요구사항 분석 및 SPEC 문서 생성

**에이전트 체인:**
1. `manager-spec` → 요구사항 분석
2. `manager-strategy` → 시스템 설계

**완료 조건:**
- SPEC 문서 생성 완료
- LSP 베이스라인 기록

### Phase 2: Run (실행)

**목적:** 코드 구현 및 테스트

**에이전트 체인:**
1. `manager-ddd` 또는 `manager-tdd` → 개발 방법론 적용
2. `expert-backend` → 백엔드 구현
3. `expert-frontend` → 프론트엔드 구현
4. `expert-testing` → 테스트 작성

**완료 조건:**
- 모든 테스트 통과
- LSP 에러 0개
- 타입 에러 0개
- 커버리지 목표 달성

### Phase 3: Sync (동기화)

**목적:** 문서화 및 PR 생성

**에이전트 체인:**
1. `manager-docs` → 문서 생성
2. `manager-quality` → 품질 검증
3. `manager-git` → PR 생성

**완료 조건:**
- 문서 생성 완료
- LSP 클린 상태
- 품질 게이트 통과

---

## 5. 에이전트 시스템

### 에이전트 선택 결정 트리

```
1. 읽기 전용 탐색? → Explore 서브에이전트
2. 외부 문서/API 조사? → WebSearch, WebFetch
3. 도메인 전문성 필요? → expert-[domain] 서브에이전트
4. 워크플로우 조정 필요? → manager-[workflow] 서브에이전트
5. 복잡한 다단계 작업? → manager-strategy 서브에이전트
```

### Manager 에이전트 (8개)

| 에이전트 | 역할 |
|----------|------|
| `manager-spec` | SPEC 문서 생성, EARS 형식, 요구사항 분석 |
| `manager-ddd` | Domain-Driven Development, ANALYZE-PRESERVE-IMPROVE |
| `manager-tdd` | Test-Driven Development, RED-GREEN-REFACTOR |
| `manager-docs` | 문서 생성, Nextra 통합 |
| `manager-quality` | 품질 게이트, TRUST 5 검증, 코드 리뷰 |
| `manager-project` | 프로젝트 설정, 구조 관리 |
| `manager-strategy` | 시스템 설계, 아키텍처 결정 |
| `manager-git` | Git 작업, 브랜칭 전략, 머지 관리 |

### Expert 에이전트 (8개)

| 에이전트 | 역할 |
|----------|------|
| `expert-backend` | API 개발, 서버 로직, 데이터베이스 통합 |
| `expert-frontend` | React 컴포넌트, UI 구현, 클라이언트 코드 |
| `expert-security` | 보안 분석, 취약점 평가, OWASP 준수 |
| `expert-devops` | CI/CD 파이프라인, 인프라, 배포 자동화 |
| `expert-performance` | 성능 최적화, 프로파일링 |
| `expert-debug` | 디버깅, 오류 분석, 문제 해결 |
| `expert-testing` | 테스트 작성, 테스트 전략, 커버리지 개선 |
| `expert-refactoring` | 코드 리팩토링, 아키텍처 개선 |

### Builder 에이전트 (4개)

| 에이전트 | 역할 |
|----------|------|
| `builder-agent` | 새 에이전트 정의 생성 |
| `builder-command` | 새 슬래시 명령어 생성 |
| `builder-skill` | 새 스킬 생성 |
| `builder-plugin` | 새 플러그인 생성 |

### Team 에이전트 (8개) - 실험적

Agent Teams 모드에서 사용 (Claude Code v2.1.32+):

| 에이전트 | 모델 | 단계 | 역할 |
|----------|------|------|------|
| `team-researcher` | haiku | plan | 읽기 전용 탐색 |
| `team-analyst` | sonnet | plan | 요구사항 분석 |
| `team-architect` | sonnet | plan | 시스템 설계 |
| `team-designer` | sonnet | run | UI/UX 디자인 |
| `team-backend-dev` | sonnet | run | 서버 구현 |
| `team-frontend-dev` | sonnet | run | 클라이언트 구현 |
| `team-tester` | sonnet | run | 테스트 작성 |
| `team-quality` | sonnet | run | TRUST 5 검증 |

---

## 6. 개발 방법론

### 자동 방법론 선택

MoAI는 프로젝트 상태에 따라 최적의 개발 방법론을 자동 선택합니다.

| 프로젝트 상태 | 적용 방법론 | 설명 |
|--------------|------------|------|
| 신규 프로젝트 | **Hybrid** | TDD + DDD 혼합 |
| 테스트 커버리지 ≥50% | **Hybrid** | 새 코드 TDD, 기존 코드 DDD |
| 테스트 커버리지 <50% | **DDD** | ANALYZE-PRESERVE-IMPROVE |

### DDD (Domain-Driven Development)

기존 코드베이스를 안전하게 수정할 때 사용합니다.

**ANALYZE → PRESERVE → IMPROVE 사이클:**

```
┌─────────────┐
│   ANALYZE   │  기존 동작 분석
└──────┬──────┘
       ▼
┌─────────────┐
│  PRESERVE   │  동작 보존 테스트 작성
└──────┬──────┘
       ▼
┌─────────────┐
│   IMPROVE   │  안전하게 개선
└─────────────┘
```

**설정 (`.moai/config/sections/quality.yaml`):**
```yaml
ddd_settings:
  require_existing_tests: true
  characterization_tests: true
  behavior_snapshots: true
  max_transformation_size: small
  preserve_before_improve: true
```

### TDD (Test-Driven Development)

새 기능을 처음부터 구현할 때 사용합니다.

**RED → GREEN → REFACTOR 사이클:**

```
┌─────────────┐
│     RED     │  실패하는 테스트 작성
└──────┬──────┘
       ▼
┌─────────────┐
│    GREEN    │  테스트 통과하는 최소 코드
└──────┬──────┘
       ▼
┌─────────────┐
│  REFACTOR   │  코드 개선
└─────────────┘
```

**설정:**
```yaml
tdd_settings:
  red_green_refactor: true
  test_first_required: true
  min_coverage_per_commit: 80
```

### Hybrid (혼합)

대부분의 프로젝트에 권장되는 방법론입니다.

**설정:**
```yaml
hybrid_settings:
  new_features: tdd        # 새 기능은 TDD
  legacy_refactoring: ddd  # 레거시는 DDD
  min_coverage_new: 85
  min_coverage_legacy: 85
  preserve_refactoring: true
```

---

## 7. 품질 프레임워크 (TRUST 5)

모든 코드 변경은 5가지 품질 기준을 충족해야 합니다.

### TRUST 5 기준

| 기준 | 내용 | 검증 방법 |
|------|------|----------|
| **T**ested | 테스트 완료 | 85%+ 커버리지, 모든 테스트 통과 |
| **R**eadable | 가독성 | 네이밍 규칙, 린트 에러 0개 |
| **U**nified | 일관성 | 포맷팅, import 정렬, 구조 준수 |
| **S**ecured | 보안 | OWASP 준수, 입력 검증, 보안 경고 0개 |
| **T**rackable | 추적 가능 | Conventional Commits, 이슈 참조 |

### LSP 품질 게이트

각 단계별 품질 요구사항:

**Plan 단계:**
- LSP 베이스라인 기록

**Run 단계:**
- 에러 0개
- 타입 에러 0개
- 린트 에러 0개
- 베이스라인 대비 회귀 불허

**Sync 단계:**
- 에러 0개
- 경고 최대 10개
- 클린 LSP 상태 필수

### 품질 설정

`.moai/config/sections/quality.yaml`:

```yaml
constitution:
  development_mode: "hybrid"
  enforce_quality: true
  test_coverage_target: 85

lsp_quality_gates:
  enabled: true
  run:
    max_errors: 0
    max_type_errors: 0
    max_lint_errors: 0
    allow_regression: false
```

---

## 8. 설정 파일

### 디렉토리 구조

```
.moai/
├── config/
│   ├── config.yaml           # 메인 설정
│   └── sections/
│       ├── git-strategy.yaml # Git 전략
│       ├── language.yaml     # 언어 설정
│       ├── llm.yaml          # LLM 설정
│       ├── pricing.yaml      # 가격 정책
│       ├── project.yaml      # 프로젝트 정보
│       ├── quality.yaml      # 품질 설정
│       ├── ralph.yaml        # Ralph 엔진 설정
│       ├── system.yaml       # 시스템 설정
│       ├── user.yaml         # 사용자 설정
│       └── workflow.yaml     # 워크플로우 설정
├── logs/                      # 로그 파일
├── memory/                    # 컨텍스트 메모리
├── reports/                   # 품질 보고서
├── specs/                     # SPEC 문서
└── manifest.json             # 프로젝트 매니페스트
```

### 주요 설정 파일

#### `config.yaml` - 메인 설정

```yaml
moai:
  initialized: true
  version: "2.0.1"

project:
  name: "my-project"
  mode: personal  # personal, team, enterprise
```

#### `workflow.yaml` - 워크플로우 설정

```yaml
workflow:
  auto_clear: true        # 단계 간 자동 클리어
  plan_tokens: 30000      # Plan 단계 토큰 예산
  run_tokens: 180000      # Run 단계 토큰 예산
  sync_tokens: 40000      # Sync 단계 토큰 예산

execution_mode:
  interactive:
    user_approval_required: true
  autonomous:
    continuous_loop: true
    completion_marker_based: true

loop_prevention:
  max_iterations: 100
  no_progress_threshold: 5
```

#### `user.yaml` - 사용자 설정

```yaml
user:
  name: "your-name"
```

#### `project.yaml` - 프로젝트 설정

```yaml
project:
  name: "my-project"
  description: "프로젝트 설명"
  type: "web"  # web, api, library, cli, mobile

github:
  profile_name: "your-github-username"
```

---

## 9. 고급 기능

### 9.1 Git Worktree 관리

병렬 작업을 위한 Git Worktree 지원:

```bash
# 새 작업 트리 생성
moai worktree new feature-auth

# 활성 worktree 목록
moai worktree list

# worktree 전환
moai worktree switch feature-auth

# 상위 브랜치와 동기화
moai worktree sync

# worktree 삭제
moai worktree remove feature-auth
```

### 9.2 시스템 관리

```bash
# 시스템 상태 진단
moai doctor

# 프로젝트 상태 확인
moai status

# 최신 버전 업데이트
moai update

# 업데이트 확인만
moai update --check
```

### 9.3 UltraThink 모드

복잡한 문제에 대한 심층 분석:

```bash
# UltraThink 활성화
"인증 시스템 구현 --ultrathink"
```

**활성화 조건:**
- 3+ 파일에 영향을 주는 아키텍처 결정
- 여러 옵션 간 기술 선택
- 성능 vs 유지보수성 트레이드오프
- Breaking Changes 고려

### 9.4 Agent Teams 모드 (실험적)

병렬 팀 협업을 위한 Agent Teams:

**활성화 조건:**
- Claude Code v2.1.32+
- `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 환경 변수
- `.moai/config/sections/workflow.yaml`에서 `team.enabled: true`

**자동 선택 기준:**
- 도메인 수 ≥ 3
- 영향받는 파일 ≥ 10
- 복잡도 점수 ≥ 7

### 9.5 Progressive Disclosure

토큰 효율성을 위한 3단계 시스템:

| 레벨 | 크기 | 로딩 시점 |
|------|------|----------|
| Level 1 | ~100 토큰 | 항상 로드 (메타데이터) |
| Level 2 | ~5K 토큰 | 트리거 매칭 시 로드 |
| Level 3 | 가변 | 필요 시 온디맨드 로드 |

**효과:** 초기 토큰 로드 67% 감소

---

## 10. 문제 해결

### 일반적인 오류

#### 에이전트 실행 오류

```bash
# expert-debug 서브에이전트 사용
"디버그 에이전트로 오류 분석"
```

#### 토큰 한도 오류

```bash
# 컨텍스트 클리어 후 재개
/clear
# 그 다음 작업 재개 안내
```

#### 권한 오류

`settings.json` 수동 검토 필요

#### 통합 오류

```bash
# expert-devops 서브에이전트 사용
"DevOps 에이전트로 통합 문제 해결"
```

#### MoAI-ADK 자체 오류

```bash
/moai feedback
```

### 에이전트 재개

중단된 에이전트 작업 재개:

```bash
"에이전트 abc123 재개하고 보안 분석 계속"
```

### Safe Development Protocol

코드 품질을 보장하는 4가지 HARD 규칙:

1. **Approach-First Development**
   - 코드 작성 전 접근 방식 설명
   - 수정할 파일과 이유 설명
   - 사용자 승인 후 진행

2. **Multi-File Change Decomposition**
   - 3개 이상 파일 수정 시 작업 분할
   - 논리적 단위로 실행
   - 각 단위 완료 후 진행 보고

3. **Post-Implementation Review**
   - 잠재적 이슈 목록
   - 제안 테스트 케이스
   - 알려진 제한사항

4. **Reproduction-First Bug Fixing**
   - 버그 재현 테스트 먼저 작성
   - 테스트 실패 확인
   - 최소 코드로 수정
   - 테스트 통과 확인

---

## 부록: 명령어 빠른 참조

```bash
# 설치 및 초기화
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
moai init my-project

# 핵심 워크플로우
/moai project              # 프로젝트 분석
/moai plan "기능 설명"      # SPEC 생성
/moai run SPEC-XXX         # 구현
/moai sync SPEC-XXX        # 동기화/PR

# 유틸리티
/moai fix                  # 자동 수정
/moai loop                 # 반복 수정
/moai feedback             # 피드백 제출

# 시스템
moai doctor                # 진단
moai status                # 상태
moai update                # 업데이트

# Git Worktree
moai worktree new <name>
moai worktree list
moai worktree switch <name>
moai worktree sync
moai worktree remove <name>
```

---

**버전:** 2.0.1
**최종 업데이트:** 2026-02-07
**참고:** https://github.com/modu-ai/moai-adk
