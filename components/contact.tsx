"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { COPY, SITE, SOCIAL_LINKS } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import { useContainerVariants, useSectionVariants } from "@/components/scroll-fx";
import { SectionHead } from "@/components/section-head";
import { useCallback, useEffect, useRef, useState } from "react";

const CARD_SHELL =
  "bg-white border-[2px] md:border-[2.5px] border-black neo-shadow-blue-sm md:[box-shadow:4px_4px_0px_var(--color-primary)] p-3 md:p-5 flex items-center lg:flex-col lg:items-stretch justify-between gap-3 lg:gap-0";
const CARD_LABEL =
  "font-code text-[10.5px] md:text-xs text-black/70 uppercase tracking-wider font-bold";
const CARD_VALUE =
  "font-display text-[15px] md:text-xl text-black font-bold truncate lg:mt-2 lg:break-all lg:whitespace-normal";
const CARD_FOOT =
  "shrink-0 flex items-center gap-1.5 lg:mt-4 lg:pt-3 lg:border-t lg:border-slate-200 lg:self-stretch lg:justify-end";
const CARD_ACTION =
  "btn-mechanical-sm inline-flex items-center gap-1.5 px-2 py-1.5 border-[1.5px] border-black font-code text-[10px] md:text-[11px] font-bold uppercase";

/* CONTACT. Layout family: closing anchor card. */
export function Contact() {
  const { lang } = useLang();
  const t = COPY[lang];
  const containerVariants = useContainerVariants();
  const sectionVariants = useSectionVariants();

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
        className="bg-white border-[2.5px] md:border-[3px] border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_var(--color-primary)] p-4 md:p-12 space-y-5 md:space-y-8"
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
              {/* select-all: one click grabs the whole address for readers who
                  would rather not trust a copy button. */}
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
                  copied ? "bg-black text-white" : "bg-primary text-white hover:bg-primary-hover"
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
                <span className={`${CARD_VALUE} group-hover:text-primary transition-colors`}>
                  {value}
                </span>
              </span>
              <span className={`${CARD_FOOT} text-primary`}>
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
  );
}
