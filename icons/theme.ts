import type { Icon } from "../types";
import { SOLID } from "../system";

/** A palette / swatches. From the slides set. */
export const ThemeIcon: Icon = {
  name: "ThemeIcon",
  node: [
    ["path", { d: "M12 20.5a8.5 8.5 0 1 1 8.5-8.5c0 2.5-2 3-3.5 3h-1.5a1.75 1.75 0 0 0-1.25 3c.75 1-.25 2.5-2.25 2.5Z" }],
    ["circle", { cx: 7.75, cy: 12.75, r: 1.6, ...SOLID }],
    ["circle", { cx: 9.25, cy: 8.25, r: 1.6, ...SOLID }],
    ["circle", { cx: 14, cy: 7.75, r: 1.6, ...SOLID }],
  ],
};

export default ThemeIcon;
