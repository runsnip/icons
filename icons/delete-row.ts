import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A row with a cross. From the sheets set. */
export const DeleteRowIcon: Icon = {
  name: "DeleteRowIcon",
  node: [
    ["path", { d: "M9.75 3.5l4.5 4.5M14.25 3.5l-4.5 4.5", ...SOLID_STROKE }],
    ["rect", { x: 3.5, y: 11, width: 17, height: 9.5, rx: 1.5 }],
    ["path", { d: "M12 11v9.5M3.5 15.75h17" }],
  ],
};

export default DeleteRowIcon;
