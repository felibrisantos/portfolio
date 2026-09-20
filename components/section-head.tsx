"use client";

import { motion, useReducedMotion } from "framer-motion";
import { maskRise, ruleDraw } from "@/components/scroll-fx";

/* The heading is the section announcing itself: the words rise behind a mask
   and the rule draws itself across. The rule is an element rather than a
   border-b so it can be animated with transform alone. */
export function SectionHead({ children }: { children: React.ReactNode }) {
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
