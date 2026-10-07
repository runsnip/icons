import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** markdownlint: Markdown's M in a frame with a tick, the tick the mark. From the files set. */
export const MarkdownlintIcon: Icon = {
  name: "MarkdownlintIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M6.5 15V9l2.5 3 2.5-3v6" }],
    ["path", { d: "M13.8 12.3l1.6 1.9 2.8-3.4", ...SOLID_STROKE }],
  ],
};

export default MarkdownlintIcon;
