import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function SavedPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-8 pb-12">
      <div className="flex items-baseline gap-2 mb-8">
        <h1 className="text-xl font-normal text-white">내 저장 목록</h1>
      </div>

      {/* S004/S005 stub — 스프린트에서 구현 예정 */}
      <div className="flex flex-col items-center py-24 gap-4">
        <Bookmark size={32} className="text-white/20" />
        <p className="text-sm text-white/40">
          저장 목록 화면은 S004/S005 스프린트에서 구현 예정이에요.
        </p>
        <Link
          href="/"
          className="mt-2 text-sm text-white/30 hover:text-white/60 transition-colors duration-150 underline underline-offset-4"
        >
          오늘 랭킹 보러 가기
        </Link>
      </div>
    </div>
  );
}
