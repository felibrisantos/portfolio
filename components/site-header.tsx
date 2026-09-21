"use client";

import { AtSign, FlaskConical, Layers, Terminal } from "lucide-react";
import { COPY } from "@/lib/content";
import { LANG_PATH, OTHER, type Lang } from "@/lib/lang";
import { ScrollRail, useActiveSection } from "@/components/scroll-fx";

const NAV_LINKS = ["work", "research", "about", "stack", "contact"] as const;

/* The hero is watched too, so that while it is on screen no nav item is lit
   rather than "work" being lit before the reader has reached it. */
const SPY_IDS = ["hero", ...NAV_LINKS] as const;

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const activeSection = useActiveSection(SPY_IDS);

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white border-b-[2.5px] border-black [box-shadow:0px_3px_0px_var(--color-primary)]">
        <div className="h-16 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <a
            className="font-display text-lg md:text-xl uppercase tracking-tight text-primary hover:text-primary-hover transition-colors font-bold"
            href="#top"
          >
            Felipe Brigagão
          </a>
          <div className="flex items-center gap-6">
            <nav aria-label={t.a11y.navPrimary} className="flex items-center gap-6">
              {NAV_LINKS.map((key) => (
                <a
                  key={key}
                  aria-current={activeSection === key ? "true" : undefined}
                  className={`font-code text-xs uppercase font-bold tracking-wider py-2.5 transition-all hover:translate-y-[-1px] ${
                    activeSection === key
                      ? "text-primary underline decoration-primary decoration-2 underline-offset-[7px]"
                      : "text-black hover:text-primary"
                  }`}
                  href={`#${key}`}
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
            <div className="flex items-center border-l-[2px] border-black pl-4 gap-2 font-code text-xs uppercase font-bold">
              {/* Links, not buttons: the language is the URL now, so the
                  control has to be something a reader can copy, open in a new
                  tab, or send to someone and have it arrive in that language. */}
              <a
                aria-current={lang === "pt" ? "true" : undefined}
                className={`px-1.5 py-2.5 ${lang === "pt" ? "text-primary" : "text-slate-600"} hover:text-black transition-colors`}
                href={LANG_PATH.pt}
                hrefLang="pt-BR"
              >
                PT
              </a>
              <span className="text-slate-400">/</span>
              <a
                aria-current={lang === "en" ? "true" : undefined}
                className={`px-1.5 py-2.5 ${lang === "en" ? "text-primary" : "text-slate-600"} hover:text-black transition-colors`}
                href={LANG_PATH.en}
                hrefLang="en"
              >
                EN
              </a>
            </div>
          </div>
        </div>
        {/* Progress rail. The header already casts a 3px blue line below itself,
            so the rail is black and reads as that line being consumed. */}
        <ScrollRail className="absolute left-0 -bottom-[3px] h-[3px] w-full bg-black" />
      </header>

      {/* MOBILE HEADER */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 pt-safe bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="h-12 px-3 flex items-center justify-between border-b border-black/10">
          <a className="font-display font-extrabold text-[14.5px] tracking-tight uppercase text-black" href="#top">
            FELIPE BRIGAGÃO
          </a>
          {/* No contact CTA here: the hero and the bottom dock already carry it. */}
          <a
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
            className="h-11 px-3.5 flex items-center bg-white neo-border-sm neo-shadow-dark-sm font-code text-[11px] font-bold text-black hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            href={LANG_PATH[OTHER[lang]]}
            hrefLang={OTHER[lang] === "pt" ? "pt-BR" : "en"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </a>
        </div>
        {/* No blue line under the mobile header, so here the rail is the blue. */}
        <ScrollRail className="absolute left-0 bottom-0 h-[2px] w-full bg-primary" />
      </header>

      {/* MOBILE BOTTOM DOCK */}
      <nav aria-label={t.a11y.navDock} className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-md border-t-2 border-black">
        <div className="h-14 max-w-[430px] mx-auto px-2 flex items-center justify-between gap-1.5">
          {([
            { key: "work", Icon: Terminal },
            { key: "research", Icon: FlaskConical },
            { key: "stack", Icon: Layers },
            { key: "contact", Icon: AtSign },
          ] as const).map(({ key, Icon }) => (
            <a
              key={key}
              aria-current={activeSection === key ? "true" : undefined}
              className={`flex-1 h-11 flex flex-col items-center justify-center gap-0.5 neo-border-sm border-black font-code text-[10.5px] font-bold uppercase active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ${
                activeSection === key
                  ? "bg-primary text-white neo-shadow-dark-sm"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
              href={`#${key}`}
            >
              <Icon size={16} strokeWidth={2.5} />
              <span className="tracking-tight">{t.nav[key]}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
