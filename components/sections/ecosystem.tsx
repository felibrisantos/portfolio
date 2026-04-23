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
      className="px-6 md:px-12 py-24 md:py-32 border-t-[4px] border-accent"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="font-sora text-[11px] uppercase tracking-[0.3em] text-muted block mb-4">
            01 // Projetos
          </span>
          <h2 className="font-bodoni text-5xl md:text-7xl tracking-tight">
            Ecossistema<span className="text-accent">.</span>
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
              className="border-t border-faint py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group"
            >
              <div className="md:col-span-1 flex items-start">
                <span className="font-bodoni text-3xl md:text-4xl text-faint group-hover:text-accent transition-colors duration-500">
                  {project.number}
                </span>
              </div>

              <div className="md:col-span-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {project.tag}
                </span>
                <h3 className="font-bodoni text-2xl md:text-3xl tracking-tight group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="md:col-span-4 flex items-start">
                <p className="text-muted leading-relaxed text-sm md:text-base font-sora">
                  {project.description}
                </p>
              </div>

              <div className="md:col-span-3 flex items-start flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wider uppercase px-2 py-1 border border-faint text-muted group-hover:border-accent/30 transition-colors"
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
          className="border-t border-faint py-10 md:py-14"
        >
          <div className="md:col-span-1 flex items-start mb-3">
            <span className="font-bodoni text-3xl md:text-4xl text-accent">
              §
            </span>
          </div>
          <p className="font-bodoni text-xl md:text-2xl text-muted italic max-w-xl leading-relaxed">
            &ldquo;A complexidade é o inimigo silencioso da excelência.
            Construímos para durar, simplificamos para evoluir.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
