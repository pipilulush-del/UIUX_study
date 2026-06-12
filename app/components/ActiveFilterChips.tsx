"use client";

import { X } from "lucide-react";
import type { TopicFilter, SourceFilter } from "../data/dummy";

type Props = {
  selectedTopic: TopicFilter;
  selectedSource: SourceFilter;
  onClearTopic: () => void;
  onClearSource: () => void;
};

const SOURCE_CHIP_LABELS: Record<Exclude<SourceFilter, "all">, string> = {
  youtube: "YouTube",
  news: "뉴스",
  community: "커뮤니티",
};

function Chip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-white/20 pl-3 pr-1.5 py-1 text-sm text-white">
      {label}
      <button
        onClick={onClear}
        className="flex items-center justify-center w-6 h-6 -my-1 text-white/50 hover:text-white transition-colors duration-150"
        aria-label={`${label} 필터 해제`}
      >
        <X size={14} />
      </button>
    </span>
  );
}

export default function ActiveFilterChips({
  selectedTopic,
  selectedSource,
  onClearTopic,
  onClearSource,
}: Props) {
  const hasTopic = selectedTopic !== "all";
  const hasSource = selectedSource !== "all";

  if (!hasTopic && !hasSource) return null;

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 flex-wrap border-b border-white/10">
      <span className="text-xs text-white/40 mr-1">활성 필터</span>
      {hasTopic && <Chip label={selectedTopic} onClear={onClearTopic} />}
      {hasSource && (
        <Chip label={SOURCE_CHIP_LABELS[selectedSource]} onClear={onClearSource} />
      )}
    </div>
  );
}
