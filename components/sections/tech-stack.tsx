"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export const TechStack = () => {
  return (
    <section
      id="stack"
      className="px-6 md:px-12 py-24 md:py-32 border-t-[1px] border-accent/20 bg-paper"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            03 // STACK_CORE
          </span>
          <h2 className="font-bodoni text-6xl md:text-8xl tracking-tighter">
            Architectural<span className="text-accent italic font-normal">Layer</span>
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
              className={`border-t-[0.5px] border-white/10 py-10 px-8 group transition-all duration-500 hover:bg-white/[0.04] backdrop-blur-sm ${
                index > 0 ? "lg:border-l-[0.5px]" : ""
              }`}
            >
              <h3 className="font-bodoni italic text-2xl md:text-3xl mb-8 tracking-tight group-hover:text-accent transition-colors duration-500">
                {stack.category}
              </h3>
              <ul className="space-y-4">
                {stack.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-[11px] text-muted hover:text-ink transition-colors cursor-default flex items-center gap-3"
                  >
                    <span className="w-2 h-[1px] bg-accent/30 group-hover:w-4 transition-all duration-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-10">
                {stack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] tracking-widest uppercase text-accent/60 border-[0.5px] border-accent/20 px-2 py-1"
                  >
                    [{tag}]
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
