import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Markdoc: Markdown's M in a frame with the % of its tags, the % the mark. From the files set. */
export const MarkdocIcon: Icon = {
  name: "MarkdocIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M6.5 15V9l2.5 3 2.5-3v6" }],
    ["path", { d: "M14 15l4-6M14.3 9.6h0M17.7 14.4h0", ...SOLID_STROKE }],
  ],
};

export default MarkdocIcon;
