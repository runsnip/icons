import type { Icon } from "../types";
import { SOLID } from "../system";

/** Metro: a line with its stations, the stations the mark. From the files set. */
export const MetroIcon: Icon = {
  name: "MetroIcon",
  node: [
    ["path", { d: "M5.5 18h3l7-12h3" }],
    ["circle", { cx: 5.5, cy: 18, r: 2, ...SOLID }],
    ["circle", { cx: 12, cy: 12, r: 2, ...SOLID }],
    ["circle", { cx: 18.5, cy: 6, r: 2, ...SOLID }],
  ],
};

export default MetroIcon;
