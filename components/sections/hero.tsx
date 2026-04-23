"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";

const icons = {
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  mail: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

import { CyanGlow } from "@/components/ui/cyan-glow";

export const Hero = () => {
  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 pt-32 overflow-hidden"
    >
      <CyanGlow className="absolute -top-1/4 -right-1/4 opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center justify-between mb-8"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent">
            [ SYS.INIT_SEQUENCE ]
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-muted">
            STATUS: ACTIVE
          </span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { href: SITE_CONFIG.social.linkedin, icon: icons.linkedin, label: "LinkedIn" },
            { href: SITE_CONFIG.social.github, icon: icons.github, label: "GitHub" },
            { href: `mailto:${SITE_CONFIG.email}`, icon: icons.mail, label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              whileHover={{ y: -2, color: "var(--accent)" }}
              className="text-muted transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="overflow-hidden mb-2">
        <motion.h1
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}
          className="font-bodoni text-[20vw] md:text-[16vw] lg:text-[12vw] leading-[0.8] font-normal tracking-tighter"
        >
          {HERO_CONTENT.firstName}
        </motion.h1>
      </div>

      <div className="overflow-hidden">
        <motion.h1
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="font-bodoni text-[20vw] md:text-[16vw] lg:text-[12vw] leading-[0.8] font-bold italic tracking-tighter"
        >
          {HERO_CONTENT.lastName}
        </motion.h1>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: [0.77, 0, 0.175, 1] }}
        style={{ transformOrigin: "left" }}
        className="h-[1px] bg-accent/30 my-10 md:my-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-muted leading-relaxed font-sora max-w-md"
          >
            {HERO_CONTENT.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="font-mono text-[9px] text-muted/50 tracking-widest flex gap-8"
          >
            <span>LAT: -23.5505</span>
            <span>LNG: -46.6333</span>
            <span className="text-accent/40 animate-pulse">UTC-3</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-1 md:col-span-3 md:col-start-8 flex md:flex-col gap-8 md:gap-6 items-start justify-center"
        >
          <a
            href={HERO_CONTENT.cta.primary.href}
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink hover:text-accent transition-all group flex items-center gap-3 border-[0.5px] border-white/10 px-6 py-3 hover:border-accent/40"
          >
            {HERO_CONTENT.cta.primary.text}
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href={HERO_CONTENT.cta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted hover:text-accent transition-colors group flex items-center gap-3"
          >
            {HERO_CONTENT.cta.secondary.text}
            <span className="inline-block group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
