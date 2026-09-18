"use client";

import { useLang } from "@/lib/use-lang";
import { COPY, PROJECTS, SITE, STACK, stackLabel } from "@/lib/content";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight, Terminal, FlaskConical, Layers, AtSign } from "lucide-react";

const CONTACT_LINKS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, external: false },
  { label: "LinkedIn", value: "/in/felibrisantos", href: SITE.social.linkedin, external: true },
  { label: "GitHub", value: "@felibrisantos", href: SITE.social.github, external: true },
];

const NAV_LINKS = ["work", "research", "about", "stack", "contact"] as const;

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[22px] md:text-4xl uppercase text-black tracking-tight font-extrabold border-b-[2.5px] border-black pb-3 md:pb-4">
      {children}
    </h2>
  );
}

export function Portfolio() {
  const { lang, toggle } = useLang();
  const t = COPY[lang];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.8 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white border-b-[2.5px] border-black [box-shadow:0px_3px_0px_#0038FF]">
        <div className="h-16 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <a
            className="font-display text-lg md:text-xl uppercase tracking-tight text-[#0038FF] hover:text-[#0028c2] transition-colors font-bold"
            href="#top"
          >
            Felipe Brigagão
          </a>
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((key) => (
                <a
                  key={key}
                  className="font-code text-xs uppercase font-bold text-black hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider"
                  href={`#${key}`}
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
            <div className="flex items-center border-l-[2px] border-black pl-4 gap-2 font-code text-xs uppercase font-bold">
              <button
                aria-pressed={lang === "pt"}
                className={`${lang === "pt" ? "text-[#0038FF]" : "text-slate-600"} hover:text-black transition-colors`}
                onClick={() => lang !== "pt" && toggle()}
                type="button"
              >
                PT
              </button>
              <span className="text-slate-400">/</span>
              <button
                aria-pressed={lang === "en"}
                className={`${lang === "en" ? "text-[#0038FF]" : "text-slate-600"} hover:text-black transition-colors`}
                onClick={() => lang !== "en" && toggle()}
                type="button"
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 pt-safe bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="h-12 px-3 flex items-center justify-between border-b border-black/10">
          <a className="font-display font-extrabold text-[14.5px] tracking-tight uppercase text-black" href="#top">
            FELIPE BRIGAGÃO
          </a>
          {/* No contact CTA here: the hero and the bottom dock already carry it. */}
          <button
            onClick={toggle}
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
            className="h-7 px-2.5 bg-white neo-border-sm neo-shadow-dark-sm font-code text-[11px] font-bold text-black hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            type="button"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>
      </header>

      {/* MOBILE BOTTOM DOCK */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-md border-t-2 border-black">
        <div className="h-14 max-w-[430px] mx-auto px-2 flex items-center justify-between gap-1.5">
          {([
            { key: "work", Icon: Terminal },
            { key: "research", Icon: FlaskConical },
            { key: "stack", Icon: Layers },
            { key: "contact", Icon: AtSign },
          ] as const).map(({ key, Icon }, i) => (
            <a
              key={key}
              className={`flex-1 h-10 flex flex-col items-center justify-center gap-0.5 neo-border-sm border-black font-code text-[10.5px] font-bold uppercase active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ${
                i === 0
                  ? "bg-[#0038FF] text-white neo-shadow-dark-sm"
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

      {/* MAIN WRAPPER */}
      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full pt-[68px] md:pt-24 pb-[80px] md:pb-12 min-h-[100dvh]"
        id="top"
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-2 md:py-10 space-y-14 md:space-y-24">

          {/* HERO. Layout family: bordered anchor card. */}
          <motion.section variants={sectionVariants} className="pt-2 md:pt-0">
            <div className="hidden md:block p-12 bg-white border-[3px] border-black [box-shadow:6px_6px_0px_#0038FF] transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="space-y-4">
                <h1 className="font-display text-6xl lg:text-7xl uppercase tracking-tight text-black font-extrabold leading-none break-words">
                  FELIPE{" "}
                  <span className="text-[#0038FF] italic underline decoration-[#0038FF] decoration-4 underline-offset-8 inline-block leading-[1.1] pb-1">
                    BRIGAGÃO
                  </span>
                </h1>
                <p className="font-display text-3xl text-[#0038FF] font-bold tracking-tight uppercase">
                  {t.role}
                </p>
                <p className="font-body text-lg text-black/85 leading-relaxed max-w-3xl pt-2">
                  {t.positioning}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-[2.5px] border-black flex flex-wrap items-center gap-3">
                <a
                  className="btn-mechanical flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0038FF] text-white font-display text-lg uppercase tracking-wider font-bold border-[2.5px] border-black hover:bg-[#0028c2] [box-shadow:4px_4px_0px_#0038FF] whitespace-nowrap"
                  href="#contact"
                >
                  {t.cta.contact} <ArrowRight size={18} strokeWidth={2.5} />
                </a>
                <a
                  className="btn-mechanical py-3.5 px-6 bg-white border-[2px] border-black font-code text-xs uppercase tracking-wider text-black font-bold hover:bg-slate-100 [box-shadow:3px_3px_0px_#0038FF] whitespace-nowrap"
                  href="#work"
                >
                  {t.cta.work}
                </a>
              </div>
            </div>

            <div className="md:hidden flex flex-col">
              <h1 className="font-display font-extrabold text-[36px] leading-[1.04] tracking-tight uppercase text-black mb-1.5">
                FELIPE <br />
                <span className="italic text-[#0038FF] font-black leading-[1.1] inline-block pb-1">BRIGAGÃO</span>
              </h1>
              <p className="font-display font-semibold text-[16.5px] tracking-tight text-black mb-3.5 uppercase">
                {t.role}
              </p>
              <p className="font-body text-[14px] leading-relaxed text-black/85 mb-4">
                {t.positioningShort}
              </p>

              <div className="flex flex-col gap-2.5 w-full">
                <a
                  className="w-full h-11 flex items-center justify-center gap-2 bg-[#0038FF] text-white font-code text-[12.5px] font-bold tracking-wider uppercase neo-border border-black neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  href="#contact"
                >
                  <span>{t.cta.contact}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                <a
                  className="w-full h-11 flex items-center justify-center gap-2 bg-white text-black font-code text-[12.5px] font-bold tracking-wider uppercase neo-border neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  href="#work"
                >
                  <span>{t.cta.work}</span>
                  <ArrowRight size={16} strokeWidth={2.5} className="rotate-90" />
                </a>
              </div>
            </div>
          </motion.section>

          {/* WORK. Layout family: asymmetric card grid, first entry featured. */}
          {/* TODO: one cropped screenshot per project (16:10). Needs cleared assets. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-5 md:space-y-8"
            id="work"
          >
            <motion.div variants={sectionVariants}>
              <SectionHead>{t.sections.featured}</SectionHead>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {PROJECTS.map((p, i) => {
                const featured = i === 0;
                return (
                  <motion.article
                    key={p.id}
                    variants={sectionVariants}
                    className={`card-mechanical bg-white neo-border md:border-[2.5px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] flex flex-col ${
                      featured ? "lg:col-span-2" : ""
                    }`}
                  >
                    <div className="border-b-2 border-black bg-slate-100 px-3 py-2 md:px-5 md:py-3 flex items-center justify-between gap-3 font-code text-[10.5px] md:text-xs uppercase">
                      <span className="px-2 py-0.5 bg-[#0038FF] text-white font-bold border border-black">
                        {p.tag[lang]}
                      </span>
                      <span className="text-black/70 font-bold shrink-0">{p.year}</span>
                    </div>

                    <div className="p-3.5 md:p-6 space-y-3.5 md:space-y-5 flex-1">
                      <h3 className="font-display text-[20px] md:text-3xl uppercase text-black font-extrabold leading-none tracking-tight">
                        {p.title[lang]}
                      </h3>

                      <div className="flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="font-code text-[10.5px] md:text-[11px] font-bold px-2 py-0.5 md:py-1 uppercase bg-slate-50 border-[1.5px] border-black text-black"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className={featured ? "space-y-3 lg:grid lg:grid-cols-2 lg:gap-8 lg:space-y-0" : "space-y-3"}>
                        <p className="font-body text-[13.5px] md:text-base text-black/85 leading-relaxed">
                          {p.problem[lang]}
                        </p>
                        <p className="font-body text-[13.5px] md:text-base text-black/85 leading-relaxed">
                          {p.decision[lang]}
                        </p>
                      </div>

                      {p.outcome && (
                        <p className="p-2.5 md:p-3.5 bg-slate-50 border-l-[4px] border-[#0038FF] font-code text-[12.5px] md:text-sm text-black font-semibold leading-snug">
                          {p.outcome[lang]}
                        </p>
                      )}
                    </div>

                    <div className="border-t-2 border-black px-3 py-2 md:px-5 md:py-3 bg-slate-100 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 font-code text-[10.5px] md:text-xs uppercase">
                      <span className="text-black font-extrabold">{p.client[lang]}</span>
                      <span className="text-black/70 font-bold">{p.role[lang]}</span>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* RESEARCH. Layout family: inverted block with display metrics.
              This is the page's single deliberate theme inversion. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="space-y-5 md:space-y-8"
            id="research"
          >
            <SectionHead>{t.researchHeading}</SectionHead>

            <div className="bg-[#0d0f14] text-white border-[2.5px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-10 space-y-5 md:space-y-8">
              <div className="flex flex-wrap items-center gap-1.5 md:gap-2 font-code text-[10.5px] md:text-xs uppercase font-bold">
                <span className="px-2.5 py-1 border border-white/35 text-white/80">ICMR, Vol. 05, № 03</span>
                <span className="px-2.5 py-1 border border-white/35 text-white/80">
                  {lang === "pt" ? "Dezembro / 2024" : "December / 2024"}
                </span>
                <span className="px-2.5 py-1 bg-[#0038FF] text-white border border-[#0038FF]">{t.paperKind}</span>
                <a
                  className="md:ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#5B8CFF] text-[#5B8CFF] hover:bg-[#5B8CFF] hover:text-[#0d0f14] transition-colors"
                  href="https://doi.org/10.54033/icmrv5n3-043"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  DOI: 10.54033/icmrv5n3-043
                  <ArrowUpRight size={13} strokeWidth={3} />
                </a>
              </div>

              <h3 className="font-display font-extrabold text-[18px] md:text-3xl uppercase leading-tight">
                {t.paperTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/20 border border-white/20">
                {t.paperMetrics.map((m) => (
                  <div key={m.label} className="bg-[#0d0f14] p-3.5 md:p-5">
                    <p className="font-display text-[32px] md:text-5xl font-extrabold text-[#5B8CFF] leading-none tracking-tight">
                      {m.value}
                    </p>
                    <p className="mt-2 font-code text-[10.5px] md:text-xs uppercase text-white/75 leading-snug">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <p className="font-body text-[13.5px] md:text-base text-white/85 leading-relaxed max-w-3xl">
                  {t.paperAbstract}
                </p>
                <p className="font-code text-[11px] md:text-sm text-white/65 leading-snug">{t.paperCredits}</p>
              </div>
            </div>
          </motion.section>

          {/* ABOUT. Layout family: bare prose column, no container. */}
          {/* TODO: black and white portrait, 4:5, sitting left of this column at md+. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="space-y-5 md:space-y-8"
            id="about"
          >
            <SectionHead>{t.sections.about}</SectionHead>
            <div className="max-w-[62ch] space-y-4 md:space-y-6">
              <p className="font-body text-[14px] md:text-lg text-black/85 leading-relaxed">{t.aboutP1}</p>
              <p className="font-body text-[14px] md:text-lg text-black/85 leading-relaxed">{t.aboutP2}</p>
            </div>
          </motion.section>

          {/* STACK. Layout family: ruled columns, no container. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-5 md:space-y-8"
            id="stack"
          >
            <motion.div variants={sectionVariants}>
              <SectionHead>{t.stackHeading}</SectionHead>
            </motion.div>

            <div className="grid grid-cols-1 gap-y-7 md:grid-cols-3 md:gap-y-0 md:divide-x-2 md:divide-black">
              {STACK.map((s) => (
                <motion.div
                  variants={sectionVariants}
                  key={s.category.en}
                  className="flex flex-col gap-2 md:px-7 md:first:pl-0 md:last:pr-0"
                >
                  <span className="font-code text-[11px] md:text-xs font-bold text-[#0038FF] uppercase tracking-wider">
                    {s.category[lang]}
                  </span>
                  {/* Mobile keeps one line per category. The ruled list is tall enough
                      at 390px to push contact far below the fold. */}
                  <p className="md:hidden font-code text-[13px] text-black font-medium leading-relaxed">
                    {s.items.map((item) => stackLabel(item, lang)).join(", ")}
                  </p>
                  <ul className="hidden md:block font-code text-sm text-black font-medium">
                    {s.items.map((item) => {
                      const label = stackLabel(item, lang);
                      return (
                        <li key={label} className="py-2 border-b border-black/15 last:border-b-0">
                          {label}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT. Layout family: closing anchor card. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-5 md:space-y-8 md:pb-12"
            id="contact"
          >
            <motion.div variants={sectionVariants}>
              <SectionHead>{t.sections.contact}</SectionHead>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              className="bg-white border-[2.5px] md:border-[3px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-12 space-y-5 md:space-y-8"
            >
              <p className="font-body text-[14px] md:text-lg text-black/85 max-w-2xl leading-relaxed">
                {t.availability}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-6">
                {CONTACT_LINKS.map(({ label, value, href, external }) => (
                  <a
                    key={label}
                    className="btn-mechanical group bg-white border-[2px] md:border-[2.5px] border-black hover:bg-slate-50 neo-shadow-blue-sm md:[box-shadow:4px_4px_0px_#0038FF] p-3 md:p-5 flex items-center md:flex-col md:items-stretch justify-between gap-3 md:gap-0"
                    href={href}
                    {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
                  >
                    <span className="flex flex-col min-w-0">
                      <span className="font-code text-[10.5px] md:text-xs text-black/70 uppercase tracking-wider font-bold">
                        {label}
                      </span>
                      <span className="font-display text-[15px] md:text-xl text-black group-hover:text-[#0038FF] transition-colors font-bold truncate md:mt-2 md:break-all md:whitespace-normal">
                        {value}
                      </span>
                    </span>
                    <span className="shrink-0 text-[#0038FF] md:mt-4 md:pt-3 md:border-t md:border-slate-200 md:self-stretch md:flex md:justify-end">
                      {external ? (
                        <ArrowUpRight size={16} strokeWidth={3} />
                      ) : (
                        <ArrowRight size={16} strokeWidth={3} />
                      )}
                    </span>
                  </a>
                ))}
              </div>

              <p className="md:hidden font-code text-[10.5px] text-black/70 uppercase">
                © {new Date().getFullYear()} Felipe Brigagão · {t.role} · Jacareí, SP
              </p>
            </motion.div>
          </motion.section>
        </div>
      </motion.main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden md:flex w-full bg-white border-t-[2.5px] border-black [box-shadow:0px_-2px_0px_#0038FF]">
        <div className="w-full max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between gap-4 font-code text-xs uppercase text-black/80">
          <span className="font-bold text-black">© {new Date().getFullYear()} Felipe Brigagão</span>
          <div className="flex flex-wrap items-center gap-4 font-bold">
            <span className="text-black">Jacareí, SP</span>
            <span className="text-slate-400">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4" href={SITE.social.github} rel="noopener noreferrer" target="_blank">
              GitHub
            </a>
            <span className="text-slate-400">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4" href={SITE.social.linkedin} rel="noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            <span className="text-slate-400">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4" href={`mailto:${SITE.email}`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
