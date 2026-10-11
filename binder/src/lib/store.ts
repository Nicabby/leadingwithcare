"use client";

import { useSyncExternalStore } from "react";

export type WorkEntry = {
  values: Record<string, string>;
  updatedAt?: string;
};

export type PracticeResult = { score: number; total: number; at: string };

export type BinderState = {
  name: string;
  notes: Record<string, string>;
  /** binder activity responses, keyed by worksheet id */
  work: Record<string, WorkEntry>;
  completed: string[];
  practice: Record<string, PracticeResult>;
  /** ISO date of the learner's last downloaded backup file */
  lastBackup?: string;
};

const KEY = "leading-with-care-binder:v1";

const empty: BinderState = { name: "", notes: {}, work: {}, completed: [], practice: {} };

let state: BinderState = empty;
let loaded = false;
const listeners = new Set<() => void>();

/** "ok" once a test write succeeds; "blocked" if the browser refuses to save. */
export type StorageStatus = "unknown" | "ok" | "blocked";
let storageStatus: StorageStatus = "unknown";

function setStorageStatus(next: StorageStatus) {
  if (storageStatus === next) return;
  storageStatus = next;
  listeners.forEach((l) => l());
}

function probeStorage() {
  try {
    const k = `${KEY}:probe`;
    window.localStorage.setItem(k, "1");
    window.localStorage.removeItem(k);
    storageStatus = "ok";
  } catch {
    storageStatus = "blocked";
  }
  // Ask supporting browsers not to clear this site's data under storage pressure.
  try {
    void navigator.storage?.persist?.();
  } catch {
    /* not supported */
  }
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  probeStorage();
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
    setStorageStatus("ok");
  } catch {
    /* storage unavailable (private mode, blocked, or full) — keep working in memory and warn */
    setStorageStatus("blocked");
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

export function setWork(worksheetId: string, fieldId: string, value: string) {
  update((s) => {
    const prev = s.work[worksheetId] ?? { values: {} };
    return {
      ...s,
      work: {
        ...s.work,
        [worksheetId]: { values: { ...prev.values, [fieldId]: value }, updatedAt: new Date().toISOString() },
      },
    };
  });
}

/** number of fields with any text in a worksheet entry */
export function filledCount(entry: WorkEntry | undefined) {
  return entry ? Object.values(entry.values).filter((v) => v.trim()).length : 0;
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

export function useStorageStatus() {
  return useSyncExternalStore(
    subscribe,
    () => {
      load();
      return storageStatus;
    },
    () => "unknown" as StorageStatus,
  );
}

/** true when the learner has written anything at all */
export function hasAnyWork(s: BinderState) {
  return (
    Object.values(s.work).some((e) => Object.values(e.values).some((v) => v.trim())) ||
    Object.values(s.notes).some((v) => v.trim())
  );
}

const BACKUP_FORMAT = "leading-with-care-binder-backup";

/** Build the backup file contents and record when it was taken. */
export function createBackup() {
  const at = new Date().toISOString();
  const payload = { format: BACKUP_FORMAT, version: 1, exportedAt: at, data: { ...state, lastBackup: at } };
  update((s) => ({ ...s, lastBackup: at }));
  return JSON.stringify(payload, null, 2);
}

export type RestoreSummary = { name: string; activities: number; notes: number; exportedAt?: string };

/** Validate a backup file; returns the parsed state or an error message. */
export function readBackup(text: string): { ok: true; data: BinderState; summary: RestoreSummary } | { ok: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, error: "That file isn’t a Leading with Care binder backup." };
  }
  const p = parsed as { format?: string; exportedAt?: string; data?: Partial<BinderState> };
  if (!p || p.format !== BACKUP_FORMAT || !p.data || typeof p.data !== "object") {
    return { ok: false, error: "That file isn’t a Leading with Care binder backup." };
  }
  const d = p.data;
  const obj = (v: unknown) => (v && typeof v === "object" && !Array.isArray(v) ? v : {});
  const data: BinderState = {
    name: typeof d.name === "string" ? d.name : "",
    notes: obj(d.notes) as BinderState["notes"],
    work: obj(d.work) as BinderState["work"],
    completed: Array.isArray(d.completed) ? d.completed.filter((x) => typeof x === "string") : [],
    practice: obj(d.practice) as BinderState["practice"],
    lastBackup: typeof d.lastBackup === "string" ? d.lastBackup : undefined,
  };
  const activities = Object.values(data.work).filter((e) => e && Object.values(e.values ?? {}).some((v) => String(v).trim())).length;
  const notes = Object.values(data.notes).filter((v) => String(v).trim()).length;
  return { ok: true, data, summary: { name: data.name, activities, notes, exportedAt: p.exportedAt } };
}

export function restoreBackup(data: BinderState) {
  update(() => ({ ...empty, ...data }));
}
