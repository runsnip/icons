import type { Icon } from "../types";
import { SOLID } from "../system";

/** A cache: a store held in memory — DatabaseIcon's cylinder, open, with a lightning bolt in it, solid. From the ops set. */
export const CacheIcon: Icon = {
  name: "CacheIcon",
  node: [
    ["ellipse", { cx: 12, cy: 6.5, rx: 7.5, ry: 3 }],
    ["path", { d: "M4.5 6.5v11c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-11" }],
    ["path", { d: "M13.25 10.5 9 15.25h3l-1.25 3.75L15 14.25h-3Z", ...SOLID }],
  ],
};

export default CacheIcon;
