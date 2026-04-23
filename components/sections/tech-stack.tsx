"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export const TechStack = () => {
  return (
    <section
      id="stack"
      className="px-6 md:px-12 py-24 md:py-32 border-t-[4px] border-accent bg-surface"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-sora text-[11px] uppercase tracking-[0.3em] text-muted block mb-4">
            03 // Stack Técnico
          </span>
          <h2 className="font-bodoni text-5xl md:text-7xl tracking-tight">
            Tecnologias<span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {TECH_STACK.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`border-t border-faint py-8 px-6 ${
                index > 0 ? "lg:border-l" : ""
              }`}
            >
              <h3 className="font-bodoni text-xl md:text-2xl mb-6 tracking-tight">
                {stack.category}
              </h3>
              <ul className="space-y-2.5">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="font-sora text-sm text-muted hover:text-ink transition-colors cursor-default flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-6">
                {stack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-wider uppercase px-1.5 py-0.5 bg-ink text-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
