"use client";

import { useLang } from "@/lib/use-lang";
import { COPY, PROJECTS, SITE, STACK } from "@/lib/content";
import { motion } from "framer-motion";
import { User, ArrowUpRight, ArrowRight, Terminal, FlaskConical, Layers, AtSign } from "lucide-react";

export function Portfolio() {
  const { lang, toggle } = useLang();
  const t = COPY[lang];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 280, damping: 24, mass: 0.8 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  return (
    <>

      {/* DESKTOP HEADER */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-50 bg-white border-b-[2.5px] border-[#0038FF] [box-shadow:0px_3px_0px_#0038FF]">
        <div className="h-16 w-full max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <a
              className="font-display text-lg md:text-xl uppercase tracking-tight text-[#0038FF] hover:text-[#0028c2] transition-colors font-bold"
              href="#top"
            >
              Felipe Brigagão
            </a>
            <div className="hidden lg:flex items-center gap-2 border-[2px] border-[#0038FF] px-2.5 py-1 bg-[#eff6ff] [box-shadow:2px_2px_0px_#0038FF] transition-transform duration-150 hover:-translate-y-0.5">
              <span className="w-2 h-2 bg-[#0038FF] beacon-pulse relative"></span>
              <span className="font-code text-xs uppercase text-[#0038FF] font-bold tracking-wider">
                {lang === "pt" ? "Disponível Q3-Q4 2026 / São Paulo" : "Available H2 2026 / São Paulo"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#work">
                [01] {t.nav.work}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#research">
                [02] {t.nav.research}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#stack">
                [03] {t.nav.stack}
              </a>
              <a className="font-code text-xs uppercase font-bold text-[#0f172a] hover:text-[#0038FF] transition-all hover:translate-y-[-1px] tracking-wider" href="#contact">
                [04] {t.nav.contact}
              </a>
            </nav>
            <div className="flex items-center border-l-[2px] border-[#0038FF] pl-4 gap-2 font-code text-xs uppercase font-bold">
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
            <div className="w-8 h-8 rounded-none border-[2px] border-[#0038FF] bg-[#0038FF] flex items-center justify-center shrink-0 [box-shadow:2px_2px_0px_#0038FF] transition-transform duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView()} role="button">
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
            <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#0038FF]/10 border border-[#0038FF]/40 font-code text-[8.5px] font-bold text-[#0038FF] uppercase">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0038FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0038FF]"></span>
              </span>
              <span>SYS_LIVE</span>
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
              <span>[04] {lang === 'pt' ? 'CONTATO' : 'CONTACT'}</span>
            </a>
          </div>
        </div>
        <div className="bg-[#f0edec]/90 px-3 py-1.5 flex items-center justify-between font-code text-[9.5px] font-bold text-black border-t border-black/5 overflow-hidden">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[#0038FF] font-black">■</span>
            <span className="truncate">№ 001 — INDEX</span>
            <span className="text-black/30">|</span>
            <span className="text-black/70">SP [UTC-3]</span>
          </div>
          <div className="flex items-center gap-1 shrink-0 font-bold text-[#0038FF] bg-white px-1.5 py-0.5 border border-[#0038FF]/30">
            <span>STATUS: ■ {lang === 'pt' ? 'OPERACIONAL' : 'OPERATIONAL'}</span>
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
        className="w-full pt-[96px] md:pt-24 pb-[80px] md:pb-12 min-h-screen" 
        id="top"
      >
        <div className="w-full max-w-[1360px] mx-auto px-4 md:px-8 py-2 md:py-10 space-y-12 md:space-y-24">
          
          {/* DESKTOP LIVE TELEMETRY TICKER BAR */}
          <motion.header variants={sectionVariants} className="hidden md:flex w-full bg-white border-[2.5px] border-[#0038FF] p-2 [box-shadow:4px_4px_0px_#0038FF] items-center justify-between gap-3 overflow-hidden">
            <div className="flex-1 overflow-hidden bg-[#0038FF] text-white border-[2px] border-black flex items-center relative h-10">
              {/* Infinite Marquee */}
              <div className="animate-marquee flex items-center absolute left-0 h-full">
                <div className="flex items-center whitespace-nowrap">
                  {[...Array(6)].map((_, i) => (
                    <span key={i} className="flex items-center font-code text-[11px] tracking-[0.1em] uppercase font-bold mx-6">
                      [SYS_LIVE] // {lang === "pt" ? "TELEMETRIA ATIVA / SÃO PAULO, BR / LATÊNCIA < 40MS" : "ACTIVE TELEMETRY / SÃO PAULO, BR / LATENCY < 40MS"}
                      <span className="w-2 h-2 bg-white beacon-pulse shrink-0 ml-12"></span>
                    </span>
                  ))}
                </div>
                <div className="flex items-center whitespace-nowrap">
                  {[...Array(6)].map((_, i) => (
                    <span key={`dup-${i}`} className="flex items-center font-code text-[11px] tracking-[0.1em] uppercase font-bold mx-6">
                      [SYS_LIVE] // {lang === "pt" ? "TELEMETRIA ATIVA / SÃO PAULO, BR / LATÊNCIA < 40MS" : "ACTIVE TELEMETRY / SÃO PAULO, BR / LATENCY < 40MS"}
                      <span className="w-2 h-2 bg-white beacon-pulse shrink-0 ml-12"></span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* Nav anchors on desktop ticket bar */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 relative z-10 bg-white pl-2">
              <a className="btn-mechanical-sm px-3 py-1.5 bg-white border-[2px] border-[#0038FF] hover:bg-[#eff6ff] hover:text-[#0038FF] font-code text-xs uppercase tracking-wider text-[#0f172a] font-bold [box-shadow:2px_2px_0px_#0038FF]" href="#work">
                [01] {t.nav.work}
              </a>
              <a className="btn-mechanical-sm px-3 py-1.5 bg-[#0038FF] border-[2px] border-[#0038FF] font-code text-xs uppercase tracking-wider text-white hover:bg-[#0028c2] [box-shadow:2px_2px_0px_#0038FF] font-bold" href="#contact">
                [04] {t.nav.contact}
              </a>
            </div>
          </motion.header>

          {/* HERO SECTION */}
          <motion.section variants={sectionVariants} className="space-y-6 md:space-y-8 relative flex flex-col md:block pt-2 md:pt-0">
            
            <div className="hidden md:grid w-full bg-white border-[2.5px] border-[#0038FF] [box-shadow:4px_4px_0px_#0038FF] grid-cols-4 divide-x divide-[#0038FF] font-code text-sm">
              <div className="p-3.5 flex items-center justify-between bg-white transition-colors duration-150 hover:bg-[#eff6ff]">
                <span className="text-[#0038FF] font-bold">{lang === "pt" ? "№ REGISTRO" : "REGISTRY №"}</span>
                <span className="text-[#0f172a] font-bold">001 — INDEX</span>
              </div>
              <div className="p-3.5 flex items-center justify-between bg-white transition-colors duration-150 hover:bg-[#eff6ff]">
                <span className="text-[#0038FF] font-bold">{lang === "pt" ? "ESPECIALIDADE" : "SPECIALTY"}</span>
                <span className="text-[#0f172a] font-bold">FULLSTACK & AI ENG</span>
              </div>
              <div className="p-3.5 flex items-center justify-between bg-white transition-colors duration-150 hover:bg-[#eff6ff]">
                <span className="text-[#0038FF] font-bold">BASE</span>
                <span className="text-[#0f172a] font-bold">SÃO PAULO [UTC-3]</span>
              </div>
              <div className="p-3.5 flex items-center justify-between bg-[#eff6ff]">
                <span className="text-[#0038FF] font-bold">STATUS</span>
                <span className="text-[#0038FF] font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#0038FF] beacon-pulse inline-block shrink-0"></span>
                  {lang === "pt" ? "OPERACIONAL" : "OPERATIONAL"}
                </span>
              </div>
            </div>

            <div className="md:hidden pointer-events-none select-none absolute right-[-8px] top-0 font-display font-black text-[76px] leading-none text-black/[0.04] z-0 tracking-tighter">
              FB//01
            </div>

            <div className="md:hidden relative z-10 self-start inline-flex items-center gap-1.5 px-2.5 py-1 bg-white neo-border neo-shadow-dark-sm mb-3">
              <span className="w-2 h-2 bg-[#0038FF] shrink-0"></span>
              <span className="font-code text-[9px] tracking-wider text-black font-bold uppercase leading-tight">
                [{lang === "pt" ? "ARQUITETURA DE SISTEMAS CRÍTICOS & MODELOS GENERATIVOS" : "CRITICAL SYSTEMS ARCHITECTURE & GENERATIVE MODELS"}]
              </span>
            </div>

            <div className="hidden md:block p-12 bg-white border-[3px] border-[#0038FF] [box-shadow:6px_6px_0px_#0038FF] relative overflow-hidden transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="absolute -right-10 -top-12 opacity-[0.07] pointer-events-none select-none font-display text-[220px] font-bold leading-none text-[#0038FF] transition-transform duration-500 hover:scale-105">
                FB//01
              </div>
              <div className="space-y-4 relative z-10">
                <div className="inline-block px-3 py-1 bg-[#eff6ff] border-[2px] border-[#0038FF] font-code text-xs text-[#0038FF] tracking-widest uppercase font-bold [box-shadow:2px_2px_0px_#0038FF]">
                  {lang === "pt" ? "ARQUITETURA DE SISTEMAS CRÍTICOS & MODELOS GENERATIVOS" : "CRITICAL SYSTEMS ARCHITECTURE & GENERATIVE MODELS"}
                </div>
                <h1 className="font-display text-6xl md:text-7xl uppercase tracking-tight text-[#0f172a] font-bold leading-none break-words">
                  FELIPE <span className="text-[#0038FF] italic underline decoration-[#0038FF] decoration-4 underline-offset-8 inline-block transition-transform duration-200 hover:-rotate-1">BRIGAGÃO</span>
                </h1>
                <p className="font-display text-3xl text-[#0038FF] font-bold tracking-tight uppercase">
                  — {t.role}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-[2.5px] border-[#0038FF] grid grid-cols-12 gap-6 items-center">
                <div className="col-span-8 bg-[#f8fafc] border-[2px] border-[#0038FF] p-6 [box-shadow:4px_4px_0px_#0038FF] transition-transform duration-200 hover:-translate-y-0.5">
                  <p className="font-body text-lg text-[#0f172a] font-semibold leading-relaxed">
                    “{t.positioning}”
                  </p>
                  <p className="mt-3 font-body text-base text-[#334155] leading-relaxed">
                    {lang === "pt" 
                      ? <>Engenharia de ponta a ponta: pipelines multi-agente, telemetria em tempo real e orquestração de microsserviços em produção ativa para <strong className="text-[#0038FF] font-bold">Heineken</strong>, <strong className="text-[#0038FF] font-bold">FEMSA</strong> e ecossistemas B2B de alta escala.</>
                      : <>End-to-end engineering: multi-agent pipelines, real-time telemetry, and microservices orchestration in active production for <strong className="text-[#0038FF] font-bold">Heineken</strong>, <strong className="text-[#0038FF] font-bold">FEMSA</strong>, and high-scale B2B ecosystems.</>
                    }
                  </p>
                </div>
                <div className="col-span-4 flex flex-col gap-3">
                  <a className="btn-mechanical flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#0038FF] text-white font-display text-lg uppercase tracking-wider font-bold border-[2.5px] border-[#0038FF] hover:bg-[#0028c2] [box-shadow:4px_4px_0px_#0038FF]" href="#contact">
                    {lang === "pt" ? "INICIAR CONVERSA" : "START A CONVERSATION"} <ArrowRight size={18} strokeWidth={2.5} />
                  </a>
                  <a className="btn-mechanical w-full text-center py-3 px-6 bg-white border-[2px] border-[#0038FF] font-code text-xs uppercase tracking-wider text-[#0f172a] font-bold hover:bg-[#eff6ff] [box-shadow:3px_3px_0px_#0038FF]" href="#work">
                    {lang === "pt" ? "EXPLORAR PROJETOS" : "EXPLORE PROJECTS"} [04] ↓
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
              
              <div className="w-full bg-white neo-border-blue p-2.5 flex items-center justify-between font-code text-[10px] font-bold text-black mb-4 neo-shadow-blue-sm">
                <span className="flex items-center gap-1 text-[#0038FF]">
                  <span className="h-1.5 w-1.5 bg-[#0038FF]"></span>
                  <span>{lang === 'pt' ? 'DISPONÍVEL Q3-Q4 2026' : 'AVAILABLE H2 2026'}</span>
                </span>
                <span className="text-black/60 font-semibold">SÃO PAULO // BR</span>
              </div>

              <div className="bg-white neo-border neo-shadow-blue p-4 flex flex-col gap-3 mb-4 rounded-none">
                <div className="self-start -mt-6 ml-auto mr-0 bg-[#0038FF] text-white font-code text-[9.5px] font-bold px-2.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_#000]">
                  MANIFESTO // 01
                </div>
                <p className="font-display font-bold italic text-[16px] leading-snug text-black">
                  “{t.positioning}”
                </p>
                <div className="h-[1.5px] w-full bg-black/10"></div>
                <p className="font-body text-[13px] leading-relaxed text-black/85 font-normal">
                  {lang === "pt" 
                    ? <>Engenharia de ponta a ponta: pipelines multi-agente, telemetria em tempo real e orquestração de microsserviços em produção ativa para Heineken, FEMSA e ecossistemas B2B de alta escala.</>
                    : <>End-to-end engineering: multi-agent pipelines, real-time telemetry, and microservices orchestration in active production for Heineken, FEMSA, and high-scale B2B ecosystems.</>
                  }
                </p>
                <div className="pt-1 flex items-center justify-between font-code text-[9.5px] text-black/60 border-t border-black/10">
                  <span>2026/S2 • SÃO PAULO, BR</span>
                  <span className="text-[#0038FF] font-bold">FULL-CYCLE DEV</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 w-full">
                <a className="w-full h-11 flex items-center justify-center gap-2 bg-[#0038FF] text-white font-code text-[12px] font-bold tracking-wider uppercase neo-border border-black neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href="#contact">
                  <span>{lang === 'pt' ? 'INICIAR CONVERSA' : 'START A CONVERSATION'}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </a>
                <a className="w-full h-11 flex items-center justify-center gap-2 bg-white text-black font-code text-[12px] font-bold tracking-wider uppercase neo-border neo-shadow-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href="#work">
                  <span>{lang === 'pt' ? 'EXPLORAR PROJETOS' : 'EXPLORE PROJECTS'} [04]</span>
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
            <motion.div variants={sectionVariants} className="hidden md:flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-[#0038FF] pb-4">
              <div>
                <span className="font-code text-xs text-[#0038FF] uppercase tracking-widest block font-bold">§ 01 // {lang === "pt" ? "TELEMETRIA DE CASOS" : "CASE TELEMETRY"}</span>
                <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.sections.featured}</h2>
              </div>
              <div className="flex items-center gap-2 font-code text-sm text-[#0f172a] font-bold border-[2px] border-[#0038FF] px-3 py-1.5 bg-[#eff6ff] [box-shadow:2px_2px_0px_#0038FF] transition-transform duration-150 hover:-translate-y-0.5">
                <span className="w-2.5 h-2.5 bg-[#0038FF] beacon-pulse relative shrink-0"></span>
                <span>{PROJECTS.length} {lang === "pt" ? "SISTEMAS HOMOLOGADOS EM PRODUÇÃO" : "SYSTEMS IN PRODUCTION"}</span>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-1.5 pt-4">
              <div className="self-start inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#0038FF]/10 neo-border-sm border-[#0038FF]">
                <span className="w-1.5 h-1.5 bg-[#0038FF] shrink-0"></span>
                <span className="font-code text-[9px] font-bold text-[#0038FF] uppercase tracking-wide">
                  ■ {PROJECTS.length} {lang === "pt" ? "SISTEMAS EM PRODUÇÃO" : "SYSTEMS IN PRODUCTION"}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                § 01 // {lang === "pt" ? "TELEMETRIA DE CASOS: TRABALHO EM DESTAQUE" : "CASE TELEMETRY: FEATURED WORK"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 relative z-30">
              {PROJECTS.map((p, i) => (
                <motion.article 
                  key={p.id}
                  variants={sectionVariants}
                  className="project-card card-mechanical cursor-none bg-white neo-border md:border-[2.5px] border-black md:border-[#0038FF] neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] flex flex-col justify-between rounded-none hover:bg-slate-50 transition-colors"
                >
                  <div className="border-b-2 md:border-b-[2px] border-black md:border-[#0038FF] bg-slate-100 md:bg-[#eff6ff] px-3 py-2 md:p-3.5 flex items-center justify-between gap-2 font-code text-xs uppercase">
                    <span className="text-black md:text-[#0038FF] font-bold text-[11px] md:text-xs">[{String(i + 1).padStart(2, "0")}] {p.title[lang]}</span>
                    <span className="px-2 md:px-2.5 py-0.5 text-white font-bold text-[9px] md:text-xs border border-black md:border-[#0038FF] md:[box-shadow:1.5px_1.5px_0px_#0038FF] bg-[#0038FF]">
                      {p.tag[lang]}
                    </span>
                  </div>
                  <div className="p-3.5 md:p-6 space-y-4 md:space-y-5 flex-1 bg-transparent">
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {p.stack.map((s, idx) => (
                        <span key={s} className={`font-code text-[9.5px] md:text-[11px] font-bold px-1.5 md:px-2 py-0.5 md:py-1 uppercase cursor-default ${idx === p.stack.length - 1 ? 'bg-[#0038FF] text-white border border-[#0038FF]' : 'bg-slate-50 md:bg-[#f8fafc] border-[1.5px] border-black/30 md:border-[#0038FF] text-black md:text-[#0f172a]'}`}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-display text-[15.5px] md:text-2xl uppercase text-black font-bold leading-snug">
                      <span className="md:text-[#0038FF]">{p.role[lang]}</span>
                    </h3>
                    <p className="font-body text-[13px] md:text-base text-black/80 md:text-[#334155] leading-relaxed">
                      {p.summary[lang]}
                    </p>
                    <div className="p-2.5 md:p-3.5 bg-white md:bg-[#eff6ff] neo-border-sm md:border-[1.5px] md:border-l-[4px] border-black/40 md:border-[#0038FF] font-code text-[12.5px] md:text-sm text-black transition-all duration-200 md:hover:bg-[#e0edff]">
                      <span className="text-black md:text-[#0038FF] font-bold text-[9.5px] md:text-xs block md:inline mb-0.5 md:mb-0">{lang === "pt" ? "IMPACTO:" : "IMPACT:"}</span> <span className="font-semibold">{p.outcome[lang]}</span>
                    </div>
                  </div>
                  <div className="border-t-2 md:border-t-[2px] border-black md:border-[#0038FF] px-3 py-1.5 md:p-3.5 bg-slate-100 md:bg-[#f8fafc] flex items-center justify-between font-code text-[9.5px] md:text-xs">
                    <div className="flex items-center gap-1 md:gap-2 text-black md:text-[#0038FF] font-extrabold md:font-bold">
                      <span className="hidden md:inline-block w-2 h-2 bg-[#0038FF] beacon-pulse relative shrink-0"></span>
                      <span className="md:hidden">■</span>
                      <span>{p.client[lang]}</span>
                    </div>
                    <span className="text-black/60 md:text-[#0f172a] font-bold">{p.year} // SYSTEM</span>
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
            <div className="hidden md:block border-b-[2.5px] border-[#0038FF] pb-4">
              <span className="font-code text-xs text-[#0038FF] uppercase tracking-widest block font-bold">§ 02 // {lang === "pt" ? "PRODUÇÃO CIENTÍFICA & MODELAGEM" : "SCIENTIFIC RESEARCH & MODELING"}</span>
              <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.researchHeading}</h2>
            </div>
            <div className="md:hidden flex flex-col gap-1.5 pt-4">
              <div className="self-start inline-flex items-center px-2 py-0.5 bg-slate-200 neo-border-sm">
                <span className="font-code text-[9px] font-bold text-black uppercase">
                  {lang === "pt" ? "INDEXAÇÃO ACADÊMICA INTERNACIONAL" : "INTERNATIONAL ACADEMIC INDEXING"}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                § 02 // {lang === "pt" ? "PRODUÇÃO CIENTÍFICA: PESQUISA INDEXADA" : "SCIENTIFIC PRODUCTION: INDEXED RESEARCH"}
              </h2>
            </div>

            <div className="bg-white neo-border md:border-[2.5px] border-black md:border-[#0038FF] neo-shadow-blue md:[box-shadow:6px_6px_0px_#0038FF] p-4 md:p-10 space-y-4 md:space-y-8 rounded-none md:transition-shadow md:hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="flex flex-wrap md:grid md:grid-cols-4 gap-1.5 md:gap-2 font-code text-[9px] md:text-xs uppercase md:border-b-[2px] border-black md:border-[#0038FF] md:pb-5">
                <div className="px-2 py-0.5 md:p-2.5 bg-slate-100 md:bg-[#f8fafc] neo-border-sm md:border-[1.5px] md:border-[#0038FF] text-black md:text-[#0f172a] font-bold text-center">
                  [ ICMR — VOL. 05, № 03 ]
                </div>
                <div className="px-2 py-0.5 md:p-2.5 bg-slate-100 md:bg-[#f8fafc] neo-border-sm md:border-[1.5px] md:border-[#0038FF] text-black md:text-[#0f172a] font-bold text-center">
                  [ {lang === "pt" ? "DEZEMBRO / 2024" : "DECEMBER / 2024"} ]
                </div>
                <div className="px-2 py-0.5 md:p-2.5 bg-[#0038FF] text-white neo-border-sm md:border-[1.5px] border-black md:border-[#0038FF] font-bold text-center md:[box-shadow:1.5px_1.5px_0px_#0038FF]">
                  [ {t.paperKind} ]
                </div>
                <a className="md:hidden self-start inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 font-code text-[10.5px] font-bold text-[#0038FF] border border-[#0038FF]/40 active:underline" href="https://doi.org/10.54033/icmrv5n3-043" rel="noopener noreferrer" target="_blank">
                  <span>DOI: 10.54033/icmrv5n3-043</span>
                  <ArrowUpRight size={13} strokeWidth={3} />
                </a>
                <a className="hidden md:flex btn-mechanical-sm p-2.5 bg-white border-[1.5px] border-[#0038FF] text-[#0038FF] font-bold hover:bg-[#0038FF] hover:text-white items-center justify-center gap-1 [box-shadow:2px_2px_0px_#0038FF]" href="https://doi.org/10.54033/icmrv5n3-043" rel="noopener noreferrer" target="_blank">
                  DOI: 10.54033/icmrv5n3-043 <ArrowUpRight size={14} strokeWidth={3} />
                </a>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="lg:col-span-8 space-y-3 md:space-y-4">
                  <h3 className="font-display font-extrabold md:font-bold text-[16.5px] md:text-3xl uppercase text-black md:text-[#0f172a] leading-tight">
                    {t.paperTitle}
                  </h3>
                  <p className="font-body text-[13px] md:text-base text-black/80 md:text-[#334155] leading-relaxed">
                    {t.paperAbstract}
                  </p>
                  <div className="md:hidden bg-slate-50 px-3 py-2 neo-border-sm">
                    <p className="font-code text-[10.5px] font-bold text-black leading-snug">
                      {lang === "pt" ? "AUTORES:" : "AUTHORS:"} Santos, F. B. • Stekel, T. R. C. // {lang === "pt" ? "Publicado e indexado internacionalmente." : "Internationally indexed and published."}
                    </p>
                  </div>
                  <p className="hidden md:block font-code text-sm text-[#0038FF] font-bold">
                    {lang === "pt" ? "AUTORES:" : "AUTHORS:"} Santos, F. B. · Stekel, T. R. C. // {lang === "pt" ? "Publicado e indexado internacionalmente." : "Internationally indexed and published."}
                  </p>
                </div>
                
                <div className="md:hidden bg-[#0038FF] text-white p-3.5 neo-border border-black neo-shadow-dark flex flex-col gap-1.5 rounded-none">
                  <span className="font-code text-[9.5px] uppercase tracking-wider font-bold text-white/80">
                    {lang === "pt" ? "MÉTRICA DE VALIDAÇÃO" : "VALIDATION METRIC"}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display font-extrabold text-[34px] leading-none tracking-tight">R² &gt; 0.90</span>
                    <span className="font-code text-[9.5px] font-bold uppercase bg-white text-[#0038FF] px-1.5 py-0.5 border border-black">{lang === 'pt' ? 'ESTIMADO' : 'ESTIMATED'}</span>
                  </div>
                  <p className="font-body text-[12px] text-white/90 font-medium leading-normal pt-1.5 border-t border-white/20">
                    {lang === "pt" ? "Precisão superior estatisticamente comprovada em relação a modelos econométricos lineares clássicos e benchmarks ARIMA." : "Statistically proven superior accuracy compared to classical linear econometric models and ARIMA benchmarks."}
                  </p>
                </div>

                <div className="hidden md:block card-interactive-subtle lg:col-span-4 bg-[#eff6ff] border-[2px] border-[#0038FF] p-6 [box-shadow:4px_4px_0px_#0038FF] space-y-3">
                  <span className="font-code text-xs text-[#0f172a] uppercase block font-bold">{lang === "pt" ? "MÉTRICA DE VALIDAÇÃO" : "VALIDATION METRIC"}</span>
                  <div className="font-display text-5xl text-[#0038FF] font-bold tracking-tight">
                    R² &gt; 0.90
                  </div>
                  <p className="font-body text-sm text-[#334155] leading-relaxed">
                    {lang === "pt" ? "Precisão superior estatisticamente comprovada em relação a modelos econométricos lineares clássicos e benchmarks ARIMA." : "Statistically proven superior accuracy compared to classical linear econometric models and ARIMA benchmarks."}
                  </p>
                </div>
              </div>
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
            <motion.div variants={sectionVariants} className="hidden md:block border-b-[2.5px] border-[#0038FF] pb-4">
              <span className="font-code text-xs text-[#0038FF] uppercase tracking-widest block font-bold">§ 03 // {lang === "pt" ? "MATRIZ TECNOLÓGICA" : "TECHNOLOGICAL MATRIX"}</span>
              <h2 className="font-display text-4xl uppercase text-[#0f172a] tracking-tight font-bold">{t.stackHeading}</h2>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-1.5 pt-4">
              <div className="self-start inline-flex items-center px-2 py-0.5 bg-slate-200 neo-border-sm">
                <span className="font-code text-[9px] font-bold text-black uppercase">
                  {lang === "pt" ? "FRAMEWORKS & INFRAESTRUTURA" : "FRAMEWORKS & INFRASTRUCTURE"}
                </span>
              </div>
              <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                § 03 // {lang === "pt" ? "MATRIZ TECNOLÓGICA: STACK EM OPERAÇÃO (2026)" : "TECHNOLOGICAL MATRIX: STACK IN OPERATION (2026)"}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-6">
              {STACK.map((s, idx) => (
                <motion.div variants={sectionVariants} key={s.category.en} className="bg-white p-3.5 md:p-0 neo-border md:border-[2.5px] md:border-[#0038FF] neo-shadow-blue md:[box-shadow:5px_5px_0px_#0038FF] flex flex-col gap-1 md:gap-0 rounded-none md:card-interactive-subtle">
                  <div className="flex items-center justify-between md:p-3 md:bg-[#eff6ff] md:border-b-[2px] md:border-[#0038FF]">
                    <span className="font-code text-[11px] md:text-xs font-bold text-[#0038FF] uppercase">[{String(idx + 1).padStart(2, '0')}] {s.category[lang]}</span>
                    <span className="font-code text-[9px] md:text-xs text-black/60 md:text-slate-500 font-bold uppercase md:font-semibold">CLI_0{idx + 1}</span>
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
            <motion.div variants={sectionVariants} className="hidden md:block bg-white border-[3px] border-[#0038FF] [box-shadow:6px_6px_0px_#0038FF] p-12 space-y-8 transition-shadow duration-300 hover:[box-shadow:8px_8px_0px_#0038FF]">
              <div className="space-y-2">
                <span className="font-code text-xs text-[#0038FF] tracking-widest uppercase font-bold">
                  § 04 // {lang === "pt" ? "PROTOCOLO DE CONEXÃO DIRETA" : "DIRECT CONNECTION PROTOCOL"}
                </span>
                <h2 className="font-display text-5xl uppercase tracking-tight text-[#0f172a] font-bold">
                  {t.contactHeading}
                </h2>
                <p className="font-body text-lg text-[#334155] max-w-2xl leading-relaxed">
                  {t.availability}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4">
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-[#0038FF] hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={`mailto:${SITE.email}`}>
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">CANAL_01 // EMAIL</span>
                    <span className="font-display text-xl text-[#0f172a] group-hover:text-[#0038FF] transition-colors block mt-2 font-bold break-all">
                      {SITE.email}
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[#0038FF] font-code text-xs font-bold">
                    <span>{lang === "pt" ? "DISPARAR MENSAGEM" : "SEND MESSAGE"}</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-1"><ArrowRight size={14} strokeWidth={3} /></span>
                  </div>
                </a>
                
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-[#0038FF] hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={SITE.social.linkedin} rel="noreferrer" target="_blank">
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">CANAL_02 // LINKEDIN</span>
                    <span className="font-display text-xl text-[#0f172a] group-hover:text-[#0038FF] transition-colors block mt-2 font-bold">
                      /in/felibrisantos
                    </span>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[#0038FF] font-code text-xs font-bold">
                    <span>{lang === "pt" ? "REDE PROFISSIONAL" : "PROFESSIONAL NETWORK"}</span>
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight size={14} strokeWidth={3} /></span>
                  </div>
                </a>
                
                <a className="btn-mechanical p-5 bg-white border-[2.5px] border-[#0038FF] hover:bg-[#eff6ff] [box-shadow:4px_4px_0px_#0038FF] flex flex-col justify-between group" href={SITE.social.github} rel="noreferrer" target="_blank">
                  <div>
                    <span className="font-code text-xs text-[#0038FF] uppercase tracking-wider block font-bold">CANAL_03 // GITHUB</span>
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

              <div className="pt-6 border-t-[2px] border-[#0038FF] flex items-center justify-between font-code text-sm text-[#334155]">
                <div className="font-bold text-[#0f172a]">
                  © {new Date().getFullYear()} FELIPE BRIGAGÃO · {t.role.toUpperCase()}
                </div>
                <div className="flex items-center gap-4 font-bold">
                  <span className="text-[#0038FF] flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-[#0038FF] beacon-pulse inline-block shrink-0"></span>
                    {lang === "pt" ? "SISTEMA ATIVO" : "SYSTEM ACTIVE"}
                  </span>
                  <span className="text-slate-400">/</span>
                  <span className="text-[#0f172a]">{lang === "pt" ? "COMPOSTO EM SÃO PAULO, BRASIL" : "TYPESET IN SÃO PAULO, BRAZIL"}</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={sectionVariants} className="md:hidden flex flex-col gap-3.5 pt-4">
              <div className="flex flex-col gap-1.5">
                <div className="self-start inline-flex items-center px-2 py-0.5 bg-[#0038FF]/10 neo-border-sm border-[#0038FF]">
                  <span className="font-code text-[9px] font-bold text-[#0038FF] uppercase">
                    {lang === "pt" ? "SESSÃO ABERTA // 2026" : "OPEN SESSION // 2026"}
                  </span>
                </div>
                <h2 className="font-display font-extrabold text-[21px] tracking-tight uppercase text-black leading-tight">
                  § 04 // PROTOCOLO DE CONEXÃO DIRETA: VAMOS CONSTRUIR <span className="italic text-[#0038FF] font-black">ALGO.</span>
                </h2>
                <p className="font-body text-[13px] leading-relaxed text-black/80">
                  {t.availability}
                </p>
              </div>

              <div className="flex flex-col gap-2.5">
                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={`mailto:${SITE.email}`}>
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">CANAL_01 // EMAIL</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">{SITE.email}</span>
                  </div>
                  <div className="bg-[#0038FF] text-white px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'DISPARAR' : 'SEND'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>
                
                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={SITE.social.linkedin} rel="noopener noreferrer" target="_blank">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">CANAL_02 // LINKEDIN</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">/in/felibrisantos</span>
                  </div>
                  <div className="bg-slate-200 text-black px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'PERFIL' : 'PROFILE'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>

                <a className="bg-white p-3 neo-border neo-shadow-blue flex items-center justify-between group active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all rounded-none" href={SITE.social.github} rel="noopener noreferrer" target="_blank">
                  <div className="flex flex-col min-w-0 pr-2">
                    <span className="font-code text-[9.5px] font-bold text-black/60 uppercase">CANAL_03 // GITHUB</span>
                    <span className="font-display font-bold text-[14.5px] text-black truncate group-hover:text-[#0038FF] transition-colors">@felibrisantos</span>
                  </div>
                  <div className="bg-slate-200 text-black px-2.5 py-1.5 neo-border-sm border-black flex items-center gap-1 shrink-0 font-code text-[9.5px] font-bold uppercase">
                    <span>{lang === 'pt' ? 'REPOSITÓRIOS' : 'REPOS'}</span>
                    <ArrowUpRight size={14} strokeWidth={3} />
                  </div>
                </a>
              </div>

              <div className="bg-black text-white p-4 neo-border neo-shadow-blue flex flex-col gap-2 mt-1 rounded-none border-black">
                <div className="flex items-center justify-between">
                  <span className="font-code text-[9.5px] text-[#dee0ff] uppercase tracking-wider font-bold">TERMINAL FOOTER // VER. 2026.04</span>
                  <span className="inline-block w-2 h-2 bg-[#0038FF]"></span>
                </div>
                <p className="font-code text-[11.5px] font-bold uppercase text-white">
                  © {new Date().getFullYear()} FELIPE BRIGAGÃO • {lang === 'pt' ? 'ENGENHARIA DE PRODUTO & IA' : 'PRODUCT ENGINEERING & AI'}
                </p>
                <div className="h-px w-full bg-white/20"></div>
                <p className="font-code text-[9.5px] text-white/70 uppercase">
                  ■ {lang === 'pt' ? 'SISTEMA ATIVO // COMPOSTO EM SÃO PAULO, BRASIL' : 'ACTIVE SYSTEM // TYPESET IN SÃO PAULO, BRAZIL'}
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </motion.main>

      {/* DESKTOP FOOTER */}
      <footer className="hidden md:flex w-full bg-white border-t-[2.5px] border-[#0038FF] [box-shadow:0px_-2px_0px_#0038FF]">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-code text-xs uppercase text-[#334155]">
          <div className="font-bold text-[#0f172a]">
            <span>© {new Date().getFullYear()} Felipe Brigagão. {lang === "pt" ? "Todos os direitos reservados." : "All rights reserved."}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 font-bold">
            <span className="text-[#0f172a]">São Paulo, BR [UTC -03:00]</span>
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
