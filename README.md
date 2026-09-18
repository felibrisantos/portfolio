# brigagao.dev

Personal portfolio of Felipe Brigagão — fullstack developer at Abdou, Jacareí, SP.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide icons. Deployed on Vercel.

Fonts: Inter (body), Space Grotesk (display), JetBrains Mono (code), all via `next/font`. No external stylesheet is loaded at runtime.

## Where the content lives

- `lib/content.tsx` — every piece of copy: `SITE`, `COPY.pt` / `COPY.en`, `PROJECTS`, `STACK`. `COPY.cta` holds one label per intent; reuse those instead of writing a new CTA string. A `STACK` item is a plain string when it is a product name and a `{ pt, en }` pair when it reads differently per language; render it through `stackLabel`.
- `components/portfolio.tsx` — the page. Only the hero and the two headers keep separate desktop/mobile trees (`hidden md:` / `md:hidden`); every other section is a single responsive tree, so most copy changes touch one place.
- `lib/use-lang.ts` — PT/EN toggle, persisted in `localStorage`, and keeps `<html lang>` in sync.
- `app/layout.tsx` — metadata, OG tags and the `schema.org/Person` JSON-LD.

PT and EN are kept in parity by hand. Every string added in one language needs its pair.

## Layout rules worth keeping

- One layout family per section: anchor card (hero), card grid with a featured first entry (work), inverted block with display metrics (research), bare prose column (about), ruled columns (stack), closing card (contact).
- The research block is the page's only theme inversion. On that dark surface the accent is `#5B8CFF`, not `#0038FF`, which fails contrast there.
- `positioningShort` exists so the mobile hero CTA stays above the fold. Keep it under 20 words.

## Missing

Project screenshots and a portrait. Placement is marked with `TODO` comments in `components/portfolio.tsx`.

## Structure

```text
├── app/             # layout, page, globals.css, icons
├── components/      # portfolio.tsx
├── lib/             # content.tsx, use-lang.ts
└── public/
```

## License

MIT.
