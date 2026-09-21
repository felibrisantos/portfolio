export type Lang = "pt" | "en";

/** The path each language is served at. English is the root. */
export const LANG_PATH: Record<Lang, string> = { en: "/", pt: "/pt" };

/** Value for the document's `lang` attribute. */
export const HTML_LANG: Record<Lang, string> = { en: "en", pt: "pt-BR" };

export const OTHER: Record<Lang, Lang> = { en: "pt", pt: "en" };
