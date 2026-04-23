"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Ecosystem() {
  return (
    <section
      id="experiencia"
      className="px-6 md:px-12 py-24 md:py-32 border-t-[1px] border-accent/20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent block mb-4">
            01 // OUTPUT_REGISTRY
          </span>
          <h2 className="font-bodoni text-6xl md:text-8xl tracking-tighter">
            System<span className="text-accent italic font-normal">Ecology</span>
          </h2>
        </motion.div>

        <div>
          {PROJECTS.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="border-t-[0.5px] border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 group relative overflow-hidden transition-all duration-700 hover:bg-white/[0.03] backdrop-blur-sm"
            >
              <div className="md:col-span-1 flex items-start">
                <span className="font-mono text-sm text-muted/30 group-hover:text-accent transition-colors duration-500">
                  {project.number}
                </span>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent/50">
                  {project.tag}
                </span>
                <h3 className="font-bodoni text-3xl md:text-4xl tracking-tight group-hover:text-ink transition-colors duration-500">
                  {project.title}
                </h3>
              </div>

              <div className="md:col-span-4 flex items-start">
                <p className="text-muted leading-relaxed text-sm md:text-base font-sora max-w-sm">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-3 flex items-start flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 border-[0.5px] border-white/10 text-muted/60 group-hover:text-accent group-hover:border-accent/20 transition-all duration-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t-[0.5px] border-white/10 py-16 md:py-24 flex flex-col items-center text-center"
        >
          <div className="mb-8 opacity-20">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 0V40M0 20H40" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="19.75" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
          <p className="font-bodoni text-2xl md:text-4xl text-muted italic max-w-3xl leading-tight tracking-tight">
            &ldquo;Complexity is the silent enemy of excellence.
            We build to endure, we simplify to evolve.&rdquo;
          </p>
          <div className="mt-8 font-mono text-[9px] uppercase tracking-[0.5em] text-accent/40">
            CORE_PRINCIPLE_01
          </div>
        </motion.div>
      </div>
    </section>
  );
}
