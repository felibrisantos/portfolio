import { Analytics } from "@vercel/analytics/next";
import { MotionProvider } from "@/components/motion-provider";
import { SkipLink } from "@/components/skip-link";
import { HTML_LANG, type Lang } from "@/lib/lang";
import { fontClassNames } from "@/lib/fonts";
import { schemaGraph } from "@/lib/schema";

/**
 * The document itself, shared by both language roots.
 *
 * Each language is its own root layout, which is what lets the `lang`
 * attribute be right in the served markup rather than corrected by a script
 * after the fact. Everything that does not vary by language lives here so
 * the two roots stay two thin files.
 */
export function DocumentShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={HTML_LANG[lang]} className={`${fontClassNames} scroll-smooth`}>
      <body className="bg-grid-pattern font-body text-on-surface antialiased selection:bg-primary selection:text-white">
        <SkipLink lang={lang} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
        <MotionProvider>{children}</MotionProvider>
        {/* Page views per route. The two languages are two routes, so the
            route split is the language split. No cookie, no consent banner. */}
        <Analytics />
      </body>
    </html>
  );
}
