"use client";

import Link from "next/link";

const NAV_LINKS = [
  { name: "Sobre", href: "#sobre" },
  { name: "Ecossistema", href: "#experiencia" },
  { name: "IA", href: "#ia" },
  { name: "Stack", href: "#stack" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-paper/90 backdrop-blur-sm">
      <Link href="/" className="flex items-baseline" aria-label="Brigagão">
        <span className="text-sm font-bodoni font-bold tracking-tight uppercase">
          Brigagão
        </span>
        <span
          className="inline-block w-[2px] h-[11px] bg-accent ml-0.5"
          style={{ animation: "nav-blink 1.1s step-end infinite" }}
        />
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative font-sora text-[11px] uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors duration-200 group"
          >
            {link.name}
            <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>
      <style>{`
        @keyframes nav-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </nav>
  );
};
