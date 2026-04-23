"use client";

import { motion } from "framer-motion";
import { CodeBlock } from "@/components/ui/code-block";
import { AI_CONTENT } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const AiAgents = () => {
  return (
    <section
      id="ia"
      className="px-6 md:px-12 py-24 md:py-32 border-t-[4px] border-ink"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="font-sora text-[11px] uppercase tracking-[0.3em] text-muted block mb-4">
            {AI_CONTENT.label}
          </span>
          <h2 className="font-bodoni text-5xl md:text-7xl tracking-tight">
            {AI_CONTENT.title}
            <span className="text-accent">.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-muted leading-relaxed text-base md:text-lg font-sora">
              {AI_CONTENT.description}
            </p>

            <div className="space-y-3">
              {AI_CONTENT.protocols.map((protocol, index) => (
                <motion.div
                  key={protocol}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <span className="w-4 h-[1px] bg-faint group-hover:bg-accent group-hover:w-6 transition-all duration-300" />
                  <span className="font-mono text-[10px] tracking-[0.15em] text-muted group-hover:text-ink transition-colors">
                    {protocol}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
