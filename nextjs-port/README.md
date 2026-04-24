# Next.js Port — Portfolio Redesign

Drop-in replacement for your existing `felibrisantos/portfolio` repo. Keeps your
existing Next 16 + Tailwind v4 + React 19 setup.

## What to copy into your repo

Replace these files in your repo with the matching ones here:

```
app/globals.css              (was: Tailwind + bespoke theme — fully replaced)
app/layout.tsx               (was: Bodoni/Sora/Syne/Fira — now Fraunces/Inter Tight/JetBrains Mono)
app/page.tsx                 (was: Navbar + 5 sections — now a single <Portfolio/> entry)
app/icon.svg                 (new favicon — Fraunces "B" on paper)
app/apple-icon.svg           (apple-touch icon)

components/portfolio.tsx           (entire page)
components/portfolio.module.css    (scoped CSS for that page)

lib/content.tsx              (bilingual copy + project/stack data)
lib/use-lang.ts              (PT/EN toggle with localStorage)
```

## What to delete

All of these can go:

```
components/sections/hero.tsx
components/sections/navbar.tsx
components/sections/ecosystem.tsx
components/sections/ai-agents.tsx
components/sections/tech-stack.tsx
components/sections/footer.tsx
components/ui/bento-card.tsx
components/ui/code-block.tsx
components/ui/cyan-glow.tsx
components/ui/grain-overlay.tsx
components/ui/terminal-preview.tsx
lib/constants.ts             (replaced by lib/content.tsx)
```

`lib/utils.ts` (the `cn` helper) stays — useful for any future work.

## Dependencies

No new packages required. You can optionally remove `framer-motion` from
`package.json` since the new design uses CSS transitions only:

```bash
npm remove framer-motion lucide-react
```

(Keep them if you plan to re-introduce motion later — they don't hurt.)

## Fonts

`app/layout.tsx` loads **Fraunces** (with optical size + SOFT axes), **Inter Tight**,
and **JetBrains Mono** via `next/font/google`. Your old Bodoni/Sora/Syne/Fira
imports are gone.

## Notes

- The `"use client"` directive sits on `components/portfolio.tsx` and `lib/use-lang.ts`
  because both use `localStorage`. `app/page.tsx` stays a server component that just
  renders the client component.
- CSS Modules are used for component scoping; no Tailwind utilities in the page
  itself. Theme variables still live in `globals.css` and are exposed to Tailwind
  via `@theme` so you can use them in future features if needed.
- The `<em>` accent color is driven by `.root em` in the module — no inline styles.
- Responsive breakpoint at 760px collapses the grid to single-column and
  simplifies the nav to brand + lang toggle.

## Run

```bash
npm run dev
```

Open http://localhost:3000.
