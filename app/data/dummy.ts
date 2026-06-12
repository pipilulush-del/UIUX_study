export type ContentSource = "youtube" | "news" | "community";
export type ContentTopic = "LLM" | "로보틱스" | "AI 툴" | "연구·논문";

export type ContentItem = {
  id: string;
  rank: number;
  title: string;
  url: string;
  source: ContentSource;
  topic: ContentTopic;
  viewCount: string;
  summary: string;
  hasThumbnail?: boolean;
};

export type TopicFilter = "all" | ContentTopic;
export type SourceFilter = "all" | ContentSource;

export const DUMMY_ITEMS: ContentItem[] = [
  {
    id: "1",
    rank: 1,
    title: "GPT-5 Leaked: What We Know So Far",
    url: "#",
    source: "youtube",
    topic: "LLM",
    viewCount: "2.1M",
    summary:
      "GPT-5의 기능과 출시 일정이 내부 문서를 통해 처음 공개됐어요. 멀티모달과 추론 능력이 크게 개선될 것으로 보여요.",
    hasThumbnail: true,
  },
  {
    id: "2",
    rank: 2,
    title: "Anthropic, 새 Claude 모델 긴급 발표",
    url: "#",
    source: "news",
    topic: "LLM",
    viewCount: "850K",
    summary:
      "Claude 3.7이 예고 없이 공개됐어요. 벤치마크에서 이전 대비 30% 이상 향상된 수치를 보였어요.",
  },
  {
    id: "3",
    rank: 3,
    title: "Boston Dynamics 휴머노이드 신작 공개",
    url: "#",
    source: "community",
    topic: "로보틱스",
    viewCount: "42K",
    summary:
      "Reddit r/robotics 기준 72시간 내 최다 공유. Spot 후속작의 손재주가 영상에서 처음 공개됐어요.",
  },
  {
    id: "4",
    rank: 4,
    title: "Claude 3.7 vs GPT-4o 실전 코딩 테스트",
    url: "#",
    source: "youtube",
    topic: "LLM",
    viewCount: "1.2M",
    summary:
      "두 모델의 실제 프로덕션 코드 작성 성능을 직접 비교했어요. 복잡한 리팩터링에서 결과 차이가 명확했어요.",
    hasThumbnail: true,
  },
  {
    id: "5",
    rank: 5,
    title: "OpenAI, API 가격 정책 전면 개편",
    url: "#",
    source: "news",
    topic: "LLM",
    viewCount: "320K",
    summary:
      "GPT-5 출시와 함께 기존 모델 가격이 평균 40% 인하됐어요. 캐싱 정책도 함께 바뀌었어요.",
  },
  {
    id: "6",
    rank: 6,
    title: "Cursor 0.42 업데이트 기능 총정리",
    url: "#",
    source: "community",
    topic: "AI 툴",
    viewCount: "18K",
    summary:
      "Hacker News에서 1000개 이상 댓글이 달렸어요. Background Agent 기능이 특히 주목받고 있어요.",
  },
  {
    id: "7",
    rank: 7,
    title: "DeepMind, AlphaFold 3 전체 논문 공개",
    url: "#",
    source: "news",
    topic: "연구·논문",
    viewCount: "280K",
    summary:
      "Nature에 전문이 게재됐어요. 단백질 구조 예측 정확도가 기존 대비 45% 개선됐어요.",
  },
];
