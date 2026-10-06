import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A pencil in outline, its ferrule the mark: PencilIcon unfilled. From the ui set. */
export const PencilOutlineIcon: Icon = {
  name: "PencilOutlineIcon",
  node: [
    ["path", { d: "M4.5 19.5H11" }],
    ["path", { d: "M5.5 18.5V15L16 4.5 19.5 8 9 18.5Z" }],
    ["path", { d: "M13.5 7 17 10.5", ...SOLID_STROKE }],
  ],
};

export default PencilOutlineIcon;
