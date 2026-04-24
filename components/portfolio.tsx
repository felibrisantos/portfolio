"use client";

import { useLang } from "@/lib/use-lang";
import { COPY, PROJECTS, SITE, STACK } from "@/lib/content";
import { useState } from "react";
import styles from "./portfolio.module.css";

export function Portfolio() {
  const { lang, toggle } = useLang();
  const t = COPY[lang];
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div className={styles.root}>
      <nav className={styles.nav}>
        <a href="#top" className={`${styles.brand} display`}>Felipe <em>Brigagão</em></a>
        <div className={styles.meta}>{t.role} — {SITE.location}</div>
        <div className={styles.links}>
          <a href="#work">{t.nav.work}</a>
          <a href="#research">{t.nav.research}</a>
          <a href="#stack">{t.nav.stack}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <div className={styles.langBox}>
          <button onClick={toggle}>{t.langToggle}</button>
        </div>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroTag}>№ 001 — Index</div>
        <div className={styles.heroStatement}>
          <div className={styles.heroLineWrap}>
            <h1 className="display">Felipe <em>Brigagão</em></h1>
          </div>
          <div className={styles.heroLineWrap}>
            <h1 className="display">
              <span className={styles.heroRole}>— {t.role.toLowerCase()}.</span>
            </h1>
          </div>
        </div>
        <div className={styles.heroRule} />
        <p className={styles.heroPositioning}>{t.positioning}</p>
        <div className={styles.heroSig}>
          <span className={styles.dot} />
          <span>{t.availability}</span>
          <span>{SITE.location}</span>
        </div>
      </section>

      <div className={styles.secHead} id="work">
        <span className={styles.num}>§ 01</span>
        <h2 className="display">{t.sections.featured}</h2>
        <span className={styles.note}>{PROJECTS.length} {t.nextProjects}</span>
      </div>
      <div className={styles.projects}>
        {PROJECTS.map((p, i) => (
          <div
            key={p.id}
            className={`${styles.row}${expanded.has(p.id) ? ` ${styles.rowOpen}` : ""}`}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => toggleExpanded(p.id)}
          >
            <div className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</div>
            <div className={styles.rowYear}>{p.year}</div>
            <div className={`${styles.rowTitle} display`}>{p.title[lang]}</div>
            <div className={styles.rowTag}>{p.tag[lang]}</div>
            <div className={styles.rowStack}>
              {p.stack.map((s) => <span key={s}>{s}</span>)}
            </div>
            <div
              className={`${styles.rowToggle}${expanded.has(p.id) ? ` ${styles.rowToggleOpen}` : ""}`}
              data-label={expanded.has(p.id) ? (lang === "pt" ? "fechar" : "close") : (lang === "pt" ? "detalhes" : "details")}
            />
            <div className={styles.preview}>
              <div className={styles.previewInner}>
                <div className={styles.previewMeta}>
                  <span>{p.client[lang]}</span>
                  <span>{p.role[lang]}</span>
                </div>
                <div>
                  <p>{p.summary[lang]}</p>
                  <div className={styles.outcome}>
                    <span className={styles.dot} />
                    <span>{p.outcome[lang]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.secHead} id="research">
        <span className={styles.num}>§ 02</span>
        <h2 className="display">{t.researchHeading}</h2>
        <span className={styles.note}>ICMR · 2024</span>
      </div>
      <div className={styles.writing}>
        <a
          className={styles.paper}
          href="https://doi.org/10.54033/icmrv5n3-043"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.paperMeta}>
            <span>{t.paperKind}</span>
            <span>ICMR — Vol. 05, № 03</span>
            <span>{lang === "pt" ? "Dez / 2024" : "Dec / 2024"}</span>
          </div>
          <h3 className="display">{t.paperTitle}</h3>
          <p className={styles.paperAbstract}>{t.paperAbstract}</p>
          <div className={styles.paperFooter}>
            <span>Santos, F. B. · Stekel, T. R. C.</span>
            <span className={styles.paperDoi}>DOI: 10.54033/icmrv5n3-043 ↗</span>
          </div>
        </a>
      </div>

      <div className={styles.secHead} id="stack">
        <span className={styles.num}>§ 03</span>
        <h2 className="display">{t.stackHeading}</h2>
        <span className={styles.note}>{lang === "pt" ? "Em uso, 2026" : "In use, 2026"}</span>
      </div>
      <div className={styles.stack}>
        {STACK.map((s) => (
          <div key={s.category.en} className={styles.stackCol}>
            <h4>{s.category[lang]}</h4>
            <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>

      <section className={styles.contact} id="contact">
        <h2 className="display">{t.contactHeading}</h2>
        <div className={styles.contactBox}>
          <a href={`mailto:${SITE.email}`}>
            <span className={styles.k}>Email</span>
            <span>{SITE.email}</span>
          </a>
          <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer">
            <span className={styles.k}>LinkedIn</span>
            <span>/in/felibrisantos</span>
          </a>
          <a href={SITE.social.github} target="_blank" rel="noopener noreferrer">
            <span className={styles.k}>GitHub</span>
            <span>@felibrisantos</span>
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Felipe Brigagão</span>
        <span>{t.footer}</span>
      </footer>
    </div>
  );
}
