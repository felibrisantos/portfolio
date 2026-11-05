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

- `lib/content.tsx` — every piece of copy: `SITE`, `COPY.pt` / `COPY.en`, `PROJECTS`, `STACK`. `COPY.cta` holds one label per intent; reuse those instead of writing a new CTA string. A `STACK` item is a plain string when it is a product name and a `{ pt, en }` pair when it reads differently per language; render it through `stackLabel`. A `PROJECTS` entry gets an `href` only when the work is publicly reachable; without one the card's footer slot falls back to `COPY.projectAccess`, so that corner answers the same question on every card.
- `components/` — one file per section, composed by `components/site-page.tsx`, which both `app/(en)/page.tsx` and `app/(pt)/pt/page.tsx` render (server components). Only the hero and the two headers keep separate desktop/mobile trees (`hidden md:` / `md:hidden`); every other section is a single responsive tree, so most copy changes touch one place. Each section is its own `"use client"` boundary; `site-footer.tsx` and the page itself stay on the server.
- `lib/lang.ts` — the two languages and their routes: English at `/`, Portuguese at `/pt`, each rendered on the server with its own `<html lang>`, canonical and alternates. The language is the URL, not a stored preference (see `docs/adr/0001-english-at-the-root.md`).
- `lib/paper.ts` — the published paper's DOI, issue and date, used by both the research block and the JSON-LD graph.
- `app/(en)/layout.tsx` and `app/(pt)/layout.tsx` — one root layout per language, each with its metadata and OG tags. The shared document (fonts, `<html>`, analytics) lives in `components/document-shell.tsx`, and the JSON-LD graph in `lib/schema.ts`: a `schema.org/Person` node and a `ScholarlyArticle` node for the paper, linked by `@id` so the article names the person as its author rather than minting a second one.
- `app/not-found.tsx` / `components/not-found-view.tsx` — the 404. It sets its own title and overrides the layout's `index: true`; the view is client-side because its copy is bilingual.
- `app/(en)/opengraph-image.tsx` and `app/(pt)/pt/opengraph-image.tsx` — one preview card per language, drawn by `components/og-card.tsx`. `app/sitemap.ts` and `app/robots.ts` — crawler routes.

Every string added in one language needs its pair. `lib/parity.test.ts` fails when a key exists in one language only, so copy that is written in a component instead of `COPY` escapes the check: keep text in `lib/content.tsx`.

## Checks

The same four steps as CI (`.github/workflows/ci.yml`), in this order:

```bash
npm run lint
npm run typecheck
npm run build      # the markup tests read the build output
npm test
```

## Layout rules worth keeping

- One layout family per section: anchor card (hero), card grid with a featured first entry (work), inverted block with display metrics (research), bare prose column (about), ruled columns (stack), closing card (contact).
- Every nav target is an in-page anchor under a fixed header, so `html` carries a `scroll-padding-top` in `globals.css`. It is per-breakpoint and keeps the safe-area term unresolved, because the mobile header grows with a notch.
- The research block is the page's only theme inversion. On that dark surface the accent is `#5B8CFF`, not `#0038FF`, which fails contrast there.
- `positioningShort` exists so the mobile hero CTA stays above the fold. Keep it under 20 words.

## Structure

```text
├── app/             # per-language roots under (en) and (pt), globals.css, icons, sitemap, robots
├── components/      # one file per section, plus header/footer/shell and the page composition
├── lib/             # content.tsx (all copy), lang.ts (routes), paper.ts, schema.ts, palette.ts
└── public/          # foto-felipe.jpg and the two CVs
```

## License

MIT.
