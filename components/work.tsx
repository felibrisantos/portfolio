"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COPY, hrefLabel, PROJECTS } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import { useContainerVariants } from "@/components/scroll-fx";
import { SectionHead } from "@/components/section-head";

/* WORK. Layout family: asymmetric card grid, first entry featured. */
/* TODO: one cropped screenshot per project (16:10). Needs cleared assets. */
export function Work() {
  const { lang } = useLang();
  const t = COPY[lang];
  const reduce = useReducedMotion();
  const containerVariants = useContainerVariants();

  /* Project cards lock into the grid from alternating sides instead of all
     drifting up together, so the grid reads as blocks being set rather than a
     list fading in. The featured card is full width and always comes first. */
  const cardVariants: Variants = {
    hidden: (index: number) =>
      reduce ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 14 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring", stiffness: 320, damping: 26, mass: 0.7 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="space-y-5 md:space-y-8"
      id="work"
    >
      <SectionHead>{t.sections.featured}</SectionHead>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        {PROJECTS.map((p, i) => {
          const featured = i === 0;
          return (
            <motion.article
              key={p.id}
              custom={i}
              variants={cardVariants}
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
                {/* Third slot, present on every card, so this corner always
                    answers the same question: can the reader go and look at
                    this? The live one names its domain, in lower case because
                    a URL shouted in caps stops reading as a URL. The rest say
                    why not, which is what silence here would fail to say. */}
                {p.href ? (
                  <a
                    className="group inline-flex items-center gap-1 font-bold text-[#0038FF] normal-case hover:underline underline-offset-4"
                    href={p.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {hrefLabel(p.href)}
                    <ArrowUpRight
                      size={12}
                      strokeWidth={3}
                      className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                ) : (
                  <span className="font-bold text-black/45">{t.projectAccess}</span>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </motion.section>
  );
}
