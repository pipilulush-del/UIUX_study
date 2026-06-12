export default function SkeletonCard() {
  return (
    <div className="flex items-start gap-4 px-6 lg:px-12 py-5 border-b border-white/[0.08] animate-pulse">
      {/* Rank badge placeholder */}
      <div className="w-8 h-[22px] bg-white/5 border border-white/10 shrink-0 mt-0.5" />

      {/* Content */}
      <div className="flex-1 space-y-2.5">
        <div className="h-[15px] bg-white/5 w-3/4" />
        <div className="h-3 bg-white/[0.04] w-1/3" />
        <div className="space-y-1.5 mt-1">
          <div className="h-3 bg-white/[0.04] w-full" />
          <div className="h-3 bg-white/[0.04] w-4/5" />
        </div>
      </div>
    </div>
  );
}
