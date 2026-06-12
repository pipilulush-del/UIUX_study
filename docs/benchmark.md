# 벤치마크 리서치 — AIRadar

> Vibe UX · benchmark-research 산출물
> 조사일: 2026-06-12
> 기반: docs/idea.md

## 한 줄 요약
AI 뉴스 큐레이션 시장은 이메일 뉴스레터가 장악하고 있으며, **YouTube·커뮤니티를 함께 집계해 인기도 기반으로 랭킹하는 웹 페이지 형태의 서비스**는 아직 빈자리다.

---

## 경쟁·참고 서비스 한눈에 보기

### 직접 경쟁 (Direct)

| # | 서비스 | URL | 한 줄 포지셔닝 | 타깃 | 가격 |
|---|--------|-----|--------------|------|------|
| 1 | The Rundown AI | [therundown.ai](https://www.therundown.ai/) | 매일 5분, AI 뉴스 + 실전 활용법을 이메일로 | 비기술·실무 직장인, AI 입문자 | 무료 (Rundown University: ~$84/월) |
| 2 | TLDR AI | [tldr.tech/ai](https://tldr.tech/ai) | 개발자·연구자를 위한 기술 중심 AI 데일리 이메일 | 개발자, ML 엔지니어 | 무료 |
| 3 | AI Trends KR | [aitrends.kr](https://aitrends.kr/) | 글로벌 AI/ML 뉴스를 한국어로 매일 요약 | 한국어 사용자, AI 관심 직장인 | 무료 (후원 옵션) |
| 4 | Particle | [particle.news](https://particle.news/) | 같은 사건을 여러 소스로 묶어 AI 요약 — 빠른 따라잡기 | 뉴스 소비 효율을 원하는 일반 독자 | 무료 / Particle+ $2.99/월 |

### 간접 경쟁·대체재 / 참고 레퍼런스

| # | 서비스 | URL | 왜 참고하는가 | 겹치는 지점 |
|---|--------|-----|--------------|------------|
| 1 | Hacker News | [news.ycombinator.com](https://news.ycombinator.com/) | 커뮤니티 투표 기반 랭킹 — 사용자가 현재 실제로 쓰는 대안 | 커뮤니티 인기도 집계 |
| 2 | 하비스페이스 | [hobbyspace.org](https://bbs.hobbyspace.org/) | 한국 커뮤니티 60~70곳 인기글 + AI 요약 — 국내 유사 모델 | 다중 소스 집계·AI 요약 |
| 3 | Readless | [readless.app](https://www.readless.app/) | 여러 뉴스레터·RSS를 중복 제거해 하나의 다이제스트로 — 집계 UX 참고 | 다중 소스 dedup + 요약 |
| 4 | YouTube (직접 탐색) | [youtube.com](https://www.youtube.com/) | 현재 사용자가 AI 영상 정보를 얻는 실제 경로 | 사용자가 대체로 쓰는 방법 |

---

## 핵심 기능 비교

AIRadar의 핵심 기능 5개를 기준으로 경쟁사 대응 여부를 비교한다.

| 기능/측면 | The Rundown AI | TLDR AI | AI Trends KR | Particle |
|----------|---------------|---------|-------------|---------|
| **다중 소스 자동 수집** (뉴스+커뮤니티+YouTube) | 뉴스 위주, 에디터 큐레이션 | 뉴스+연구 논문, 에디터 선별 | 뉴스·Hacker News·Reddit (YouTube 없음) | 뉴스 사이트 중심 |
| **YouTube 포함** | ✗ | ✗ | ✗ | ✗ |
| **인기도(조회수·좋아요) 기반 자동 랭킹** | ✗ (에디터 판단) | ✗ (에디터 판단) | ✗ (에디터 판단) | ✗ (AI 스토리 그룹핑) |
| **AI 자동 요약** | ✓ (1~2문단) | ✓ (1~2줄) | ✓ (한국어 요약) | ✓ (멀티소스 통합 요약) |
| **주제별 분류·필터** | 카테고리 있음 | 3개 섹션 고정 | 태그 + 엔티티 분류 | 주제 채널 있음 |
| **웹 페이지로 매일 아카이브** | ✓ (아티클 아카이브) | ✗ (이메일 전용) | ✓ | ✗ (앱 전용) |
| **배포 채널** | 이메일 (웹 병행) | 이메일 | 웹 | 모바일 앱 |
| **한국어 지원** | ✗ | ✗ | ✓ | ✗ |

---

## 관찰 — 잘하는 점 / 아쉬운 점

- **The Rundown AI**: 잘하는 점 — "왜 중요한지 + 어떻게 쓰는지"를 함께 설명하는 실용 콘텐츠, 2M 구독자의 강력한 소셜 증거 / 아쉬운 점 — 완전히 이메일 의존, 브라우징·탐색 UX 없음, YouTube·커뮤니티 소스 없음
- **TLDR AI**: 잘하는 점 — 개발자 친화적 정보 밀도, 1.25M 구독자, 15개 이상 기술 분야로 확장한 플랫폼 네트워크 / 아쉬운 점 — 이메일 전용, 웹 탐색 불가, 영어 한정
- **AI Trends KR**: 잘하는 점 — 한국어 요약이라는 명확한 포지셔닝, 매일 업데이트, 태그·엔티티 분류 / 아쉬운 점 — YouTube 소스 없음, 인기도 기반 랭킹 없음, UI 완성도가 낮은 편, 커뮤니티 기능 없음
- **Particle**: 잘하는 점 — 같은 사건 멀티소스 묶기·AI 요약이 깔끔, 앱 UX 완성도 높음 / 아쉬운 점 — AI 도메인 특화 아님, 모바일 앱 전용(데스크톱·아이패드 탐색에 비적합), YouTube 없음
- **하비스페이스**: 잘하는 점 — 한국 커뮤니티 다중 소스 집계 모델을 실증, AI 요약 도입 / 아쉬운 점 — AI 도메인 특화 없음, 유튜브 없음, 전반적으로 버라이어티 정보(코인·웹툰 등)에 포커스

---

## 참고 이미지

| 파일 | 무엇인지 | 출처 |
|------|----------|------|
| [images/01.png](images/01.png) | The Rundown AI 홈 화면 — 이메일 구독 CTA 중심의 랜딩, 일러스트 이미지 배치 | [navifyai.com](https://navifyai.com/ai-tools/the-rundown-ai) |

> 나머지 서비스(TLDR AI, AI Trends KR, Particle)는 직접 이미지 URL을 추출하지 못해 수집하지 못했다. 심화 리서치(Playwright 브라우저 캡처)로 보강 가능.

---

## 우리의 차별 프레이밍

- **빈틈/기회:**
  - 모든 직접 경쟁사가 **이메일 또는 앱** 채널에 머물러 있다. 매일 열어보는 **웹 페이지** 형태의 AI 큐레이션 보드는 없다.
  - **YouTube를 소스로 포함하는** AI 큐레이션 서비스가 존재하지 않는다. 실제로 AI 정보를 유튜브에서 많이 소비하는 사용자들의 needs가 충족되지 않고 있다.
  - 에디터 큐레이션이 아니라 **조회수·좋아요 기반 자동 랭킹**을 쓰는 곳도 없다. 알고리즘 신뢰도와 편집 편향 없는 투명한 랭킹이 가능하다.
  - 한국어 시장에서 **YouTube + 뉴스 + 커뮤니티를 아우르는** AI 특화 큐레이션은 공백이다.

- **우리의 자리 (포지셔닝):**
  > "AI를 깊게 파는 사람이 매일 아침 열어보는 웹 보드 — YouTube·뉴스·커뮤니티를 한 화면에서 인기도 순으로."

- **차별 포인트:**
  1. **YouTube 포함 멀티소스** — 뉴스·커뮤니티에 국한된 경쟁사와 달리 유튜브 핫 영상을 함께 집계해 영상 소비층을 포용
  2. **인기도 기반 자동 랭킹** — 에디터 주관 없이 조회수·좋아요로 투명하게 선별, "지금 가장 핫한 것"을 신뢰할 수 있게 보여줌

---

## 출처

- [The Rundown AI](https://www.therundown.ai/)
- [The Rundown AI Review — AI Tools Cafe](https://www.aitoolscafe.com/tool/the-rundown-ai)
- [TLDR AI Newsletter](https://tldr.tech/ai)
- [TLDR Newsletter Review 2026 — Readless](https://www.readless.app/blog/tldr-newsletter-review-2026)
- [AI Trends KR](https://aitrends.kr/)
- [하비스페이스 소개 — Medium](https://medium.com/@codej99/60%EA%B0%9C-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EC%9D%B8%EA%B8%B0%EA%B8%80-ai-%EC%9A%94%EC%95%BD-%EC%9D%B8%EA%B8%B0%EA%B8%80-%ED%81%90%EB%A0%88%EC%9D%B4%EC%85%98-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%86%8C%EA%B0%9C-%ED%95%98%EB%B9%84%EC%8A%A4%ED%8E%98%EC%9D%B4%EC%8A%A4-0fc8280c7ea4)
- [Best AI News Aggregators 2026 — Readless](https://www.readless.app/blog/best-ai-news-aggregators-2026)
- [Best AI Newsletters 2026 — Readless](https://www.readless.app/blog/best-ai-newsletters-to-subscribe)
- [The Rundown AI on NavifyAI](https://navifyai.com/ai-tools/the-rundown-ai)
