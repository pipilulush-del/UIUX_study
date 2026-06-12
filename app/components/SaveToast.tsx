"use client";

import Link from "next/link";

type Props = {
  visible: boolean;
};

export default function SaveToast({ visible }: Props) {
  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-150 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-4 bg-[#26292f] border border-white/20 px-5 py-3">
        <span className="text-sm text-white">저장됐어요</span>
        <Link
          href="/saved"
          className="text-sm text-white/60 hover:text-white transition-colors duration-150"
        >
          내 목록 보기 →
        </Link>
      </div>
    </div>
  );
}
