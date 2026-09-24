"use client";

import { useSyncExternalStore } from "react";

export type JournalEntry = {
  prompt: string;
  digDeeper: string;
  finish: string;
  updatedAt?: string;
};

export type PracticeResult = { score: number; total: number; at: string };

export type BinderState = {
  name: string;
  notes: Record<string, string>;
  journal: Record<string, JournalEntry>;
  completed: string[];
  practice: Record<string, PracticeResult>;
};

const KEY = "leading-with-care-binder:v1";

const empty: BinderState = { name: "", notes: {}, journal: {}, completed: [], practice: {} };

let state: BinderState = empty;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...empty, ...JSON.parse(raw) };
  } catch {
    state = empty;
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable (private mode etc.) — keep working in memory */
  }
}

function subscribe(cb: () => void) {
  load();
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY) {
      loaded = false;
      load();
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  load();
  return state;
}

function getServerSnapshot() {
  return empty;
}

export function update(fn: (s: BinderState) => BinderState) {
  load();
  state = fn(state);
  persist();
  listeners.forEach((l) => l());
}

export function useBinder() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** true after hydration on the client */
export function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export const lessonKey = (sectionId: string, slug: string) => `${sectionId}/${slug}`;

export function setNote(key: string, value: string) {
  update((s) => ({ ...s, notes: { ...s.notes, [key]: value } }));
}

export function setJournal(key: string, field: keyof Omit<JournalEntry, "updatedAt">, value: string) {
  update((s) => {
    const prev = s.journal[key] ?? { prompt: "", digDeeper: "", finish: "" };
    return {
      ...s,
      journal: { ...s.journal, [key]: { ...prev, [field]: value, updatedAt: new Date().toISOString() } },
    };
  });
}

export function toggleComplete(key: string, done?: boolean) {
  update((s) => {
    const has = s.completed.includes(key);
    const next = done ?? !has;
    if (next === has) return s;
    return { ...s, completed: next ? [...s.completed, key] : s.completed.filter((k) => k !== key) };
  });
}

export function setPractice(key: string, result: PracticeResult) {
  update((s) => ({ ...s, practice: { ...s.practice, [key]: result } }));
}

export function setName(name: string) {
  update((s) => ({ ...s, name }));
}

export function wordCount(text: string | undefined) {
  return (text ?? "").trim().split(/\s+/).filter(Boolean).length;
}
