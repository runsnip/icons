import { BY_EXTENSION, BY_FILE_NAME, BY_FILE_PATTERN, BY_FOLDER_NAME, KIND_COLORS } from "./kinds";
import type { Icon, IconElement, IconNode } from "./types";

/**
 * Files and folders. A kind of file — TypeScript, a Dockerfile, a test folder — is ONE drawing: its glyph, an icon of
 * the set like any other, with its colour and the names it matches in icons.json. Everything else is made from that
 * glyph here, never drawn apart, so the forms of one kind cannot drift:
 *
 *   form "glyph"   the glyph itself                                   <Icon name="typescript" />
 *   form "file"    a page, the glyph at its bottom-right corner       <Icon name="typescript" form="file" />
 *   form "folder"  a folder (closed, or open), the glyph likewise     <Icon folder="src" open />
 *
 * and each in the text's colour (currentColor, the set's way) or in the kind's own (`colored`). In the coloured forms
 * the whole drawing takes the kind's colour, the frame too, so a file and its kind read as one thing; a page or a
 * folder with no kind takes the neutral colours below.
 *
 * The corner glyph is the glyph's own geometry, scaled and moved — not an SVG transform — so it is a drawing of the
 * set like any other, inside the field, and its strokes are drawn a little lighter so the small glyph keeps the
 * weight of the frame. The frame leaves a gap round the corner where the glyph sits, so nothing has to be cut out
 * of it.
 */

export type IconForm = "glyph" | "file" | "folder";

export interface FormOptions {
  form?: IconForm;
  /** A folder drawn open. */
  open?: boolean;
  /** In the kind's own colour (its `color`), not the text's. */
  colored?: boolean;
  /** The kind's colour, for `colored`: what icons.json gives the glyph. */
  color?: string;
}

/** A page with no kind, in the coloured forms: a quiet grey that holds on a light ground and a dark one. */
export const FILE_COLOR = "#8A96A8";
/** A folder with no kind, in the coloured forms: Finder's slate, lifted to read on a dark ground too. */
export const FOLDER_COLOR = "#6D87AB";

/** Where the corner glyph sits: its field (3.5 to 20.5) brought into this square. */
const CORNER = { min: 10.5, max: 20.5 } as const;
const SCALE = (CORNER.max - CORNER.min) / 17;
/** The corner glyph's strokes: lighter than its own, so at that size it weighs what the frame does. */
const CORNER_STROKE = 1.5 / 2;

/*
 * The frames, each leaving the bottom-right corner open for the glyph: the page's edge stops short of it, the
 * folder's likewise. Whole frames (no glyph) for a page or folder with no kind.
 */
const PAGE: IconNode = [["path", { d: "M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9Z" }]];
const PAGE_OPEN_CORNER: IconNode = [["path", { d: "M8.5 20.5H7A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5h7L19.5 9" }]];
const FOLDER: IconNode = [
  ["path", { d: "M3.5 18V6A1.5 1.5 0 0 1 5 4.5h4.5l2 2.5H19A1.5 1.5 0 0 1 20.5 8.5V18a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18Z" }],
];
const FOLDER_OPEN_CORNER: IconNode = [
  ["path", { d: "M8.5 19.5H5A1.5 1.5 0 0 1 3.5 18V6A1.5 1.5 0 0 1 5 4.5h4.5l2 2.5H19A1.5 1.5 0 0 1 20.5 8.5" }],
];
const FOLDER_OPENED: IconNode = [
  ["path", { d: "M3.5 17V6A1.5 1.5 0 0 1 5 4.5h4.5l2 2.5H17a1.5 1.5 0 0 1 1.5 1.5V10" }],
  ["path", { d: "M3.5 19.5h14l3-8H7Z" }],
];
const FOLDER_OPENED_CORNER: IconNode = [
  ["path", { d: "M3.5 17V6A1.5 1.5 0 0 1 5 4.5h4.5l2 2.5H17a1.5 1.5 0 0 1 1.5 1.5V9" }],
  ["path", { d: "M8.5 19.5h-5L7 11.5h1" }],
];

const round = (n: number) => Math.round(n * 1000) / 1000;
const NUMBER = /-?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/iy;

/** A path's data with every coordinate scaled by `k` and the absolute ones moved by (dx, dy). */
export function transformPath(d: string, k: number, dx: number, dy: number): string {
  const out: string[] = [];
  const re = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)/g;
  for (const [, command, body] of d.matchAll(re)) {
    const values: number[] = [];
    let i = 0;
    const upper = command.toUpperCase();
    while (i < body.length) {
      while (i < body.length && /[\s,]/.test(body[i])) i++;
      if (i >= body.length) break;
      /* An arc's two flags are single digits, which SVG lets run together ("0 011"). */
      if (upper === "A" && [3, 4].includes(values.length % 7)) { values.push(Number(body[i])); i++; continue; }
      NUMBER.lastIndex = i;
      const m = NUMBER.exec(body);
      if (!m) throw new Error(`transformPath: cannot read "${body.slice(i)}" in "${d}"`);
      values.push(Number(m[0]));
      i = NUMBER.lastIndex;
    }
    const absolute = command === upper;
    const x = (v: number) => round(absolute ? v * k + dx : v * k);
    const y = (v: number) => round(absolute ? v * k + dy : v * k);
    const moved = values.map((v, n) => {
      switch (upper) {
        case "H": return x(v);
        case "V": return y(v);
        case "A": { const at = n % 7; return at < 2 ? round(v * k) : at < 5 ? v : at === 5 ? x(v) : y(v); }
        default: return n % 2 === 0 ? x(v) : y(v);
      }
    });
    out.push(command + moved.join(" "));
  }
  return out.join("");
}

const POINT_KEYS: Record<string, [x: string[], y: string[], lengths: string[]]> = {
  rect: [["x"], ["y"], ["width", "height", "rx", "ry"]],
  circle: [["cx"], ["cy"], ["r"]],
  ellipse: [["cx"], ["cy"], ["rx", "ry"]],
  line: [["x1", "x2"], ["y1", "y2"], []],
};

/** One element's geometry scaled by `k` and moved by (dx, dy); its strokes multiplied by `stroke`. */
export function transformElement([tag, a]: IconElement, k: number, dx: number, dy: number, stroke = 1): IconElement {
  const out: Record<string, string | number> = { ...a };
  if (tag === "path") out.d = transformPath(String(a.d), k, dx, dy);
  else if (tag === "polyline" || tag === "polygon") {
    const n = String(a.points).match(/-?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/gi)?.map(Number) ?? [];
    out.points = n.map((v, i) => round(v * k + (i % 2 ? dy : dx))).join(" ");
  } else if (POINT_KEYS[tag]) {
    const [xs, ys, lengths] = POINT_KEYS[tag];
    for (const key of xs) if (key in a) out[key] = round(Number(a[key]) * k + dx);
    for (const key of ys) if (key in a) out[key] = round(Number(a[key]) * k + dy);
    for (const key of lengths) if (key in a) out[key] = round(Number(a[key]) * k);
  } else throw new Error(`transformElement: no geometry known for <${tag}>`);
  if (stroke !== 1 && a.stroke !== "none") out["stroke-width"] = round(Number(a["stroke-width"] ?? 2) * stroke);
  return [tag, out];
}

/** A drawing in one colour: every stroke and fill the text's colour would take, this colour instead. */
export function paint(node: IconNode, color: string): IconNode {
  return node.map(([tag, a]) => {
    const out: Record<string, string | number> = { ...a };
    if (out.stroke !== "none") out.stroke = color;
    if (out.fill === "currentColor") out.fill = color;
    return [tag, out];
  });
}

/** The glyph brought into the bottom-right corner. */
export const corner = (node: IconNode): IconNode =>
  node.map((element) => transformElement(element, SCALE, CORNER.min - 3.5 * SCALE, CORNER.min - 3.5 * SCALE, CORNER_STROKE));

const cache = new WeakMap<Icon, Map<string, Icon>>();

/**
 * An icon in one of the forms: the glyph, or a page or a folder carrying it in the corner; in the text's colour, or
 * coloured. `icon` null is a page or a folder with no kind. The same icon and options give the same object.
 */
export function iconForm(icon: Icon | null, options: FormOptions = {}): Icon {
  const { form = "glyph", open = false, colored = false } = options;
  if (icon && form === "glyph" && !colored) return icon;
  const key = `${form}|${open}|${colored ? options.color ?? "" : ""}`;
  const own = icon ? cache.get(icon) ?? new Map<string, Icon>() : null;
  if (own?.has(key)) return own.get(key)!;

  let node: IconNode;
  let name: string;
  const frameColor = colored ? options.color ?? (form === "folder" ? FOLDER_COLOR : FILE_COLOR) : null;
  if (!icon) {
    node = form === "folder" ? (open ? FOLDER_OPENED : FOLDER) : PAGE; /* no kind: the glyph form is the page too */
    name = form === "folder" ? (open ? "FolderOpenedFrame" : "FolderFrame") : "FileFrame";
  } else if (form === "glyph") {
    node = icon.node;
    name = icon.name;
  } else {
    const frame = form === "folder" ? (open ? FOLDER_OPENED_CORNER : FOLDER_OPEN_CORNER) : PAGE_OPEN_CORNER;
    node = [...frame, ...corner(icon.node)];
    name = icon.name.replace(/Icon$/, form === "folder" ? (open ? "FolderOpenIcon" : "FolderIcon") : "FileIcon");
  }
  const made: Icon = { name: colored ? name.replace(/(Icon|Frame)?$/, "Color$1") : name, node: frameColor ? paint(node, frameColor) : node };
  if (icon && form === "glyph" && icon.svg) made.svg = icon.svg;
  if (icon) { own!.set(key, made); cache.set(icon, own!); }
  return made;
}

/**
 * A file's kind — its glyph's file name, for `loadIcon` and `<Icon name>` — from its name: the whole name
 * (`package.json`, `Dockerfile`) — with its folder first where one is kept so (`.config/babelrc`) — then a pattern on it (`Dockerfile.dev`), then its extensions, longest first
 * (`a.d.ts` is `d.ts` before `ts`). Null for a file of no known kind. A path is taken by its last part.
 */
export function fileKindOf(fileName: string): string | null {
  const name = fileName.slice(fileName.lastIndexOf("/") + 1).toLowerCase();
  const inFolder = BY_FILE_NAME[`${parentOf(fileName)}/${name}`];
  if (inFolder) return inFolder;
  if (BY_FILE_NAME[name]) return BY_FILE_NAME[name];
  for (const [pattern, kind] of BY_FILE_PATTERN) if (pattern.test(name)) return kind;
  for (let dot = name.indexOf(".", 1); dot !== -1; dot = name.indexOf(".", dot + 1)) {
    const kind = BY_EXTENSION[name.slice(dot + 1)];
    if (kind) return kind;
  }
  return null;
}

/**
 * A folder's kind from its name (`src`, `.github`, `node_modules`); null for a folder of no known kind. A name kept
 * with its folder first (`.github/workflows`), then the name as written, then bare of what projects put round a name to sort or hide it — a leading `.`, `_` or `-`, a
 * wrapping `__…__` — so `_src`, `.src` and `__src__` are `src` without each being listed.
 */
export function folderKindOf(folderName: string): string | null {
  const path = folderName.replace(/\/+$/, "");
  const name = path.slice(path.lastIndexOf("/") + 1).toLowerCase();
  return BY_FOLDER_NAME[`${parentOf(path)}/${name}`] ?? BY_FOLDER_NAME[name] ?? BY_FOLDER_NAME[bareFolderName(name)] ?? null;
}

/* The folder a path's last part sits in, bare and lower-case — what a name kept with its folder is keyed by:
   `.github/workflows`, `.config/babelrc`, `prisma/schema` (a .github folder is keyed `github/…`). */
const parentOf = (path: string): string => {
  const parts = path.replace(/\/+$/, "").split("/");
  return parts.length > 1 ? bareFolderName(parts[parts.length - 2].toLowerCase()) : "";
};

/** A folder's name without the marks round it: `__tests__`, `.tests`, `_tests`, `-tests` are `tests`. */
export const bareFolderName = (name: string): string => name.replace(/^__(.+)__$/, "$1").replace(/^[._-]+/, "");

/** A kind's own colour, by its glyph's file name. */
export const kindColor = (kind: string): string | undefined => KIND_COLORS[kind];

/** Which icon to draw, in which form: by its name, or by the file or folder it stands for. */
export interface IconRequest extends Omit<FormOptions, "color"> {
  /** The icon's file name (`typescript`, `bold`) or an alias's. */
  name?: string;
  /** A file's name or path: its kind's glyph (fileKindOf), or a page when it has no known kind. */
  file?: string;
  /** A folder's name or path: always the folder form, with its kind's glyph (folderKindOf) or none. */
  folder?: string;
}

/**
 * The icon a request names, in its form, from these icons by name (the whole set: browser/names; or any subset).
 * Null only for a `name` that is no icon — a file or folder of no known kind is still a page or a folder.
 */
export function resolveIcon(icons: Record<string, Icon>, request: IconRequest): Icon | null {
  const { name, file, folder, open, colored } = request;
  if (folder !== undefined) {
    const kind = folderKindOf(folder);
    return iconForm(kind ? icons[kind] ?? null : null, { form: "folder", open, colored, color: kind ? KIND_COLORS[kind] : undefined });
  }
  if (file !== undefined) {
    const kind = fileKindOf(file);
    const glyph = kind ? icons[kind] ?? null : null;
    return iconForm(glyph, { form: glyph ? request.form ?? "glyph" : "file", open, colored, color: kind ? KIND_COLORS[kind] : undefined });
  }
  const key = (name ?? "").trim().toLowerCase();
  const icon = icons[key];
  if (icon) return iconForm(icon, { form: request.form, open, colored, color: KIND_COLORS[key] ?? KIND_COLORS[kebabOf(icon.name)] });
  /* A form's own name, as scripts/file-forms.mjs names its module: react-file, react-folder-open-color. */
  const form = FORM_NAME.exec(key);
  const kind = form && icons[form[1]];
  if (!kind || !KIND_COLORS[form[1]]) return null;
  return iconForm(kind, {
    form: form[2] === "-file" ? "file" : form[2] ? "folder" : "glyph",
    open: form[2] === "-folder-open",
    colored: Boolean(form[3]),
    color: KIND_COLORS[form[1]],
  });
}

/* <kind>, then -file, -folder or -folder-open, then -color: one of them at least. */
const FORM_NAME = /^(.+?)(-file|-folder-open|-folder)?(-color)?$/;

/* An icon's file name from its name, for an alias given where the kind is listed under the file: TsIcon → ts. */
const kebabOf = (name: string) => name.replace(/Icon$/, "").replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z])([A-Z][a-z])/g, "$1-$2").toLowerCase();
