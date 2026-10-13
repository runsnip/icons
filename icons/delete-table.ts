import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Delete a table: a table with a cross beside it. From the insert set. */
export const DeleteTableIcon: Icon = {
  name: "DeleteTableIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11, height: 11, rx: 2 }],
    ["path", { d: "M3.5 7.5h11M9 7.5v7" }],
    ["path", { d: "M16 16l4.5 4.5M20.5 16l-4.5 4.5", ...SOLID_STROKE }],
  ],
};

export default DeleteTableIcon;
