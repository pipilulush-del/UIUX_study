"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";
import SavedCard from "../components/SavedCard";
import { useSaved } from "../context/SavedContext";

export default function SavedPage() {
  const { savedEntries, toggleSave } = useSaved();
  const count = savedEntries.length;

  // 빈 상태 (S005)
  if (count === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8">
        <h1 className="text-xl font-normal text-white">내 저장 목록</h1>
        <div className="flex flex-col items-center text-center pt-[18vh] pb-24">
          <Bookmark size={32} className="text-white/30" strokeWidth={1.5} />
          <p className="mt-5 text-sm text-white">아직 저장된 콘텐츠가 없어요.</p>
          <p className="mt-1.5 text-sm text-white/50 inline-flex items-center gap-1 flex-wrap justify-center">
            관심 있는 콘텐츠의
            <Bookmark size={13} className="inline text-white/50" />를 탭하면 여기 모여요.
          </p>
          <Link
            href="/"
            className="mt-7 w-full sm:w-auto text-center bg-white text-[#1f2228] px-6 py-3 text-sm tracking-wide hover:bg-white/90 transition-colors duration-150"
          >
            오늘 랭킹 보러 가기
          </Link>
        </div>
      </div>
    );
  }

  // 콘텐츠 있는 상태 (S004)
  return (
    <div className="max-w-[1200px] mx-auto pt-8 pb-12">
      <div className="px-6 lg:px-12 flex items-baseline gap-2 mb-2">
        <h1 className="text-xl font-normal text-white">내 저장 목록</h1>
        <span className="text-white/20">·</span>
        <span className="font-mono text-sm text-white/50 tabular-nums">{count}개</span>
      </div>

      <div className="mt-4 border-t border-white/[0.08]">
        {savedEntries.map((entry) => (
          <SavedCard
            key={entry.item.id}
            item={entry.item}
            savedAt={entry.savedAt}
            onRemove={() => toggleSave(entry.item)}
          />
        ))}
      </div>
    </div>
  );
}
