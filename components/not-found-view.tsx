"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { COPY } from "@/lib/content";
import type { Lang } from "@/lib/lang";

/* 404. Layout family: the hero's bordered anchor card, alone on the page.
   No header and no dock: every nav target is an in-page anchor that does not
   exist here, so a nav bar would render five links that go nowhere. The one
   way out is the card's own CTA.
   No language toggle either. The choice is already stored, so a reader who
   picked EN lands in EN; one who arrives here first has never been offered
   the toggle anyway, and the page they are being sent to carries it. */
export function NotFoundView({ lang }: { lang: Lang }) {
  const t = COPY[lang];

  return (
    <main className="min-h-[100dvh] w-full flex items-center px-4 md:px-8 py-16">
      <div className="w-full max-w-[720px] mx-auto bg-white neo-border md:border-[3px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_var(--color-primary)] p-5 md:p-12">
        {/* The numeral carries the same italic-underline treatment the surname
            gets in the hero: it is the one word on the page. */}
        <p className="font-display text-[72px] md:text-[112px] font-extrabold leading-none tracking-tight text-primary italic underline decoration-primary decoration-[5px] md:decoration-[7px] underline-offset-[10px] md:underline-offset-[14px]">
          404
        </p>

        <h1 className="mt-7 md:mt-10 font-display text-[22px] md:text-4xl uppercase font-extrabold tracking-tight text-black">
          {t.notFound.title}
        </h1>
        <p className="mt-3 md:mt-4 font-body text-[14px] md:text-lg text-black/85 leading-relaxed max-w-[52ch]">
          {t.notFound.body}
        </p>

        <div className="mt-7 md:mt-8 pt-6 md:pt-8 border-t-[2.5px] border-black flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2.5 md:gap-3">
          <Link
            className="btn-mechanical h-11 md:h-auto flex items-center justify-center gap-2 md:py-3.5 px-6 bg-primary text-white font-display text-[13px] md:text-lg uppercase tracking-wider font-bold border-[2.5px] border-black hover:bg-primary-hover [box-shadow:4px_4px_0px_var(--color-primary)] whitespace-nowrap"
            href="/"
          >
            {t.notFound.home} <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
          <Link
            className="btn-mechanical h-11 md:h-auto flex items-center justify-center md:py-3.5 px-6 bg-white border-[2px] border-black font-code text-[11px] md:text-xs uppercase tracking-wider text-black font-bold hover:bg-slate-100 [box-shadow:3px_3px_0px_var(--color-primary)] whitespace-nowrap"
            href="/#work"
          >
            {t.cta.work}
          </Link>
        </div>
      </div>
    </main>
  );
}
