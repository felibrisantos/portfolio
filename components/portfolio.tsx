"use client";

import { useLang } from "@/lib/use-lang";
import { COPY, PROJECTS, SITE, STACK, stackLabel } from "@/lib/content";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import {
  listStagger,
  maskRise,
  metricRise,
  metricStagger,
  RowWipe,
  ruleDraw,
  ScrollRail,
  useActiveSection,
} from "@/components/scroll-fx";
import { ArrowUpRight, ArrowRight, Check, Copy, Mail, Terminal, FlaskConical, Layers, AtSign } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

/* Email is not in here: it is not a link. A mailto opens whatever desktop mail
   client happens to be registered, which is usually not the one the reader
   uses, so the address gets its own card with copy and compose as separate
   explicit actions. */
const SOCIAL_LINKS = [
  { label: "LinkedIn", value: "/in/felibrisantos", href: SITE.social.linkedin },
  { label: "GitHub", value: "@felibrisantos", href: SITE.social.github },
];

const CARD_SHELL =
  "bg-white border-[2px] md:border-[2.5px] border-black neo-shadow-blue-sm md:[box-shadow:4px_4px_0px_#0038FF] p-3 md:p-5 flex items-center lg:flex-col lg:items-stretch justify-between gap-3 lg:gap-0";
const CARD_LABEL =
  "font-code text-[10.5px] md:text-xs text-black/70 uppercase tracking-wider font-bold";
const CARD_VALUE =
  "font-display text-[15px] md:text-xl text-black font-bold truncate lg:mt-2 lg:break-all lg:whitespace-normal";
const CARD_FOOT =
  "shrink-0 flex items-center gap-1.5 lg:mt-4 lg:pt-3 lg:border-t lg:border-slate-200 lg:self-stretch lg:justify-end";
const CARD_ACTION =
  "btn-mechanical-sm inline-flex items-center gap-1.5 px-2 py-1.5 border-[1.5px] border-black font-code text-[10px] md:text-[11px] font-bold uppercase";

const NAV_LINKS = ["work", "research", "about", "stack", "contact"] as const;

/* The hero is watched too, so that while it is on screen no nav item is lit
   rather than "work" being lit before the reader has reached it. */
const SPY_IDS = ["hero", ...NAV_LINKS] as const;

/* The heading is the section announcing itself: the words rise behind a mask
   and the rule draws itself across. The rule is an element rather than a
   border-b so it can be animated with transform alone. */
function SectionHead({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.h2
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
      className="relative font-display text-[22px] md:text-4xl uppercase text-black tracking-tight font-extrabold pb-3 md:pb-4"
    >
      {/* pb reserve: the mask would otherwise clip the tail of a Ç or a Q. */}
      <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
        <motion.span variants={maskRise} className="block">
          {children}
        </motion.span>
      </span>
      <motion.span
        aria-hidden
        variants={ruleDraw}
        className="absolute bottom-0 left-0 h-[2.5px] w-full bg-black origin-left"
      />
    </motion.h2>
  );
}

/** Words of the hero headline rise in sequence. */
const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.18 } },
};

const wordRise: Variants = {
  hidden: { opacity: 0, y: "0.3em" },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 210, damping: 24 } },
};

/**
 * Counts every number inside `value` up from zero, keeping whatever sits
 * between them. Works for "0,82-0,96", "5 de 8" and "3.8-9.2%" alike, and
 * keeps the decimal separator the string arrived with.
 */
function scaleNumbers(value: string, progress: number) {
  return value.replace(/\d+(?:[.,]\d+)?/g, (raw) => {
    const separator = raw.includes(",") ? "," : ".";
    const decimals = raw.includes(separator) ? raw.split(separator)[1].length : 0;
    const scaled = parseFloat(raw.replace(",", ".")) * progress;
    return scaled.toFixed(decimals).replace(".", separator);
  });
}

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

/** Desktop-only: the CTA leans toward the pointer. Touch never fires mousemove. */
function MagneticCta({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.6 });

  const pull = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    x.set((event.clientX - (box.left + box.width / 2)) * 0.22);
    y.set((event.clientY - (box.top + box.height / 2)) * 0.34);
  };

  const release = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={pull}
      onMouseLeave={release}
    >
      {children}
    </motion.a>
  );
}

export function Portfolio() {
  const { lang, toggle } = useLang();
  const t = COPY[lang];
  const reduce = useReducedMotion();

  /* Motion runs in JS, so the reduced-motion block in globals.css does not
     reach it. Collapsing the variants here is what actually honours it. */
  const sectionVariants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : { type: "spring", stiffness: 280, damping: 24, mass: 0.8 },
    },
  };

  const containerVariants: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

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

  const activeSection = useActiveSection(SPY_IDS);

  /* The two halves of the name pull apart as the hero leaves. Desktop only in
     practice: the markup this drives is display:none below md, so the
     transform never reaches the phone layout. */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const driftLeft = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : -34]);
  const driftRight = useTransform(heroProgress, [0, 1], [0, reduce ? 0 : 34]);

  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLSpanElement>(null);

  /* writeText needs a secure context and can still be refused by permissions.
     When it is, select the address so Ctrl+C keeps working instead of leaving
     the reader with a button that silently did nothing. */
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
    } catch {
      const node = emailRef.current;
      if (!node) return;
      const range = document.createRange();
      range.selectNodeContents(node);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

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
                  aria-current={activeSection === key ? "true" : undefined}
                  className={`font-code text-xs uppercase font-bold tracking-wider transition-all hover:translate-y-[-1px] ${
                    activeSection === key
                      ? "text-[#0038FF] underline decoration-[#0038FF] decoration-2 underline-offset-[7px]"
                      : "text-black hover:text-[#0038FF]"
                  }`}
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
          <button
            onClick={toggle}
            aria-label={lang === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
            className="h-7 px-2.5 bg-white neo-border-sm neo-shadow-dark-sm font-code text-[11px] font-bold text-black hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            type="button"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>
        {/* No blue line under the mobile header, so here the rail is the blue. */}
        <ScrollRail className="absolute left-0 bottom-0 h-[2px] w-full bg-[#0038FF]" />
      </header>

      {/* MOBILE BOTTOM DOCK */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-md border-t-2 border-black">
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
              className={`flex-1 h-10 flex flex-col items-center justify-center gap-0.5 neo-border-sm border-black font-code text-[10.5px] font-bold uppercase active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all ${
                activeSection === key
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

          {/* HERO. Layout family: bordered anchor card.
              The card owns the first screen, so work starts below the fold. The
              subtracted values are what the layout already reserves around it:
              mobile is main's 68px header offset + 80px bottom-nav offset + the
              container's 8px; desktop is main's 96px + the container's 40px. */}
          <motion.section
            ref={heroRef}
            id="hero"
            variants={sectionVariants}
            className="relative pt-2 md:pt-0 pb-9 md:pb-11 min-h-[calc(100dvh-156px)] md:min-h-[calc(100dvh-136px)] flex flex-col justify-center"
          >
            <div className="hidden md:block p-12 bg-white border-[3px] border-black [box-shadow:6px_6px_0px_#0038FF] transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="space-y-4">
                <motion.h1
                  variants={wordContainer}
                  initial={reduce ? false : "hidden"}
                  animate="show"
                  className="font-display text-6xl lg:text-7xl uppercase tracking-tight text-black font-extrabold leading-none break-words"
                >
                  {/* Outer span carries the scroll drift, inner one the entrance:
                      two motion values on one element would fight over x. */}
                  <motion.span style={{ x: driftLeft }} className="inline-block">
                    <motion.span variants={wordRise} className="inline-block">
                      FELIPE
                    </motion.span>
                  </motion.span>{" "}
                  <motion.span style={{ x: driftRight }} className="inline-block">
                    <motion.span variants={wordRise} className="inline-block">
                      <span className="text-[#0038FF] italic underline decoration-[#0038FF] decoration-4 underline-offset-8 inline-block leading-[1.1] pb-1 transition-transform duration-200 hover:-rotate-1">
                        BRIGAGÃO
                      </span>
                    </motion.span>
                  </motion.span>
                </motion.h1>
                <p className="font-display text-3xl text-[#0038FF] font-bold tracking-tight uppercase">
                  {t.role}
                </p>
                <p className="font-body text-lg text-black/85 leading-relaxed max-w-3xl pt-2">
                  {t.positioning}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-[2.5px] border-black flex flex-wrap items-center gap-3">
                <MagneticCta
                  className="btn-magnetic flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0038FF] text-white font-display text-lg uppercase tracking-wider font-bold border-[2.5px] border-black hover:bg-[#0028c2] [box-shadow:4px_4px_0px_#0038FF] whitespace-nowrap"
                  href="#contact"
                >
                  {t.cta.contact} <ArrowRight size={18} strokeWidth={2.5} />
                </MagneticCta>
                <a
                  className="btn-mechanical py-3.5 px-6 bg-white border-[2px] border-black font-code text-xs uppercase tracking-wider text-black font-bold hover:bg-slate-100 [box-shadow:3px_3px_0px_#0038FF] whitespace-nowrap"
                  href="#work"
                >
                  {t.cta.work}
                </a>
              </div>
            </div>

            <div className="md:hidden flex flex-col">
              <motion.h1
                variants={wordContainer}
                initial={reduce ? false : "hidden"}
                animate="show"
                className="font-display font-extrabold text-[36px] leading-[1.04] tracking-tight uppercase text-black mb-1.5"
              >
                <motion.span variants={wordRise} className="inline-block">
                  FELIPE
                </motion.span>{" "}
                <br />
                <motion.span variants={wordRise} className="inline-block">
                  <span className="italic text-[#0038FF] font-black leading-[1.1] inline-block pb-1">
                    BRIGAGÃO
                  </span>
                </motion.span>
              </motion.h1>
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

            {/* Absolute so the card stays centred in the section; the section's
                bottom padding reserves this strip, so the two never overlap. */}
            <div className="absolute inset-x-0 bottom-3 md:bottom-4 flex items-center gap-2" aria-hidden>
              <motion.span
                animate={reduce ? undefined : { y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="flex text-[#0038FF]"
              >
                <ArrowRight size={17} strokeWidth={3} className="rotate-90" />
              </motion.span>
              <span className="font-code text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-black">
                {t.scrollCue}
              </span>
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
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* RESEARCH. Layout family: inverted block with display metrics.
              This is the page's single deliberate theme inversion. */}
          <motion.section
            initial={reduce ? false : "hidden"}
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

              {/* Only the contents move. The cells themselves are opaque over a
                  1px rule grid, and sliding them would flash that grid. */}
              <motion.div
                variants={metricStagger}
                className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/20 border border-white/20"
              >
                {/* Keyed by position, not by label: the label is translated, and a
                    changing key would remount the cell into a variant tree that has
                    already finished animating, leaving it stuck at `hidden`. */}
                {t.paperMetrics.map((m, index) => (
                  <div key={index} className="bg-[#0d0f14] p-3.5 md:p-5">
                    <motion.p
                      variants={metricRise}
                      className="font-display text-[32px] md:text-5xl font-extrabold text-[#5B8CFF] leading-none tracking-tight tabular-nums"
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

          {/* ABOUT. Layout family: bare prose column, portrait ruled off to its left at md+. */}
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="space-y-5 md:space-y-8"
            id="about"
          >
            <SectionHead>{t.sections.about}</SectionHead>
            <div className="md:grid md:grid-cols-[280px_minmax(0,1fr)] md:gap-10 md:items-start">
              {/* Mobile keeps the portrait small: full width at 4:5 costs a whole
                  viewport and pushes the prose under the fold. The block is capped
                  at the portrait width there so the meta list lines up under it. */}
              <div className="w-44 md:w-auto mb-5 md:mb-0">
                <Image
                  src="/foto-felipe.jpg"
                  alt={t.portraitAlt}
                  width={1000}
                  height={1250}
                  sizes="(min-width: 768px) 280px, 176px"
                  className="w-full h-auto border-[2.5px] md:border-[3px] border-black [box-shadow:4px_4px_0px_#0038FF] md:[box-shadow:6px_6px_0px_#0038FF] transition-shadow duration-300 md:hover:[box-shadow:8px_8px_0px_#0038FF]"
                />
                <p className="mt-3 md:mt-4 font-code text-[11px] md:text-xs font-bold text-[#0038FF] uppercase tracking-wider">
                  {SITE.location}
                </p>
                {/* Ruled rows, not the contact cards: contact already renders these
                    two as cards, and repeating that idiom here would read as a
                    second contact block. */}
                <ul className="mt-2 font-code text-[11px] md:text-xs">
                  {SOCIAL_LINKS.map(({ label, value, href }) => (
                    <li key={label} className="border-b border-black/15 last:border-b-0">
                      <a
                        className="group flex flex-col md:flex-row md:items-center md:justify-between md:gap-3 py-2 transition-transform duration-150 hover:translate-x-1"
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="text-black/70 uppercase tracking-wider font-bold">{label}</span>
                        <span className="flex items-center gap-1 min-w-0 text-black font-medium group-hover:text-[#0038FF] transition-colors">
                          <span className="truncate">{value}</span>
                          <ArrowUpRight
                            size={12}
                            strokeWidth={3}
                            className="shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-w-[62ch] space-y-4 md:space-y-6">
                <p className="font-body text-[14px] md:text-lg text-black/85 leading-relaxed">{t.aboutP1}</p>
                <p className="font-body text-[14px] md:text-lg text-black/85 leading-relaxed">{t.aboutP2}</p>
                <p className="font-body text-[14px] md:text-lg text-black/85 leading-relaxed">{t.aboutP3}</p>
              </div>
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
            <SectionHead>{t.stackHeading}</SectionHead>

            {/* 2 columns at md, 4 in one ruled row at lg. The rules only appear at lg,
                where every column shares a single row. */}
            <div className="grid grid-cols-1 gap-y-7 md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0 lg:divide-x-2 lg:divide-black">
              {STACK.map((s) => (
                <motion.div
                  variants={sectionVariants}
                  key={s.category.en}
                  className="flex flex-col gap-2 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <span className="font-code text-[11px] md:text-xs font-bold text-[#0038FF] uppercase tracking-wider">
                    {s.category[lang]}
                  </span>
                  {/* Mobile keeps one line per category. The ruled list is tall enough
                      at 390px to push contact far below the fold. */}
                  <p className="md:hidden font-code text-[13px] text-black font-medium leading-relaxed">
                    {s.items.map((item) => stackLabel(item, lang)).join(", ")}
                  </p>
                  <motion.ul
                    variants={listStagger}
                    className="hidden md:block font-code text-sm text-black font-medium"
                  >
                    {s.items.map((item) => {
                      const label = stackLabel(item, lang);
                      return (
                        <li
                          key={stackLabel(item, "en")}
                          className="py-2 border-b border-black/15 last:border-b-0 transition-transform duration-150 hover:translate-x-1"
                        >
                          <RowWipe>{label}</RowWipe>
                        </li>
                      );
                    })}
                  </motion.ul>
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
            <SectionHead>{t.sections.contact}</SectionHead>

            <motion.div
              variants={sectionVariants}
              className="bg-white border-[2.5px] md:border-[3px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-12 space-y-5 md:space-y-8"
            >
              <p className="font-body text-[14px] md:text-lg text-black/85 max-w-2xl leading-relaxed">
                {t.availability}
              </p>

              {/* Three across only at lg. At md the columns are too narrow for the
                  email, which then breaks mid-domain. */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 md:gap-6">
                <div className={`btn-mechanical hover:bg-slate-50 ${CARD_SHELL}`}>
                  <span className="flex flex-col min-w-0">
                    <span className={CARD_LABEL}>Email</span>
                    {/* select-all: one click grabs the whole address for readers
                        who would rather not trust a copy button. */}
                    <span ref={emailRef} className={`${CARD_VALUE} select-all`}>
                      {SITE.email}
                    </span>
                  </span>
                  <span className={CARD_FOOT}>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label={`${t.contactActions.copy} ${SITE.email}`}
                      className={`${CARD_ACTION} ${
                        copied ? "bg-black text-white" : "bg-[#0038FF] text-white hover:bg-[#0028c2]"
                      }`}
                    >
                      {copied ? <Check size={13} strokeWidth={3} /> : <Copy size={13} strokeWidth={2.5} />}
                      <span>{copied ? t.contactActions.copied : t.contactActions.copy}</span>
                    </button>
                    <a
                      href={`mailto:${SITE.email}`}
                      aria-label={`${t.contactActions.compose} ${SITE.email}`}
                      className={`${CARD_ACTION} bg-white text-black hover:bg-slate-100`}
                    >
                      <Mail size={13} strokeWidth={2.5} />
                      <span>{t.contactActions.compose}</span>
                    </a>
                  </span>
                  <span aria-live="polite" className="sr-only">
                    {copied ? t.contactActions.copied : ""}
                  </span>
                </div>

                {SOCIAL_LINKS.map(({ label, value, href }) => (
                  <a
                    key={label}
                    className={`btn-mechanical group hover:bg-slate-50 ${CARD_SHELL}`}
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="flex flex-col min-w-0">
                      <span className={CARD_LABEL}>{label}</span>
                      <span className={`${CARD_VALUE} group-hover:text-[#0038FF] transition-colors`}>
                        {value}
                      </span>
                    </span>
                    <span className={`${CARD_FOOT} text-[#0038FF]`}>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={3}
                        className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                ))}
              </div>

              <p className="md:hidden font-code text-[10.5px] text-black/70 uppercase">
                © {new Date().getFullYear()} Felipe Brigagão · {t.role} · {SITE.location}
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
            <span className="text-black">{SITE.location}</span>
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
