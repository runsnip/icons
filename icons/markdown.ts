import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Markdown: an M and its down arrow, the arrow the mark. From the files set. */
export const MarkdownIcon: Icon = {
  name: "MarkdownIcon",
  node: [
    ["path", { d: "M3.5 18V6l4.25 6L12 6v12" }],
    ["path", { d: "M17 6v11.5M13.75 14.25 17 17.5l3.25-3.25", ...SOLID_STROKE }],
  ],
};

export default MarkdownIcon;
