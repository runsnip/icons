import type { Icon } from "../types";
import { SOLID } from "../system";

/** Pascal and Delphi source: the letter P, its full stop the mark. From the files set. */
export const PascalIcon: Icon = {
  name: "PascalIcon",
  node: [
    ["path", { d: "M7.5 20.5v-16h5a4.5 4.5 0 0 1 0 9h-5" }],
    ["circle", { cx: 17.5, cy: 18.5, r: 2, ...SOLID }],
  ],
};

export default PascalIcon;
