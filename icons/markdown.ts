import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Markdown: the M and its down arrow in a frame, the arrow the mark. From the files set. */
export const MarkdownIcon: Icon = {
  name: "MarkdownIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M6.5 15V9l2.5 3 2.5-3v6" }],
    ["path", { d: "M16 9v6M14 13l2 2 2-2", ...SOLID_STROKE }],
  ],
};

export default MarkdownIcon;
