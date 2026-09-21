"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COPY } from "@/lib/content";
import { scaleNumbers } from "@/lib/metrics";
import type { Lang } from "@/lib/lang";
import { metricRise, metricStagger, useReveal, useSectionVariants } from "@/components/scroll-fx";
import { SectionHead } from "@/components/section-head";
import { useEffect, useRef } from "react";

function CountUp({ value }: { value: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const progress = useMotionValue(reduce ? 1 : 0);
  const text = useTransform(progress, (p) => scaleNumbers(value, p));

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(progress, 1, { duration: 1.1, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, reduce, progress]);

  return <motion.span ref={ref}>{text}</motion.span>;
}

/* RESEARCH. Layout family: inverted block with display metrics.
   This is the page's single deliberate theme inversion. */
export function Research({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const reduce = useReducedMotion();
  const sectionVariants = useSectionVariants();
  const { initial, revealKey } = useReveal();

  return (
    <motion.section
      key={revealKey}
      initial={reduce ? false : initial}
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="space-y-5 md:space-y-8"
      id="research"
      aria-labelledby="research-heading"
    >
      <SectionHead id="research-heading">{t.researchHeading}</SectionHead>

      <div className="bg-ink text-white border-[2.5px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_var(--color-primary)] p-4 md:p-10 space-y-5 md:space-y-8">
        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 font-code text-[10.5px] md:text-xs uppercase font-bold">
          <span className="px-2.5 py-1 border border-white/35 text-white/80">ICMR, Vol. 05, № 03</span>
          <span className="px-2.5 py-1 border border-white/35 text-white/80">
            {lang === "pt" ? "Dezembro / 2024" : "December / 2024"}
          </span>
          <span className="px-2.5 py-1 bg-primary text-white border border-primary">{t.paperKind}</span>
          <a
            className="md:ml-auto inline-flex items-center gap-1.5 px-2.5 py-1 border border-on-ink-accent text-on-ink-accent hover:bg-on-ink-accent hover:text-ink transition-colors"
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

        {/* Only the contents move. The cells themselves are opaque over a 1px
            rule grid, and sliding them would flash that grid. */}
        <motion.div
          variants={metricStagger}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/20 border border-white/20"
        >
          {/* Keyed by position, not by label: the label is translated, and a
              changing key would remount the cell into a variant tree that has
              already finished animating, leaving it stuck at `hidden`. */}
          {t.paperMetrics.map((m, index) => (
            <div key={index} className="bg-ink p-3.5 md:p-5">
              <motion.p
                variants={metricRise}
                className="font-display text-[32px] md:text-5xl font-extrabold text-on-ink-accent leading-none tracking-tight tabular-nums"
              >
                <CountUp value={m.value} />
              </motion.p>
              <motion.p
                variants={metricRise}
                className="mt-2 font-code text-[10.5px] md:text-xs uppercase text-white/75 leading-snug"
              >
                {m.label}
              </motion.p>
            </div>
          ))}
        </motion.div>

        <div className="space-y-3">
          <p className="font-body text-[13.5px] md:text-base text-white/85 leading-relaxed max-w-3xl">
            {t.paperAbstract}
          </p>
          <p className="font-code text-[11px] md:text-sm text-white/65 leading-snug">{t.paperCredits}</p>
        </div>
      </div>
    </motion.section>
  );
}
