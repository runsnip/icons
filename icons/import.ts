import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Import: an arrow entering a box. From the insert set. */
export const ImportIcon: Icon = {
  name: "ImportIcon",
  node: [
    ["rect", { x: 9.5, y: 5.5, width: 11, height: 13, rx: 2 }],
    ["path", { d: "M3.5 12H15" }],
    ["path", { d: "M11.5 8.5 15 12l-3.5 3.5", ...SOLID_STROKE }],
  ],
};

export default ImportIcon;
