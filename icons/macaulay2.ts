import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Macaulay2: the letter M and a 2 in a frame, the 2 the mark. From the files set. */
export const Macaulay2Icon: Icon = {
  name: "Macaulay2Icon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M6.5 15.5v-7l2.5 3.5 2.5-3.5v7" }],
    ["path", { d: "M14 10a1.9 1.9 0 0 1 3.5 1c0 1.6-3.5 2.8-3.5 4.5h3.7", ...SOLID_STROKE }],
  ],
};

export default Macaulay2Icon;
