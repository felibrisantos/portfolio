"use client";

import { motion } from "framer-motion";
import { COPY, STACK, stackLabel } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import { listStagger, RowWipe, useContainerVariants, useSectionVariants } from "@/components/scroll-fx";
import { SectionHead } from "@/components/section-head";

/* STACK. Layout family: ruled columns, no container. */
export function StackSection() {
  const { lang } = useLang();
  const t = COPY[lang];
  const containerVariants = useContainerVariants();
  const sectionVariants = useSectionVariants();

  return (
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
            <span className="font-code text-[11px] md:text-xs font-bold text-primary uppercase tracking-wider">
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
  );
}
