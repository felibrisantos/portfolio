"use client";

import { motion, useReducedMotion, useScroll, useSpring, Variants } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Document progress, as a hard bar filling left to right.
 * No new colour is introduced: the desktop header already draws a blue line
 * under itself, and this bar is black, so progress reads as the black rail
 * eating that line. On mobile there is no blue line, so the bar is blue.
 */
export function ScrollRail({ className }: { className: string }) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 340, damping: 42, mass: 0.35 });

  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ scaleX: reduce ? scrollYProgress : smooth, transformOrigin: "0% 50%" }}
    />
  );
}

/**
 * Which section the reader is currently inside, for the nav and the mobile
 * dock. IntersectionObserver, not a scroll listener: no work per frame.
 * The band is the middle of the viewport, so a section only claims the reader
 * once it is actually being read, not when its first pixel appears.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);
    if (nodes.length === 0) return;

    const ratios = new Map<string, number>();

    /* The decision band sits in the upper half of the viewport, so the last
       section can never fill it: the page stops scrolling while the section
       below is still ahead of the band. At the bottom the last id wins
       outright. Both callers go through this, so whichever fires last still
       agrees. */
    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const pick = () => {
      if (atBottom()) return ids[ids.length - 1];
      let winner = "";
      let best = 0;
      ratios.forEach((ratio, id) => {
        if (ratio > best) {
          best = ratio;
          winner = id;
        }
      });
      return winner;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        setActive(pick());
      },
      { rootMargin: "-18% 0px -50% 0px", threshold: [0, 0.2, 0.5, 0.85, 1] },
    );

    nodes.forEach((node) => observer.observe(node));

    const onScroll = () => setActive(pick());
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids]);

  return active;
}

/* Shared variant vocabulary. Everything below is transform only, so it stays
   on the compositor, and every reveal is a wipe or a snap rather than a fade:
   a fade is the soft move this page does not make anywhere else. */

/** Text rising into place behind an overflow-hidden mask. */
export const maskRise: Variants = {
  hidden: { y: "112%" },
  show: { y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/** A rule drawing itself from its left edge. */
export const ruleDraw: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.08 } },
};

/** A row of mono text sweeping in from the left edge of its own cell. */
export const rowWipe: Variants = {
  hidden: { x: "-102%" },
  show: { x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

/** Orchestrators. They carry timing only, never a visual state of their own. */
export const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055, delayChildren: 0.06 } },
};

export const metricStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
};

export const metricRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 26 } },
};

/**
 * One mono row sweeping in from the left edge of its own cell. The mask is a
 * wrapper, so the rule under the row stays put and only the text moves.
 * Under reduced motion the wrapper disappears entirely rather than animating
 * to a standstill, which keeps the row selectable and the DOM flat.
 */
export function RowWipe({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <span className="block overflow-hidden">
      <motion.span variants={rowWipe} className="block">
        {children}
      </motion.span>
    </span>
  );
}
