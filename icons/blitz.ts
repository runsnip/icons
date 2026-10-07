import type { Icon } from "../types";
import { SOLID } from "../system";

/** Blitz.js: a lightning bolt, the mark, in a ring. From the files set. */
export const BlitzIcon: Icon = {
  name: "BlitzIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M13 6.5 8.5 13H12l-1 4.5 4.5-6.5H12Z", ...SOLID }],
  ],
};

export default BlitzIcon;
