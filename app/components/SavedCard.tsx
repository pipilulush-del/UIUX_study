"use client";

import { BookmarkCheck, CirclePlay, Newspaper, MessageSquare } from "lucide-react";
import type { ContentItem } from "../data/dummy";

type Props = {
  item: ContentItem;
  savedAt: string;
  onRemove: (id: string) => void;
};

const SOURCE_ICONS = {
  youtube: CirclePlay,
  news: Newspaper,
  community: MessageSquare,
};

const SOURCE_LABELS = {
  youtube: "YouTube",
  news: "뉴스",
  community: "커뮤니티",
};

export default function SavedCard({ item, savedAt, onRemove }: Props) {
  const SourceIcon = SOURCE_ICONS[item.source];

  return (
    <div className="flex items-start gap-4 px-6 lg:px-12 py-5 border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-150">
      {/* Thumbnail — YouTube only */}
      {item.hasThumbnail && (
        <div className="hidden sm:flex w-[140px] h-20 shrink-0 bg-white/5 border border-white/10 items-center justify-center">
          <CirclePlay size={20} className="text-white/20" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[15px] leading-snug hover:text-white/50 transition-colors duration-150"
          >
            {item.title}
          </a>
          <button
            onClick={() => onRemove(item.id)}
            className="shrink-0 text-white hover:text-white/50 transition-colors duration-150 mt-0.5"
            aria-label="저장 해제"
            title="저장 해제"
          >
            <BookmarkCheck size={18} />
          </button>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-2 mt-2 text-xs text-white/50 flex-wrap">
          <span className="flex items-center gap-1">
            <SourceIcon size={11} />
            <span>{SOURCE_LABELS[item.source]}</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="font-mono text-[10px] border border-white/15 px-1.5 py-0.5 text-white/40">
            #{item.topic}
          </span>
          <span className="text-white/20">·</span>
          <span className="font-mono tabular-nums">저장일 {savedAt}</span>
        </div>

        {/* AI summary */}
        <p className="mt-2 text-sm text-white/60 leading-relaxed line-clamp-2">
          {item.summary}
        </p>
      </div>
    </div>
  );
}
