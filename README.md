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

Fonts: Inter (body), Space Grotesk (display), JetBrains Mono (code), all via `next/font`.

## Where the content lives

- `lib/content.tsx` — every piece of copy that is not inline: `SITE`, `COPY.pt` / `COPY.en`, `PROJECTS`, `STACK`.
- `components/portfolio.tsx` — the page, with the remaining bilingual strings inline as `lang === "pt" ? … : …`. Desktop and mobile are separate trees (`hidden md:` / `md:hidden`), so copy changes usually touch two places.
- `lib/use-lang.ts` — PT/EN toggle, persisted in `localStorage`.
- `app/layout.tsx` — metadata and OG tags.

PT and EN are kept in parity by hand. Every string added in one language needs its pair.

## Structure

```text
├── app/             # layout, page, globals.css, icons
├── components/      # portfolio.tsx, cursor.tsx
├── lib/             # content.tsx, use-lang.ts, utils.ts
└── public/
```

## License

MIT.
