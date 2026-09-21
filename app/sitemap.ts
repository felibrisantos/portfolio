import type { MetadataRoute } from "next";
import { CONTENT_UPDATED } from "@/lib/content";
import { langUrl } from "@/lib/lang";

/* Both languages, each naming the other. `lastModified` is the date the copy
   changed, not the moment of the build: a sitemap that claims every page
   changed on every deploy is one a crawler learns to discount. */
export default function sitemap(): MetadataRoute.Sitemap {
  /* Built from the same helper as `loc`, so an alternate href is byte-for-byte
     the URL it points at. A trailing slash that only appears on one side is
     enough for a crawler to treat them as two pages. */
  const alternates = {
    languages: { en: langUrl("en"), "pt-BR": langUrl("pt") },
  };

  return (["en", "pt"] as const).map((lang) => ({
    url: langUrl(lang),
    lastModified: new Date(CONTENT_UPDATED),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates,
  }));
}
