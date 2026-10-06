# @runsnip/icons

RunSnip's icons. Each is a module of its own holding only its drawing — the elements inside its `<svg>` — so it can
be drawn anywhere: as an SVG string, a DOM element, or a React component, on a server as in a browser. An app bundles
only the icons it imports.

```ts
import { BoldIcon, toSvg, createElement } from "@runsnip/icons";

toSvg(BoldIcon, { size: 16 });          // '<svg … width="16" height="16" …><path d="…"/></svg>' — a server, an email
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

## The rules every icon is drawn to

Every icon sits inside the field — x and y between 3.5 and 20.5 — so none looks larger than another at the same size;
rectangles, circles and straight lines on that grid wherever an abstraction says it better than a picture, and an
object only where the object is itself the sign (an envelope is mail, a padlock is locked); a wide, squared stance,
the wordmark's; exactly one emphatic motif per mark — filled, or thickened (`stroke-width` 2.6) where the telling part
is a line — and that motif is the small part: it emphasises the shape that carries the meaning, never becomes or covers
it.

## Adding an icon

Write `icons/<name>.ts` (its drawing, with SVG's attribute names), list it in `icons.json`, run `npm run generate`
(index, dynamic loading, the React components), and record the new hash the tests ask for.
