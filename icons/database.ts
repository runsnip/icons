import type { Icon } from "../types";
import { SOLID } from "../system";

/** A database: a cylinder of records, its lid solid. From the files set. */
export const DatabaseIcon: Icon = {
  name: "DatabaseIcon",
  node: [
    ["ellipse", { cx: 12, cy: 6.5, rx: 7.5, ry: 3, ...SOLID }],
    ["path", { d: "M4.5 6.5v11c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-11M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" }],
  ],
};

export default DatabaseIcon;
