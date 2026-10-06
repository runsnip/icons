import type { Icon } from "../types";
import { SOLID } from "../system";

/** Print: a printer with a page coming out. From the insert set. */
export const PrintIcon: Icon = {
  name: "PrintIcon",
  node: [
    ["path", { d: "M7 8.5V3.5h10v5M7 16.5H5.5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H17" }],
    ["rect", { x: 7, y: 13, width: 10, height: 7.5, rx: 1, ...SOLID }],
  ],
};

export default PrintIcon;
