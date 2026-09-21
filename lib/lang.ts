export type Lang = "pt" | "en";

/** The path each language is served at. English is the root. */
export const LANG_PATH: Record<Lang, string> = { en: "/", pt: "/pt" };

/** Value for the document's `lang` attribute. */
export const HTML_LANG: Record<Lang, string> = { en: "en", pt: "pt-BR" };

export const OTHER: Record<Lang, Lang> = { en: "pt", pt: "en" };

export const SITE_URL = "https://brigagao.dev";

/** Absolute URL of a language's route. */
export const langUrl = (lang: Lang) =>
  lang === "en" ? SITE_URL : `${SITE_URL}${LANG_PATH[lang]}`;

/**
 * Alternates for one route.
 *
 * The `languages` map is the same object for both routes on purpose: it is
 * what makes the declaration reciprocal by construction rather than by two
 * files agreeing with each other. `x-default` points at the root, which is
 * also the English route — a reader a crawler cannot place gets English,
 * for the same reason the root serves it.
 */
export const LANGUAGE_ALTERNATES = {
  en: LANG_PATH.en,
  "pt-BR": LANG_PATH.pt,
  "x-default": LANG_PATH.en,
} as const;

export function alternatesFor(lang: Lang) {
  return { canonical: LANG_PATH[lang], languages: LANGUAGE_ALTERNATES };
}
