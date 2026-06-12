"use client";

export type FeedStateVariant =
  | "filter-empty"
  | "no-content"
  | "api-error"
  | "network";

type Props = {
  variant: FeedStateVariant;
  onRetry?: () => void;
  onClearFilter?: () => void;
};

const MESSAGES: Record<FeedStateVariant, string> = {
  "filter-empty": "이 분야에서 오늘 올라온 콘텐츠가 없어요.",
  "no-content": "곧 오늘의 콘텐츠가 채워질 거예요.",
  "api-error": "수집 중 문제가 생겼어요. 잠시 후 다시 시도해주세요.",
  network: "네트워크 연결을 확인해주세요.",
};

export default function FeedState({ variant, onRetry, onClearFilter }: Props) {
  const message = MESSAGES[variant];
  const showRetry = variant === "api-error" || variant === "network";
  const showClear = variant === "filter-empty";

  return (
    <div className="py-24 px-6 text-center">
      <p className="text-sm text-white/40">{message}</p>
      {showRetry && onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 text-sm text-white/50 hover:text-white transition-colors duration-150 underline underline-offset-4"
        >
          다시 시도
        </button>
      )}
      {showClear && onClearFilter && (
        <button
          onClick={onClearFilter}
          className="mt-4 text-sm text-white/30 hover:text-white/60 transition-colors duration-150 underline underline-offset-4"
        >
          필터 해제하기
        </button>
      )}
    </div>
  );
}
