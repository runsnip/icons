import type { Icon } from "../types";
import { SOLID } from "../system";

/** Prolog: an owl, its eyes the mark. From the files set. */
export const PrologIcon: Icon = {
  name: "PrologIcon",
  node: [
    ["path", { d: "M5 9.5v-5l3.5 3h7l3.5-3v5c0 6-3 10.5-7 10.5S5 15.5 5 9.5Z" }],
    ["path", { d: "M11 15.5h2" }],
    ["circle", { cx: 9.5, cy: 11.5, r: 2, ...SOLID }],
    ["circle", { cx: 14.5, cy: 11.5, r: 2, ...SOLID }],
  ],
};

export default PrologIcon;
