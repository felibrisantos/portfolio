"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

export type Lang = "pt" | "en";

const KEY = "portfolio.lang";
const HTML_LANG: Record<Lang, string> = { pt: "pt-BR", en: "en" };

const listeners = new Set<() => void>();

/** Fallback when localStorage is unavailable (private mode, blocked storage). */
let memoryLang: Lang | null = null;

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Lang {
  if (memoryLang) return memoryLang;
  try {
    const stored = localStorage.getItem(KEY);
    if (stored === "en" || stored === "pt") return stored;
  } catch {}
  return "pt";
}

function getServerSnapshot(): Lang {
  return "pt";
}

function store(next: Lang) {
  memoryLang = next;
  try {
    localStorage.setItem(KEY, next);
  } catch {}
  listeners.forEach((listener) => listener());
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  const setLang = useCallback((next: Lang) => store(next), []);

  const toggle = useCallback(
    () => store(lang === "pt" ? "en" : "pt"),
    [lang]
  );

  return { lang, setLang, toggle };
}
