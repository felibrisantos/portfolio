"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { COPY, SITE, SOCIAL_LINKS } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import { useReveal, useSectionVariants } from "@/components/scroll-fx";
import { SectionHead } from "@/components/section-head";

/* ABOUT. Layout family: bare prose column, portrait ruled off to its left at md+. */
export function About() {
  const { lang } = useLang();
  const t = COPY[lang];
  const sectionVariants = useSectionVariants();
  const { initial, revealKey } = useReveal();

  return (
    <motion.section
      key={revealKey}
      initial={initial}
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
      className="space-y-5 md:space-y-8"
      id="about"
      aria-labelledby="about-heading"
    >
      <SectionHead id="about-heading">{t.sections.about}</SectionHead>
      <div className="md:grid md:grid-cols-[280px_minmax(0,1fr)] md:gap-10 md:items-start">
        {/* Mobile keeps the portrait small: full width at 4:5 costs a whole
            viewport and pushes the prose under the fold. The block is capped at
            the portrait width there so the meta list lines up under it. */}
        <div className="w-44 md:w-auto mb-5 md:mb-0">
          <Image
            src="/foto-felipe.jpg"
            alt={t.portraitAlt}
            width={1000}
            height={1250}
            sizes="(min-width: 768px) 280px, 176px"
            className="w-full h-auto border-[2.5px] md:border-[3px] border-black [box-shadow:4px_4px_0px_var(--color-primary)] md:[box-shadow:6px_6px_0px_var(--color-primary)] transition-shadow duration-300 md:hover:[box-shadow:8px_8px_0px_var(--color-primary)]"
          />
          <p className="mt-3 md:mt-4 font-code text-[11px] md:text-xs font-bold text-primary uppercase tracking-wider">
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
                  <span className="flex items-center gap-1 min-w-0 text-black font-medium group-hover:text-primary transition-colors">
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
  );
}
