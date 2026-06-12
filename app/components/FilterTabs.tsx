"use client";

import type { TopicFilter, SourceFilter } from "../data/dummy";

type Props = {
  selectedTopic: TopicFilter;
  selectedSource: SourceFilter;
  onTopicChange: (topic: TopicFilter) => void;
  onSourceChange: (source: SourceFilter) => void;
};

const TOPIC_TABS: { label: string; value: TopicFilter }[] = [
  { label: "전체", value: "all" },
  { label: "LLM", value: "LLM" },
  { label: "로보틱스", value: "로보틱스" },
  { label: "AI 툴", value: "AI 툴" },
  { label: "연구·논문", value: "연구·논문" },
];

const SOURCE_TABS: { label: string; value: SourceFilter }[] = [
  { label: "전체 소스", value: "all" },
  { label: "YouTube", value: "youtube" },
  { label: "뉴스", value: "news" },
  { label: "커뮤니티", value: "community" },
];

function Tab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-3 py-2.5 border-b-2 whitespace-nowrap transition-colors duration-150 ${
        active
          ? "text-white border-white"
          : "text-white/40 border-transparent hover:text-white/70"
      }`}
    >
      {label}
    </button>
  );
}

export default function FilterTabs({
  selectedTopic,
  selectedSource,
  onTopicChange,
  onSourceChange,
}: Props) {
  return (
    <div className="border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex gap-0.5 overflow-x-auto no-scrollbar">
        {TOPIC_TABS.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            active={selectedTopic === tab.value}
            onClick={() => onTopicChange(tab.value)}
          />
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex gap-0.5 overflow-x-auto no-scrollbar border-t border-white/5">
        {SOURCE_TABS.map((tab) => (
          <Tab
            key={tab.value}
            label={tab.label}
            active={selectedSource === tab.value}
            onClick={() => onSourceChange(tab.value)}
          />
        ))}
      </div>
    </div>
  );
}
