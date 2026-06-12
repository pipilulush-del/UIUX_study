"use client";

import { useState, useEffect, useRef } from "react";
import FilterTabs from "./components/FilterTabs";
import RankingCard from "./components/RankingCard";
import SkeletonCard from "./components/SkeletonCard";
import ActiveFilterChips from "./components/ActiveFilterChips";
import SaveToast from "./components/SaveToast";
import FeedState, { type FeedStateVariant } from "./components/FeedState";
import { DUMMY_ITEMS } from "./data/dummy";
import type { TopicFilter, SourceFilter, ContentItem } from "./data/dummy";
import { useSaved } from "./context/SavedContext";

// 리뷰용: ?demo=no-content | api-error | network 로 빈·오류 상태(S003)를 확인
const DEMO_VARIANTS: FeedStateVariant[] = ["no-content", "api-error", "network"];

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("all");
  const [selectedSource, setSelectedSource] = useState<SourceFilter>("all");
  const [toastVisible, setToastVisible] = useState(false);
  const [demoState, setDemoState] = useState<FeedStateVariant | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { isSaved, toggleSave } = useSaved();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  // 리뷰용 빈·오류 상태(S003) — URL ?demo= 파라미터에서 읽음
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("demo");
    if (param && (DEMO_VARIANTS as string[]).includes(param)) {
      setDemoState(param as FeedStateVariant);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const filteredItems = DUMMY_ITEMS.filter((item) => {
    const topicMatch = selectedTopic === "all" || item.topic === selectedTopic;
    const sourceMatch = selectedSource === "all" || item.source === selectedSource;
    return topicMatch && sourceMatch;
  });

  const handleToggleSave = (item: ContentItem) => {
    const willSave = !isSaved(item.id);
    toggleSave(item);
    if (willSave) {
      setToastVisible(true);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setToastVisible(false), 2000);
    }
  };

  const clearAllFilters = () => {
    setSelectedTopic("all");
    setSelectedSource("all");
  };

  return (
    <div>
      {/* Intro bar */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8 pb-6">
        <p className="text-sm text-white/50">
          YouTube · 뉴스 · 커뮤니티 AI 핫 콘텐츠 매일 자동 수집
        </p>
        <div className="mt-4 flex items-baseline gap-3 flex-wrap">
          <span className="text-sm text-white/40 tabular-nums">2026년 6월 12일 (목)</span>
          <span className="text-white/20">·</span>
          <h1 className="text-xl font-normal text-white">오늘의 AI 랭킹</h1>
        </div>
      </div>

      {/* Filter tabs */}
      <FilterTabs
        selectedTopic={selectedTopic}
        selectedSource={selectedSource}
        onTopicChange={setSelectedTopic}
        onSourceChange={setSelectedSource}
      />

      {/* Active filter chips */}
      <ActiveFilterChips
        selectedTopic={selectedTopic}
        selectedSource={selectedSource}
        onClearTopic={() => setSelectedTopic("all")}
        onClearSource={() => setSelectedSource("all")}
      />

      {/* Ranking feed */}
      <div className="max-w-[1200px] mx-auto">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
        ) : demoState ? (
          <FeedState variant={demoState} onRetry={() => setDemoState(null)} />
        ) : filteredItems.length === 0 ? (
          <FeedState variant="filter-empty" onClearFilter={clearAllFilters} />
        ) : (
          filteredItems.map((item) => (
            <RankingCard
              key={item.id}
              item={item}
              isSaved={isSaved(item.id)}
              onToggleSave={() => handleToggleSave(item)}
            />
          ))
        )}
      </div>

      <SaveToast visible={toastVisible} />
    </div>
  );
}
