"use client";

import { useState, useEffect, useCallback } from "react";

export type Lang = "pt" | "en";

export function useLang() {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio.lang");
      if (stored === "en" || stored === "pt") setLangState(stored);
    } catch {}
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem("portfolio.lang", next);
    } catch {}
  }, []);

  const toggle = useCallback(
    () => setLang(lang === "pt" ? "en" : "pt"),
    [lang, setLang]
  );

  return { lang, setLang, toggle };
}
