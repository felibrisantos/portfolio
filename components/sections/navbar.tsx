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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-paper/80 backdrop-blur-md border-b-[0.5px] border-white/5">
      <Link href="/" className="flex items-center gap-2 group" aria-label="Brigagão">
        <span className="font-mono text-[10px] text-accent/50 group-hover:text-accent transition-colors">
          [B]
        </span>
        <span className="text-xs font-bodoni font-bold tracking-[0.2em] uppercase group-hover:tracking-[0.3em] transition-all duration-500">
          Brigagão
        </span>
        <span
          className="inline-block w-[3px] h-[3px] bg-accent ml-0.5 animate-pulse"
        />
      </Link>

      <div className="hidden md:flex gap-10 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative font-mono text-[9px] uppercase tracking-[0.3em] text-muted hover:text-ink transition-all duration-300 group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent/50 group-hover:w-full transition-all duration-500" />
          </Link>
        ))}
      </div>
    </nav>
  );
};
