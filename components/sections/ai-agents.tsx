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

import { CyanGlow } from "@/components/ui/cyan-glow";

export const AiAgents = () => {
  return (
    <section
      id="ia"
      className="relative px-4 md:px-12 py-24 md:py-32 border-t-[1px] border-white/15 overflow-hidden"
    >
      <CyanGlow className="absolute -bottom-1/4 -left-1/4 opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            02 // INTELLIGENCE_LAYER
          </span>
          <h2 className="font-bodoni text-4xl md:text-6xl lg:text-8xl tracking-tighter">
            Agentic<span className="text-accent italic font-normal">Design</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <p className="text-muted leading-relaxed text-sm md:text-xl font-sora max-w-xl">
              {AI_CONTENT.description}
            </p>

            <div className="space-y-4 md:space-y-6">
              {AI_CONTENT.protocols.map((protocol, index) => (
                <motion.div
                  key={protocol}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="relative">
                    <span className="w-6 h-[1px] bg-white/10 group-hover:bg-accent group-hover:w-10 transition-all duration-500 block" />
                    <span className="absolute top-1/2 -translate-y-1/2 -left-1 w-1 h-1 bg-accent/20 rounded-none group-hover:bg-accent transition-colors" />
                  </div>
                  <span className="font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-muted/60 group-hover:text-accent transition-all duration-500">
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
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-4 border-[0.5px] border-white/5 pointer-events-none" />
            <CodeBlock />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
