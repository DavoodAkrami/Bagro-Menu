# Bagro Bistro menu

A mobile-first Persian and English menu built with Next.js App Router, React, TypeScript, and self-hosted Manrope, Vazirmatn, and Noto Sans Arabic fonts.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production and checks

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

## Structure

- `src/data/menu.ts`: the bilingual menu, source prices, and category sheets.
- `src/components/bagro-experience.tsx`: logo reveal, brand opening, language switching, navigation, and location.
- `src/components/menu-explorer.tsx`: continuous menu with category jump links, search, dietary filtering, pointer previews, and original sheets.
- `src/components/scroll-ticker.tsx`: continuous text motion that accelerates with scroll velocity, with pause and reduced-motion support.
- `src/components/brand.tsx`: Bagro’s authentic mark extracted visually from its original menu cover.
- `src/app/globals.css`: visual tokens, responsive layout, and motion.
- `public/menu/`: original menu sheets from Bagro's website.
- `public/images/`: photographs of the actual restaurant and food.
- `docs/design-direction.md`: research, palette decisions, asset sources, and content boundaries.
- `agent.md` and `AGENTS.md`: project and Next.js agent instructions.

The menu includes 129 entries in 11 categories. Source prices retain their printed format; missing and zero prices are shown as requiring confirmation. Ingredients are condensed translations, so the original source sheets remain available within the menu.

The photographs are credited visitor images used for the local prototype. Confirm permission or replace them with owned photography before publishing. Robots indexing is disabled for the prototype.

Motion follows native scrolling and respects reduced-motion preferences. Pointer previews are restricted to fine pointers; every category is directly accessible by touch and keyboard.
