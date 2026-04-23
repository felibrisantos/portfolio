"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="px-4 md:px-12 py-16 md:py-24 border-t-[0.5px] border-white/10 bg-surface">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-16">
        <div className="space-y-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-accent/50">
              [ CONTACT_PROTOCOL ]
            </span>
            <h2 className="font-bodoni italic text-4xl md:text-7xl tracking-tighter">
              {SITE_CONFIG.name}
            </h2>
          </div>
          
          <p className="text-muted/60 max-w-sm font-sora text-sm leading-relaxed">
            Construindo interfaces que desafiam o comum e sistemas que operam no limite do possível.
          </p>
          
          <div className="flex gap-6 md:gap-8">
            {[
              { name: "LinkedIn", href: SITE_CONFIG.social.linkedin },
              { name: "GitHub", href: SITE_CONFIG.social.github },
              {
                name: "Email",
                href: `mailto:${SITE_CONFIG.email}`,
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: "var(--accent)" }}
                className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted/40 transition-all duration-300"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
          <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-2 font-mono text-[8px] md:text-[9px] text-muted/30 uppercase tracking-[0.2em] w-full">
            <span>VER: 2.0.4-LTS</span>
            <span className="text-right">LOCAL: GRU-INTL</span>
            <span>OS: NEURAL-01</span>
            <span className="text-right">ENC: AES-256</span>
          </div>
          
          <div className="text-left md:text-right space-y-2 border-t-[0.5px] border-white/5 pt-6 w-full">
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted/20 uppercase">
              &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName.toUpperCase()}
            </p>
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-accent/20 uppercase">
              ALL_RIGHTS_RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
