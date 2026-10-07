# @runsnip/icons

RunSnip's icons. Each is a module of its own holding only its drawing — the elements inside its `<svg>` — so it can
be drawn anywhere: as an SVG string, a DOM element, or a React component, on a server as in a browser. An app bundles
only the icons it imports.

```ts
import { BoldIcon, toSvg, createElement } from "@runsnip/icons";

toSvg(BoldIcon, { size: 16 });          // '<svg …>…</svg>' — a string: a route handler, an email, a file
createElement(BoldIcon, { size: 16 });  // an <svg> element — a plain page, Angular, Vue, the office artifacts
```

```tsx
import { BoldIcon } from "@runsnip/icons/react";      // no hooks: renders in Server Components
<BoldIcon size={16} className="text-muted" />

import { DynamicIcon } from "@runsnip/icons/react/dynamic";
<DynamicIcon name="bold" />                             // loaded by name the first time it is shown

import { loadIcon } from "@runsnip/icons";             // in a Server Component: loaded before rendering
import { Icon } from "@runsnip/icons/react";
<Icon icon={await loadIcon("bold")} />
```

- **One icon, one module:** `@runsnip/icons/icons/bold` is a few hundred bytes; `iconNames` lists every name
  `loadIcon` and `DynamicIcon` take (kebab-case, the module's file name).
- **The set's stance:** a stroked mark on a 24-unit square, round ends and joins, stroke 2 (`DEFAULTS`). `size`,
  `color` (the stroke's, or the fill's for a filled mark), `strokeWidth` and any attribute can be given.
- **React** is an optional peer. A component takes an `<svg>`'s props and `size`, `color`, `viewBox`.

## In Next.js

Whatever is rendered — a layout, a page, a Server Component or a client one — takes the component. It has no hooks,
so a Server Component renders it to HTML and nothing of it reaches the browser's bundle. `toSvg` is not for JSX: it
returns a string, which JSX would only take through `dangerouslySetInnerHTML`.

```tsx
// app/layout.tsx — a Server Component
import { RunSnipMark, RunSnipWordmark } from "@runsnip/icons/react";

<a href="/" aria-label="RunSnip">
  <RunSnipMark size={24} />
  <RunSnipWordmark size={18} />   {/* wider than tall: size is its height, the width follows (90.49) */}
</a>
```

The string is for what Next serves as a file rather than renders — the app's icon, from an app's coloured mark:

```ts
// app/icon.tsx
import { DocxBrandColorIcon, toSvg } from "@runsnip/icons";

export const contentType = "image/svg+xml";

export default function Icon() {
  return new Response(toSvg(DocxBrandColorIcon, { size: 32 }), { headers: { "Content-Type": contentType } });
}
```


## The rules every icon is drawn to

Every icon sits inside the field — x and y between 3.5 and 20.5 — so none looks larger than another at the same size;
rectangles, circles and straight lines on that grid wherever an abstraction says it better than a picture, and an
object only where the object is itself the sign (an envelope is mail, a padlock is locked); a wide, squared stance,
the wordmark's; exactly one emphatic motif per mark — filled, or thickened (`stroke-width` 2.6) where the telling part
is a line — and that motif is the small part: it emphasises the shape that carries the meaning, never becomes or covers
it.

## Filled and outline

A mark whose meaning is a state — starred, pinned, locked — comes in both: `StarIcon` (starred) and `StarOutlineIcon`
(not yet), and likewise Square, Lock, Unlock, Folder, Folders, Cloud, Pin, Lightbulb, Trash, Pencil, Mic, Shield,
ThumbsUp, Bug, Wrench, Plug, BookOpen, Layers, Sparkles, Play and Pause. The outline twin is the same shape, drawn a
unit smaller so the two weigh the same; where the shape has a small part (a padlock's keyhole, a pin's needle) that
part is its mark, and a bare shape (a square, a star, a cloud, a shield, play, pause) is exempt from the one-motif
rule, as `GLYPHS` says.

## RunSnip's apps

Each RunSnip app has a mark in two forms, in one frame so they read as one family: `CodeBrandIcon`, `DocxBrandIcon`
and the rest draw in the text's colour like every icon; `CodeBrandColorIcon` and the rest are the same drawings on the
app's own colour, in white — a tile that reads on a light page and a dark one. The colours are in `RUNSNIP_APPS`, for
an app to use wherever it stands for itself:

| App | Mark | Colour | White on it |
| --- | --- | --- | --- |
| Code | `CodeBrandIcon` | `#008774` | 4.45:1 |
| Finder | `FinderBrandIcon` | `#52657D` | 5.97:1 |
| Media | `MediaBrandIcon` | `#B52CA1` | 5.47:1 |
| Story | `StoryBrandIcon` | `#C94E0C` | 4.59:1 |
| Docx | `DocxBrandIcon` | `#2F6BE8` | 4.78:1 |
| Xlsx | `XlsxBrandIcon` | `#13915A` | 4.02:1 |
| Pptx | `PptxBrandIcon` | `#C26F00` | 3.77:1 |
| PDF | `PdfBrandIcon` | `#D63A3F` | 4.63:1 |
| Forms | `FormsBrandIcon` | `#7550E0` | 5.28:1 |
| Composer | `ComposerBrandIcon` | `#5F7F00` | 4.64:1 |
| VAudio | `VAudioBrandIcon` | `#CD2E73` | 4.96:1 |
| Page | `PageBrandIcon` | `#0080A3` | 4.55:1 |
| Portfolio | `PortfolioBrandIcon` | `#8C39BC` | 6.13:1 |
| Resume | `ResumeBrandIcon` | `#8F6B09` | 4.91:1 |

The hues are spread round the wheel so no two apps share one; Finder, the files every app keeps, is the one quiet
slate. `CodeAppIcon`, `FinderAppIcon` and the others of the app set are a launcher's glyphs, without the frame.

The coloured marks are made from the plain ones (`scripts/brand-colors.mjs`), never drawn apart, so the two cannot
drift; the audit holds each to its plain mark's drawing.

## No other company's logo

The set holds RunSnip's own marks (the wordmark, the mark) and no other company's — not Google's, GitHub's or any
sign-in provider's. A logo is a trademark with its owner's rules (colours, clear space, minimum size, never redrawn),
which a set that recolours and resizes every icon would invite people to break; a licence on this package would read
as one on the logo, which RunSnip cannot give; and a logo changes when its owner says so. An app that shows one — a
"Sign in with Google" button — uses the owner's own asset, as the owner's guidelines ask.

## Adding an icon

Write `icons/<name>.ts` (its drawing, with SVG's attribute names), list it in `icons.json`, run `npm run generate`
(index, dynamic loading, the React components), and record the new hash the tests ask for.

## Licence

MIT — the icons are free to use, change and ship, in any product. The licence covers copyright only: the RunSnip name
and the brand set's marks (`RunSnipMark`, `RunSnipWordmark`, every `*BrandIcon` and `*BrandColorIcon`) are RunSnip's
trademarks, to be used in referring to RunSnip and its apps, never to pass another product off as RunSnip's.
