"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { COPY, RESUME } from "@/lib/content";
import type { Lang } from "@/lib/lang";
import { useRef } from "react";

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

/* HERO. Layout family: bordered anchor card.
   The hero owns the first screen: its minimum height is the viewport less
   everything already spoken for around it, so the next section starts exactly
   at the fold instead of peeking above it. Mobile subtracts main's 68px header
   offset + the container's 8px, the 56px space-y gap to WORK, and the dock
   (56px row + 2px border + its safe-area padding). Desktop subtracts main's
   96px + the container's 40px and the 96px gap; there is no dock. */
export function Hero({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  const reduce = useReducedMotion();

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

  return (
    <motion.section
      ref={heroRef}
      id="hero"
      aria-label={t.a11y.heroRegion}
      /* No reveal variant here. The hero is the first screen: it has to be in
         the served markup, not waiting on a bundle to be granted opacity. Its
         entrance is the CSS word rise, which runs without JavaScript. */
      initial={false}
      className="flex flex-col pt-2 md:pt-0 min-h-[calc(100dvh-190px-max(12px,env(safe-area-inset-bottom,12px)))] md:min-h-[calc(100dvh-232px)]"
    >
      <div className="hidden md:block my-auto p-12 bg-white border-[3px] border-black [box-shadow:6px_6px_0px_var(--color-primary)] transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_var(--color-primary)]">
        <div className="space-y-4">
          <h1 className="font-display text-6xl lg:text-7xl uppercase tracking-tight text-black font-extrabold leading-none break-words">
            {/* Outer span carries the scroll drift, inner one the entrance:
                two motion values on one element would fight over x. */}
            <motion.span style={{ x: driftLeft }} className="inline-block">
              <span className="word-rise word-rise-1">FELIPE</span>
            </motion.span>{" "}
            <motion.span style={{ x: driftRight }} className="inline-block">
              <span className="word-rise word-rise-2">
                <span className="text-primary italic underline decoration-primary decoration-4 underline-offset-8 inline-block leading-[1.1] pb-1 transition-transform duration-200 hover:-rotate-1">
                  BRIGAGÃO
                </span>
              </span>
            </motion.span>
          </h1>
          <p className="font-display text-3xl text-primary font-bold tracking-tight uppercase">
            {t.role}
          </p>
          <p className="font-body text-lg text-black/85 leading-relaxed max-w-3xl pt-2">
            {t.positioning}
          </p>
          {/* The prose says what the work is; this says what can be checked.
              Every item here is stated again, in full, further down the page. */}
          <dl className="flex flex-wrap gap-x-8 gap-y-3 pt-5">
            {t.evidence.map((fact) => (
              <div key={fact.label} className="border-l-[3px] border-primary pl-3">
                <dt className="font-display text-lg font-extrabold uppercase tracking-tight text-black leading-none">
                  {fact.value}
                </dt>
                <dd className="font-code text-[11px] uppercase tracking-wider text-on-surface-muted pt-1">
                  {fact.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 pt-8 border-t-[2.5px] border-black flex flex-wrap items-center gap-3">
          <MagneticCta
            className="btn-magnetic flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-white font-display text-lg uppercase tracking-wider font-bold border-[2.5px] border-black hover:bg-primary-hover [box-shadow:4px_4px_0px_var(--color-primary)] whitespace-nowrap"
            href="#contact"
          >
            {t.cta.contact} <ArrowRight size={18} strokeWidth={2.5} />
          </MagneticCta>
          <a
            className="btn-mechanical py-3.5 px-6 bg-white border-[2px] border-black font-code text-xs uppercase tracking-wider text-black font-bold hover:bg-slate-100 [box-shadow:3px_3px_0px_var(--color-primary)] whitespace-nowrap"
            href="#work"
          >
            {t.cta.work}
          </a>
          {/* Tertiary on purpose. A third button would compete with the contact
              action, and on a phone it would push it off the first fold. */}
          <a
            className="inline-flex items-center gap-1.5 font-code text-xs uppercase tracking-wider font-bold text-on-surface-muted hover:text-primary underline underline-offset-4 decoration-1"
            href={RESUME[lang]}
            download
          >
            <Download size={14} strokeWidth={2.5} />
            {t.cta.resume}
          </a>
        </div>
      </div>

      <div className="md:hidden my-auto flex flex-col">
        <h1 className="font-display font-extrabold text-[36px] leading-[1.04] tracking-tight uppercase text-black mb-1.5">
          <span className="word-rise word-rise-1">FELIPE</span>{" "}
          <br />
          <span className="word-rise word-rise-2">
            <span className="italic text-primary font-black leading-[1.1] inline-block pb-1">
              BRIGAGÃO
            </span>
          </span>
        </h1>
        <p className="font-display font-semibold text-[16.5px] tracking-tight text-black mb-3.5 uppercase">
          {t.role}
        </p>
        <p className="font-body text-[14px] leading-relaxed text-black/85 mb-3">
          {t.positioningShort}
        </p>
        {/* One line, not three blocks: the contact action has to survive the
            first fold, which is the whole reason `positioningShort` exists. */}
        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 font-code text-[10.5px] uppercase tracking-wider">
          {t.evidence.map((fact, i) => (
            <li key={fact.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden className="text-on-surface-muted/50">/</span>}
              <span className="font-bold text-black">{fact.value}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2.5 w-full">
          <a
            className="w-full h-11 flex items-center justify-center gap-2 bg-primary text-white font-code text-[12.5px] font-bold tracking-wider uppercase neo-border border-black neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
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
          <a
            className="self-start inline-flex items-center gap-1.5 pt-0.5 font-code text-[11.5px] uppercase tracking-wider font-bold text-on-surface-muted underline underline-offset-4 decoration-1"
            href={RESUME[lang]}
            download
          >
            <Download size={13} strokeWidth={2.5} />
            {t.cta.resume}
          </a>
        </div>
      </div>

      {/* In flow, pushed down by mt-auto rather than positioned: the section's
          own height already stops above the dock, so the cue can never end up
          under it. */}
      <div className="mt-auto pt-8 flex items-center gap-2" aria-hidden>
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex text-primary"
        >
          <ArrowRight size={17} strokeWidth={3} className="rotate-90" />
        </motion.span>
        <span className="font-code text-[11px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-black">
          {t.scrollCue}
        </span>
      </div>
    </motion.section>
  );
}
