import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Fortran: the letter F in a frame, the F the mark. From the files set. */
export const FortranIcon: Icon = {
  name: "FortranIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M9.5 16.5v-9h6M9.5 12h4.5", ...SOLID_STROKE }],
  ],
};

export default FortranIcon;
