import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Constants: the letter pi, the mark, in a square. From the files set. */
export const ConstantIcon: Icon = {
  name: "ConstantIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.5 8.5h9M10 8.5V16M14 8.5v6a1.5 1.5 0 0 0 1.5 1.5", ...SOLID_STROKE }],
  ],
};

export default ConstantIcon;
