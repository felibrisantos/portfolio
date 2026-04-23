"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="px-6 md:px-12 py-16 md:py-24 border-t-[4px] border-ink">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="space-y-6">
          <h2 className="font-bodoni text-4xl md:text-6xl tracking-tight">
            {SITE_CONFIG.name}
            <span className="text-accent">.</span>
          </h2>
          <p className="text-muted max-w-xs font-sora text-sm leading-relaxed">
            Construindo interfaces que desafiam o comum e sistemas que operam no
            limite.
          </p>
          <div className="flex gap-6">
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
                whileHover={{ x: 3 }}
                className="font-sora text-[11px] uppercase tracking-[0.15em] text-muted hover:text-accent transition-colors"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="text-left md:text-right space-y-2">
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.fullName}
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-faint uppercase">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
