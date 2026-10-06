import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A column with a cross. From the sheets set. */
export const DeleteColumnIcon: Icon = {
  name: "DeleteColumnIcon",
  node: [
    ["path", { d: "M3.5 9.75l4.5 4.5M8 9.75l-4.5 4.5", ...SOLID_STROKE }],
    ["rect", { x: 11, y: 3.5, width: 9.5, height: 17, rx: 1.5 }],
    ["path", { d: "M11 12h9.5M15.75 3.5v17" }],
  ],
};

export default DeleteColumnIcon;
