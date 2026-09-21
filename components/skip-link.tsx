"use client";

import { COPY } from "@/lib/content";
import type { Lang } from "@/lib/lang";

/**
 * First focusable element on the page, and it has to stay first: with two
 * fixed headers and a bottom dock, a keyboard reader otherwise tabs through
 * the wordmark, five section links and a language control before reaching a
 * word of content.
 *
 * Off screen until focused, then anchored top-left over everything.
 */
export function SkipLink({ lang }: { lang: Lang }) {

  return (
    <a
      href="#top"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:px-4 focus:py-2.5 focus:bg-primary focus:text-white focus:font-display focus:text-sm focus:uppercase focus:tracking-wider focus:font-bold focus:border-2 focus:border-ink focus:no-underline"
    >
      {COPY[lang].a11y.skip}
    </a>
  );
}
