import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";
import { Research } from "@/components/research";
import { About } from "@/components/about";
import { StackSection } from "@/components/stack";
import { Contact } from "@/components/contact";
import { MainShell } from "@/components/main-shell";
import { SiteFooter } from "@/components/site-footer";
import type { Lang } from "@/lib/lang";

/* Server composition, shared by both language routes. Each section owns its
   own "use client" boundary; the footer and this file never ship. */
export function SitePage({ lang }: { lang: Lang }) {
  return (
    <>
      <SiteHeader lang={lang} />
      <MainShell>
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-2 md:py-10 space-y-14 md:space-y-24">
          <Hero lang={lang} />
          <Work lang={lang} />
          <Research lang={lang} />
          <About lang={lang} />
          <StackSection lang={lang} />
          <Contact lang={lang} />
        </div>
      </MainShell>
      <SiteFooter lang={lang} />
    </>
  );
}
