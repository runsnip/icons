import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Standard ML: the letters ML in a square, the L thickened. From the files set. */
export const SmlIcon: Icon = {
  name: "SmlIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 16.5v-8l2.75 4 2.75-4v8" }],
    ["path", { d: "M14.5 8.5v8h3", ...SOLID_STROKE }],
  ],
};

export default SmlIcon;
