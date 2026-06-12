"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isSavedPage = pathname === "/saved";

  return (
    <header className="sticky top-0 z-50 bg-[#1f2228] border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-white hover:text-white/50 transition-colors duration-150 tracking-wide"
        >
          ContentsCollector
        </Link>
        <Link
          href="/saved"
          className={`text-sm transition-colors duration-150 ${
            isSavedPage
              ? "text-white"
              : "text-white/50 hover:text-white"
          }`}
        >
          내 저장 목록
        </Link>
      </div>
    </header>
  );
}
