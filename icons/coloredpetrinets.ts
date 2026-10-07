import type { Icon } from "../types";
import { SOLID } from "../system";

/** Coloured Petri net: two places and a transition, the token the mark. From the files set. */
export const ColoredpetrinetsIcon: Icon = {
  name: "ColoredpetrinetsIcon",
  node: [
    ["circle", { cx: 6.5, cy: 12, r: 3 }],
    ["circle", { cx: 17.5, cy: 12, r: 3 }],
    ["path", { d: "M12 7v10M9.5 12h5.5" }],
    ["circle", { cx: 6.5, cy: 12, r: 1.4, ...SOLID }],
  ],
};

export default ColoredpetrinetsIcon;
