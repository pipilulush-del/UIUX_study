"use client";

import { createContext, useContext, useState, useCallback, useMemo } from "react";
import { DUMMY_ITEMS, type ContentItem } from "../data/dummy";

export type SavedEntry = {
  item: ContentItem;
  savedAt: string; // YYYY.MM.DD
};

const TODAY = "2026.06.12";

// 초기 시드: GPT-5(YouTube)·Anthropic(뉴스)·Cursor(커뮤니티), 저장일 다르게
const SEED: SavedEntry[] = [
  { item: DUMMY_ITEMS[0], savedAt: "2026.06.12" },
  { item: DUMMY_ITEMS[1], savedAt: "2026.06.11" },
  { item: DUMMY_ITEMS[5], savedAt: "2026.06.10" },
];

type SavedContextValue = {
  savedEntries: SavedEntry[];
  isSaved: (id: string) => boolean;
  toggleSave: (item: ContentItem) => void;
};

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedProvider({ children }: { children: React.ReactNode }) {
  const [entries, setEntries] = useState<SavedEntry[]>(SEED);

  const isSaved = useCallback(
    (id: string) => entries.some((e) => e.item.id === id),
    [entries],
  );

  const toggleSave = useCallback((item: ContentItem) => {
    setEntries((prev) => {
      if (prev.some((e) => e.item.id === item.id)) {
        return prev.filter((e) => e.item.id !== item.id);
      }
      return [{ item, savedAt: TODAY }, ...prev];
    });
  }, []);

  const savedEntries = useMemo(
    () => [...entries].sort((a, b) => b.savedAt.localeCompare(a.savedAt)),
    [entries],
  );

  const value = useMemo(
    () => ({ savedEntries, isSaved, toggleSave }),
    [savedEntries, isSaved, toggleSave],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSaved() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error("useSaved must be used within SavedProvider");
  return ctx;
}
