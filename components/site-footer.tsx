import { SITE } from "@/lib/content";

/* DESKTOP FOOTER. Server component: static markup, no motion, no lang. */
export function SiteFooter() {
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
        </div>
      </div>
    </footer>
  );
}
