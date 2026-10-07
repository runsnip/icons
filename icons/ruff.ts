import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Ruff: an angular R, its leg thickened. From the files set. */
export const RuffIcon: Icon = {
  name: "RuffIcon",
  node: [
    ["path", { d: "M7 19.5v-15h6.5l3 3.5-3 3.5H7" }],
    ["path", { d: "M12 11.5l5 8", ...SOLID_STROKE }],
  ],
};

export default RuffIcon;
