# my-portfolio

Personal portfolio for **Abdullah** — a BSc Data Science student at Atharva
University, building software out of scripts and notebooks.

Built with Next.js 16 (App Router, Turbopack) and Tailwind CSS v4. A deep navy
canvas with off-white type, solid colours only — no gradient fills, no tinted
shadows, and generous vertical spacing between sections.

## Stack

- **Next.js 16** — App Router, Turbopack, Cache Components
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** — CSS-first configuration via `@theme`
- **next/font** — Inter for UI, Albert Sans for display type

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    globals.css        design tokens, base layer, floating-shape keyframes
    layout.tsx         fonts, metadata, background layer
    page.tsx           hero, projects, about, contact
  components/
    FloatingShapes.tsx drifting background shapes
    Navbar.tsx         glass navigation
  data/
    portfolio.ts       every word and link on the site
  lib/
    site.ts            cached helpers
```

## Editing the content

Everything the site says lives in **`src/data/portfolio.ts`** — profile, nav
links, hero facts, projects, principles and social links. Change that one file
and the whole site updates; no component edits required.

## Colours

Tokens live in `:root` in `src/app/globals.css` and are mapped into Tailwind
through `@theme inline`, so the base layer and the utilities read from one
source of truth.

| Token                | Value     | Used for             |
| -------------------- | --------- | -------------------- |
| `--background`       | `#0d1b33` | page canvas          |
| `--surface`          | `#132540` | cards                |
| `--surface-hover`    | `#1a2e4d` | card hover           |
| `--paper`            | `#f5f5f7` | off-white type       |
| `--orb-deep`         | `#16315a` | background shapes    |
| `--orb-light`        | `#23508f` | background shapes    |

## Notes

- The hero keeps an empty `w-full h-screen absolute inset-0 -z-10` mount point
  for a future 3D canvas. It is a placeholder — nothing is rendered there yet.
- The floating background shapes are pure CSS keyframes, so they cost no
  client JavaScript, and they switch off under
  `prefers-reduced-motion: reduce`.
