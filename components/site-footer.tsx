import { COPY, RESUME, SITE } from "@/lib/content";
import type { Lang } from "@/lib/lang";

/* DESKTOP FOOTER. Server component: static markup, no motion. The language
   comes from the route, so it can pick the right CV. */
export function SiteFooter({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <footer className="hidden md:flex w-full bg-white border-t-[2.5px] border-black [box-shadow:0px_-2px_0px_var(--color-primary)]">
      <div className="w-full max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between gap-4 font-code text-xs uppercase text-black/80">
        <span className="font-bold text-black">© {new Date().getFullYear()} Felipe Brigagão</span>
        <div className="flex flex-wrap items-center gap-4 font-bold">
          <span className="text-black">{SITE.location}</span>
          <span className="text-slate-400">/</span>
          <a className="text-primary hover:underline underline-offset-4" href={SITE.social.github} rel="noopener noreferrer" target="_blank">
            GitHub
          </a>
          <span className="text-slate-400">/</span>
          <a className="text-primary hover:underline underline-offset-4" href={SITE.social.linkedin} rel="noopener noreferrer" target="_blank">
            LinkedIn
          </a>
          <span className="text-slate-400">/</span>
          <a className="text-primary hover:underline underline-offset-4" href={`mailto:${SITE.email}`}>
            Email
          </a>
          <span className="text-slate-400">/</span>
          <a className="text-primary hover:underline underline-offset-4" href={RESUME[lang]} download>
            {t.cta.resume}
          </a>
        </div>
      </div>
    </footer>
  );
}
