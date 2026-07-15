# SUCF · 9th Reunion Congress: "Rebuilding the Broken Walls"

A one-page commemorative site for the Scripture Union Campus Fellowship (SUCF),
Metallurgical Training Institute, Onitsha, built for the 9th Alumni Reunion
Congress, 31 October to 2 November 2025.

Built with **Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Framer
Motion, shadcn/ui-style components (Radix primitives), Lucide React,
React Three Fiber, and Lenis** smooth scrolling.

## Design

- **Signature idea**: the alumni directory is rendered as literal courses of
  a stone wall, the 1998/1999 pioneer set at the foundation, each
  generation stacked above it, alternating offset like real masonry, a
  structural echo of the theme, "Rebuilding the Broken Walls" (Nehemiah 2:17).
- **Palette**: warm stone charcoal, limestone parchment, a deep emerald
  drawn from the fellowship's own crest, foundation gold, and a muted clay
  ember used sparingly.
- **Type**: Fraunces (display serif), Inter (body), and IBM Plex Mono for
  times, phone numbers, and scripture references, anything that reads like
  a record.
- Both crests, the National Metallurgical Training Institute seal and the
  SUCF torch emblem, were supplied as source logos, cleaned up with
  transparent backgrounds, and used as the site's favicon and logo lockups
  in the nav, hero, and footer.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        : root layout, fonts, metadata, favicon
    page.tsx           : assembles all sections
    globals.css        : Tailwind v4 theme tokens and design system
  components/
    ui/                 : button, input, tabs, accordion (shadcn-style, Radix-based)
    sections/           : hero, theme, welcome, schedule, bible-study, directory, hymns, footer, nav
    cornerstone-scene.tsx : React Three Fiber hero visual
    smooth-scroll.tsx     : Lenis provider
  lib/
    data.ts             : all program content (schedule, letters, alumni directory, hymns)
    utils.ts            : cn() class helper
public/
  logo.png              : primary favicon-derived mark
  nmti-logo.png          : National Metallurgical Training Institute seal
  sucf-logo.png           : full SUCF emblem (torch + wordmark)
  sucf-icon.png            : SUCF torch icon only, used for compact lockups
```

## Notes

- All copy and data comes directly from the supplied reunion program PDF.
- Reduced-motion preferences are respected. Lenis and CSS animations both
  check `prefers-reduced-motion`.
- Fonts load via Google Fonts link tags in `layout.tsx`, which works with the
  normal internet access your dev or deploy environment has.
