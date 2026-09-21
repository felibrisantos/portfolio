import { ogAlt, OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/components/og-card";

/* One card per language: it is the preview a reader sees before the page,
   so it answers in the language of the URL that was shared. */
export const alt = ogAlt("en");
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OgImage() {
  return renderOgCard("en");
}
