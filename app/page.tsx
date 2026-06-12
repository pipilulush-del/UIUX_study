"use client";

import { useState, useEffect } from "react";
import FilterTabs from "./components/FilterTabs";
import RankingCard from "./components/RankingCard";
import SkeletonCard from "./components/SkeletonCard";
import { DUMMY_ITEMS } from "./data/dummy";
import type { TopicFilter, SourceFilter } from "./data/dummy";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("all");
  const [selectedSource, setSelectedSource] = useState<SourceFilter>("all");
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = DUMMY_ITEMS.filter((item) => {
    const topicMatch = selectedTopic === "all" || item.topic === selectedTopic;
    const sourceMatch = selectedSource === "all" || item.source === selectedSource;
    return topicMatch && sourceMatch;
  });

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
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

      {/* Ranking feed */}
      <div className="max-w-[1200px] mx-auto">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
        ) : filteredItems.length === 0 ? (
          <div className="py-24 text-center">
            <p className="text-sm text-white/40">
              이 분야에서 오늘 올라온 콘텐츠가 없어요.
            </p>
            <button
              onClick={() => {
                setSelectedTopic("all");
                setSelectedSource("all");
              }}
              className="mt-4 text-sm text-white/30 hover:text-white/60 transition-colors duration-150 underline underline-offset-4"
            >
              필터 해제하기
            </button>
          </div>
        ) : (
          filteredItems.map((item) => (
            <RankingCard
              key={item.id}
              item={item}
              isSaved={savedIds.has(item.id)}
              onToggleSave={handleToggleSave}
            />
          ))
        )}
      </div>
    </div>
  );
}
