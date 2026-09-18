"use client";

import { useLang } from "@/lib/use-lang";
import { COPY, PROJECTS, SITE, STACK } from "@/lib/content";
import { motion, Variants } from "framer-motion";
import { User, ArrowUpRight, ArrowRight, Terminal, FlaskConical, Layers, AtSign } from "lucide-react";

export function Portfolio() {
  const { lang, toggle } = useLang();
  const t = COPY[lang];

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.8 },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <>

      {/* DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white border-b-[2.5px] border-black [box-shadow:0px_3px_0px_#0038FF]">
        <div className="h-16 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              className="font-display text-lg md:text-xl uppercase tracking-tight text-[#0038FF] hover:text-[#0028c2] transition-colors font-bold"
              href="#top"
            >
              Felipe Brigagão
            </a>
            <span className="hidden lg:block font-code text-xs uppercase text-slate-500 font-bold tracking-wider">
              Jacareí, SP
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#work">
                {t.nav.work}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#research">
                {t.nav.research}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#about">
                {t.nav.about}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#stack">
                {t.nav.stack}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#contact">
                {t.nav.contact}
              </a>
            </nav>
            <div className="flex items-center border-l-[2px] border-black pl-4 gap-2 font-code text-xs uppercase font-bold">
              <button
                className={`${lang === "pt" ? "text-[#0038FF]" : "text-slate-500"} hover:text-[#0f172a] transition-colors cursor-pointer`}
                onClick={() => lang !== "pt" && toggle()}
              >
                PT
              </button>
              <span className="text-slate-400">/</span>
              <button
                className={`${lang === "en" ? "text-[#0038FF]" : "text-slate-500"} hover:text-[#0f172a] transition-colors cursor-pointer`}
                onClick={() => lang !== "en" && toggle()}
              >
                EN
              </button>
            </div>
            <div className="w-8 h-8 rounded-none border-[2px] border-black bg-[#0038FF] flex items-center justify-center shrink-0 [box-shadow:2px_2px_0px_#0038FF] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView()} role="button">
              <User size={18} className="text-white" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="md:hidden fixed top-0 inset-x-0 z-50 pt-safe bg-white/95 backdrop-blur-md border-b-2 border-black">
        <div className="h-12 px-3 flex items-center justify-between border-b border-black/10">
          <a className="flex items-center gap-2 group" href="#top">
            <span className="font-display font-extrabold text-[14.5px] tracking-tight uppercase text-black">
              FELIPE BRIGAGÃO
            </span>
          </a>
          <div className="flex items-center gap-1.5">
            <button 
              onClick={toggle}
              aria-label="Idioma" 
              className="h-7 px-1.5 bg-white neo-border-sm font-code text-[10px] font-bold text-black hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 transition-all" 
              type="button"
            >
              PT / EN
            </button>
            <a className="h-7 px-2.5 bg-[#0038FF] text-white neo-border-sm border-black neo-shadow-dark-sm font-code text-[10px] font-bold uppercase flex items-center gap-1 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all" href="#contact">
              <span>{lang === 'pt' ? 'CONTATO' : 'CONTACT'}</span>
            </a>
          </div>
        </div>
      </header>

      {/* MOBILE BOTTOM DOCK */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-white/95 backdrop-blur-md border-t-2 border-black">
        <div className="h-14 max-w-[430px] mx-auto px-2 flex items-center justify-between gap-1.5">
          <a className="flex-1 h-10 flex flex-col items-center justify-center gap-0.5 bg-[#0038FF] text-white neo-border-sm border-black neo-shadow-dark-sm font-code text-[9.5px] font-bold uppercase active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href="#work">
            <Terminal size={16} strokeWidth={2.5} />
            <span className="tracking-tight">{t.nav.work}</span>
          </a>
          <a className="flex-1 h-10 flex flex-col items-center justify-center gap-0.5 bg-white text-black neo-border-sm border-black font-code text-[9.5px] font-bold uppercase hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 transition-all rounded-none" href="#research">
            <FlaskConical size={16} strokeWidth={2.5} />
            <span className="tracking-tight">{t.nav.research}</span>
          </a>
          <a className="flex-1 h-10 flex flex-col items-center justify-center gap-0.5 bg-white text-black neo-border-sm border-black font-code text-[9.5px] font-bold uppercase hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 transition-all rounded-none" href="#stack">
            <Layers size={16} strokeWidth={2.5} />
            <span className="tracking-tight">{t.nav.stack}</span>
          </a>
          <a className="flex-1 h-10 flex flex-col items-center justify-center gap-0.5 bg-white text-black neo-border-sm border-black font-code text-[9.5px] font-bold uppercase hover:bg-slate-100 active:translate-x-0.5 active:translate-y-0.5 transition-all rounded-none" href="#contact">
            <AtSign size={16} strokeWidth={2.5} />
            <span className="tracking-tight">{t.nav.contact}</span>
          </a>
        </div>
      </nav>

      {/* MAIN WRAPPER */}
      <motion.main 
        variants={containerVariants} 
        initial="hidden" 
        animate="show" 
        className="w-full pt-[68px] md:pt-24 pb-[80px] md:pb-12 min-h-screen" 
        id="top"
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-2 md:py-10 space-y-12 md:space-y-24">
          
          {/* HERO SECTION */}
          <motion.section variants={sectionVariants} className="space-y-6 md:space-y-8 relative flex flex-col md:block pt-2 md:pt-0">
            
            <div className="md:hidden pointer-events-none select-none absolute right-[-8px] top-0 font-display font-black text-[76px] leading-none text-black/[0.04] z-0 tracking-tighter">
              FB//01
            </div>

            <div className="hidden md:block p-12 bg-white border-[3px] border-black [box-shadow:6px_6px_0px_#0038FF] relative overflow-hidden transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="absolute -right-10 -top-12 opacity-[0.07] pointer-events-none select-none font-display text-[220px] font-bold leading-none text-[#0038FF] transition-transform duration-500 hover:scale-105">
                FB//01
              </div>
              <div className="space-y-4 relative z-10">
                <h1 className="font-display text-6xl md:text-7xl uppercase tracking-tight text-[#0f172a] font-bold leading-none break-words">
                  FELIPE <span className="text-[#0038FF] italic underline decoration-[#0038FF] decoration-4 underline-offset-8 inline-block transition-transform duration-200 hover:-rotate-1">BRIGAGÃO</span>
                </h1>
                <p className="font-display text-3xl text-[#0038FF] font-bold tracking-tight uppercase">
                  — {t.role}
                </p>
                <p className="font-body text-lg text-[#334155] leading-relaxed max-w-3xl pt-2">
                  {t.positioning}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-[2.5px] border-black">
                <div className="flex flex-wrap items-center gap-3">
                  <a className="btn-mechanical flex items-center justify-center gap-2 py-3.5 px-6 bg-[#0038FF] text-white font-display text-lg uppercase tracking-wider font-bold border-[2.5px] border-black hover:bg-[#0028c2] [box-shadow:4px_4px_0px_#0038FF]" href="#contact">
                    {lang === "pt" ? "INICIAR CONVERSA" : "START A CONVERSATION"} <ArrowRight size={18} strokeWidth={2.5} />
                  </a>
                  <a className="btn-mechanical text-center py-3.5 px-6 bg-white border-[2px] border-black font-code text-xs uppercase tracking-wider text-[#0f172a] font-bold hover:bg-[#eff6ff] [box-shadow:3px_3px_0px_#0038FF]" href="#work">
                    {lang === "pt" ? "EXPLORAR PROJETOS" : "EXPLORE PROJECTS"}
                  </a>
                </div>
              </div>
            </div>

            <div className="md:hidden relative z-10 flex flex-col">
              <h1 className="font-display font-extrabold text-[36px] leading-[1.04] tracking-tight uppercase text-black mb-1.5">
                FELIPE <br/>
                <span className="italic text-[#0038FF] font-black">BRIGAGÃO</span>
              </h1>
              <p className="font-display font-semibold text-[16.5px] tracking-tight text-black mb-3.5 uppercase">
                — {t.role}.
              </p>
              
              <p className="font-body text-[13.5px] leading-relaxed text-black/85 mb-4">
                {t.positioning}
              </p>

              <div className="flex flex-col gap-2.5 w-full">
                <a className="w-full h-11 flex items-center justify-center gap-2 bg-[#0038FF] text-white font-code text-[12px] font-bold tracking-wider uppercase neo-border border-black neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href="#contact">
                  <span>{lang === 'pt' ? 'INICIAR CONVERSA' : 'START A CONVERSATION'}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                <a className="w-full h-11 flex items-center justify-center gap-2 bg-white text-black font-code text-[12px] font-bold tracking-wider uppercase neo-border neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href="#work">
                  <span>{lang === 'pt' ? 'EXPLORAR PROJETOS' : 'EXPLORE PROJECTS'}</span>
                  <ArrowRight size={16} strokeWidth={2.5} className="rotate-90" />
                </a>
              </div>
            </div>
          </motion.section>

          {/* PROJECTS SECTION */}
          <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants} 
            className="space-y-4 md:space-y-8" 
            id="work"
          >
            <motion.div variants={sectionVariants} className="hidden md:flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-black pb-4">
              <div>
                <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.sections.featured}</h2>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-1.5 pt-4">
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                {t.sections.featured}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 relative z-30">
              {PROJECTS.map((p) => (
                <motion.article 
                  key={p.id}
                  variants={sectionVariants}
                  className="project-card card-mechanical cursor-none bg-white neo-border md:border-[2.5px] border-black md:border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] flex flex-col justify-between rounded-none hover:bg-slate-50 transition-colors"
                >
                  <div className="border-b-2 md:border-b-[2px] border-black md:border-black bg-slate-100 md:bg-[#eff6ff] px-3 py-2 md:p-3.5 flex items-center justify-between gap-2 font-code text-xs uppercase">
                    <span className="text-black md:text-[#0038FF] font-bold text-[11px] md:text-xs">{p.title[lang]}</span>
                    <span className="px-2 md:px-2.5 py-0.5 text-white font-bold text-[9px] md:text-xs border border-black md:border-black md:[box-shadow:1.5px_1.5px_0px_#0038FF] bg-[#0038FF]">
                      {p.tag[lang]}
                    </span>
                  </div>
                  <div className="p-3.5 md:p-6 space-y-4 md:space-y-5 flex-1 bg-transparent">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {p.stack.map((s, idx) => (
                        <span key={s} className={`font-code text-[9.5px] md:text-[11px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 uppercase cursor-default ${idx === p.stack.length - 1 ? 'bg-[#0038FF] text-white border border-black' : 'bg-slate-50 md:bg-[#f8fafc] border-[1.5px] border-black/30 md:border-black text-black md:text-[#0f172a]'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-[15.5px] md:text-2xl uppercase text-black font-bold leading-snug">
                      <span className="md:text-[#0038FF]">{p.role[lang]}</span>
                    </h3>
                    <p className="font-body text-[13px] md:text-base text-black/80 md:text-[#334155] leading-relaxed">
                      {p.problem[lang]}
                    </p>
                    <p className="font-body text-[13px] md:text-base text-black/80 md:text-[#334155] leading-relaxed">
                      {p.decision[lang]}
                    </p>
                    {p.outcome && (
                      <div className="p-2.5 md:p-3.5 bg-white md:bg-[#eff6ff] neo-border-sm md:border-[1.5px] md:border-l-[4px] border-black/40 md:border-black font-code text-[12.5px] md:text-sm text-black transition-all duration-200 md:hover:bg-[#e0edff]">
                        <span className="font-semibold">{p.outcome[lang]}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t-2 md:border-t-[2px] border-black md:border-black px-3 py-1.5 md:p-3.5 bg-slate-100 md:bg-[#f8fafc] flex items-center justify-between font-code text-[9.5px] md:text-xs">
                    <div className="flex items-center gap-1 md:gap-2 text-black md:text-[#0038FF] font-extrabold md:font-bold">
                      <span className="md:hidden">■</span>
                      <span>{p.client[lang]}</span>
                    </div>
                    <span className="text-black/60 md:text-[#0f172a] font-bold">{p.year}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>

          {/* RESEARCH SECTION */}
          <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants} 
            className="space-y-4 md:space-y-6 relative z-30" 
            id="research"
          >
            <div className="hidden md:block border-b-[2.5px] border-black pb-4">
              <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.researchHeading}</h2>
            </div>
            <div className="md:hidden flex flex-col gap-1.5 pt-4">
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                {t.researchHeading}
              </h2>
            </div>

            <div className="bg-white neo-border md:border-[2.5px] border-black md:border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-10 space-y-4 md:space-y-8 rounded-none md:transition-shadow md:hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="flex flex-wrap md:grid md:grid-cols-4 gap-1.5 md:gap-2 font-code text-[9px] md:text-xs uppercase md:border-b-[2px] border-black md:border-black md:pb-5">
                <div className="px-2 py-0.5 md:p-2.5 bg-slate-100 md:bg-[#f8fafc] neo-border-sm md:border-[1.5px] md:border-black text-black md:text-[#0f172a] font-bold text-center">
                  [ ICMR — VOL. 05, № 03 ]
                </div>
                <div className="px-2 py-0.5 md:p-2.5 bg-slate-100 md:bg-[#f8fafc] neo-border-sm md:border-[1.5px] md:border-black text-black md:text-[#0f172a] font-bold text-center">
                  [ {lang === "pt" ? "DEZEMBRO / 2024" : "DECEMBER / 2024"} ]
                </div>
                <div className="px-2 py-0.5 md:p-2.5 bg-[#0038FF] text-white neo-border-sm md:border-[1.5px] border-black md:border-black font-bold text-center md:[box-shadow:1.5px_1.5px_0px_#0038FF]">
                  [ {t.paperKind} ]
                </div>
                <a className="md:hidden self-start inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 font-code text-[10.5px] font-bold text-[#0038FF] border border-black/40 active:underline" href="https://doi.org/10.54033/icmrv5n3-043" rel="noopener noreferrer" target="_blank">
                  <span>DOI: 10.54033/icmrv5n3-043</span>
                  <ArrowUpRight size={13} strokeWidth={3} />
                </a>
                <a className="hidden md:flex btn-mechanical-sm p-2.5 bg-white border-[1.5px] border-black text-[#0038FF] font-bold hover:bg-[#0038FF] hover:text-white items-center justify-center gap-1 [box-shadow:2px_2px_0px_#0038FF]" href="https://doi.org/10.54033/icmrv5n3-043" rel="noopener noreferrer" target="_blank">
                  DOI: 10.54033/icmrv5n3-043 <ArrowUpRight size={14} strokeWidth={3} />
                </a>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <h3 className="font-display font-extrabold md:font-bold text-[16.5px] md:text-3xl uppercase text-black md:text-[#0f172a] leading-tight">
                  {t.paperTitle}
                </h3>
                <p className="font-body text-[13px] md:text-base text-black/80 md:text-[#334155] leading-relaxed">
                  {t.paperAbstract}
                </p>
                <p className="font-code text-[10.5px] md:text-sm text-[#334155] leading-snug">
                  {t.paperCredits}
                </p>
              </div>
            </div>
          </motion.section>

          {/* ABOUT SECTION */}
          <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants} 
            className="space-y-4 md:space-y-6 relative z-30" 
            id="about"
          >
            <div className="hidden md:block border-b-[2.5px] border-black pb-4">
              <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.sections.about}</h2>
            </div>
            <div className="md:hidden pt-4">
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                {t.sections.about}
              </h2>
            </div>

            <div className="bg-white neo-border md:border-[2.5px] border-black md:border-black neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-10 space-y-3 md:space-y-5 rounded-none">
              <p className="font-body text-[13px] md:text-lg text-black/80 md:text-[#334155] leading-relaxed max-w-3xl">
                {t.aboutP1}
              </p>
              <p className="font-body text-[13px] md:text-lg text-black/80 md:text-[#334155] leading-relaxed max-w-3xl">
                {t.aboutP2}
              </p>
            </div>
          </motion.section>

          {/* STACK SECTION */}
          <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants} 
            className="space-y-4 md:space-y-6 relative z-30" 
            id="stack"
          >
            <motion.div variants={sectionVariants} className="hidden md:block border-b-[2.5px] border-black pb-4">
              <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.stackHeading}</h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-1.5 pt-4">
              <div className="self-start inline-flex items-center px-2 py-0.5 bg-slate-200 neo-border-sm">
                <span className="font-code text-[9px] font-bold text-black uppercase">
                  {lang === "pt" ? "FRAMEWORKS & INFRAESTRUTURA" : "FRAMEWORKS & INFRASTRUCTURE"}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                {t.stackHeading}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6">
              {STACK.map((s) => (
                <motion.div variants={sectionVariants} key={s.category.en} className="bg-white p-3.5 md:p-0 neo-border md:border-[2.5px] md:border-black neo-shadow-blue md:[box-shadow:5px_5px_0px_#0038FF] flex flex-col gap-1 md:gap-0 rounded-none md:card-interactive-subtle">
                  <div className="flex items-center justify-between md:p-3 md:bg-[#eff6ff] md:border-b-[2px] md:border-black">
                    <span className="font-code text-[11px] md:text-xs font-bold text-[#0038FF] uppercase">{s.category[lang]}</span>
                  </div>
                  
                  <p className="md:hidden font-body text-[13px] text-black font-medium leading-snug">
                    {s.items.join(", ")}
                  </p>

                  <ul className="hidden md:flex p-5 space-y-3 font-code text-sm text-[#0f172a] font-medium flex-col flex-1">
                    {s.items.map((item, i) => (
                      <li key={item} className={`flex items-center gap-2 ${i !== s.items.length - 1 ? 'border-b border-slate-200 pb-2' : ''} transition-transform duration-150 hover:translate-x-1`}>
                        <span className="w-2 h-2 bg-[#0038FF]"></span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CONTACT SECTION */}
          <motion.section 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants} 
            className="space-y-4 md:space-y-6 md:pb-12 relative z-30" 
            id="contact"
          >
            <motion.div variants={sectionVariants} className="hidden md:block bg-white border-[3px] border-black [box-shadow:6px_6px_0px_#0038FF] p-12 space-y-8 transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="space-y-2">
                <span className="font-code text-xs text-[#0038FF] tracking-widest uppercase font-bold">
                  {t.sections.contact}
                </span>
                <h2 className="font-display text-5xl uppercase tracking-tight text-[#0f172a] font-bold">
                  {t.contactHeading}
                </h2>
                <p className="font-body text-lg text-[#334155] max-w-2xl leading-relaxed">
                  {t.contactLead}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-black hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={`mailto:${SITE.email}`}>
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">EMAIL</span>
                    <span className="font-display text-xl text-[#0f172a] group-hover:text-[#0038FF] transition-colors block mt-2 font-bold break-all">
                      {SITE.email}
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[#0038FF] font-code text-xs font-bold">
                    <span>{lang === "pt" ? "DISPARAR MENSAGEM" : "SEND MESSAGE"}</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-1"><ArrowRight size={14} strokeWidth={3} /></span>
                  </div>
                </a>
                
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-black hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={SITE.social.linkedin} rel="noreferrer" target="_blank">
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">LINKEDIN</span>
                    <span className="font-display text-xl text-[#0f172a] group-hover:text-[#0038FF] transition-colors block mt-2 font-bold">
                      /in/felibrisantos
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[#0038FF] font-code text-xs font-bold">
                    <span>{lang === "pt" ? "REDE PROFISSIONAL" : "PROFESSIONAL NETWORK"}</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight size={14} strokeWidth={3} /></span>
                  </div>
                </a>
                
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-black hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={SITE.social.github} rel="noreferrer" target="_blank">
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">GITHUB</span>
                    <span className="font-display text-xl text-[#0f172a] group-hover:text-[#0038FF] transition-colors block mt-2 font-bold">
                      @felibrisantos
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[#0038FF] font-code text-xs font-bold">
                    <span>{lang === "pt" ? "REPOSITÓRIOS & CÓDIGO" : "REPOS & CODE"}</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight size={14} strokeWidth={3} /></span>
                  </div>
                </a>
              </div>

              <div className="pt-6 border-t-[2px] border-black flex items-center justify-between font-code text-sm text-[#334155]">
                <div className="font-bold text-[#0f172a]">
                  © {new Date().getFullYear()} FELIPE BRIGAGÃO · {t.role.toUpperCase()}
                </div>
                <div className="flex items-center gap-4 font-bold">
                  <span className="text-[#0f172a]">{lang === "pt" ? "Jacareí, SP" : "Jacareí, SP, Brazil"}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-3.5 pt-4">
              <div className="flex flex-col gap-1.5">
                <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                  {t.contactHeading}
                </h2>
                <p className="font-body text-[13px] leading-relaxed text-black/80">
                  {t.contactLead}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={`mailto:${SITE.email}`}>
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">EMAIL</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">{SITE.email}</span>
                  </div>
                  <div className="bg-[#0038FF] text-white px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'DISPARAR' : 'SEND'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>
                
                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={SITE.social.linkedin} rel="noopener noreferrer" target="_blank">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">LINKEDIN</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">/in/felibrisantos</span>
                  </div>
                  <div className="bg-slate-200 text-black px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'PERFIL' : 'PROFILE'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>

                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={SITE.social.github} rel="noopener noreferrer" target="_blank">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">GITHUB</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">@felibrisantos</span>
                  </div>
                  <div className="bg-slate-200 text-black px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'REPOSITÓRIOS' : 'REPOS'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>
              </div>

              <div className="bg-black text-white p-4 neo-border neo-shadow-blue flex flex-col gap-2 mt-1 rounded-none border-black">
                <p className="font-code text-[11.5px] font-bold uppercase text-white">
                  © {new Date().getFullYear()} FELIPE BRIGAGÃO • {lang === 'pt' ? 'ENGENHARIA DE PRODUTO & IA' : 'PRODUCT ENGINEERING & AI'}
                </p>
                <div className="h-px w-full bg-white/20"></div>
                <p className="font-code text-[9.5px] text-white/70 uppercase">
                  {lang === 'pt' ? 'Jacareí, SP' : 'Jacareí, SP, Brazil'}
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </motion.main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden md:flex w-full bg-white border-t-[2.5px] border-black [box-shadow:0px_-2px_0px_#0038FF]">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-code text-xs uppercase text-[#334155]">
          <div className="font-bold text-[#0f172a]">
            <span>© {new Date().getFullYear()} Felipe Brigagão. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-bold">
            <span className="text-[#0f172a]">Jacareí, SP</span>
            <span className="text-slate-300 hidden md:inline">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4 transition-colors" href={SITE.social.github} rel="noreferrer" target="_blank">GitHub</a>
            <span className="text-slate-300 hidden md:inline">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4 transition-colors" href={SITE.social.linkedin} rel="noreferrer" target="_blank">LinkedIn</a>
            <span className="text-slate-300 hidden md:inline">/</span>
            <a className="text-[#0038FF] hover:underline underline-offset-4 transition-colors" href={`mailto:${SITE.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
