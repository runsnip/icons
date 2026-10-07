import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gridsome: a circle holding a grid of four dots, the dots the mark. From the files set. */
export const GridsomeIcon: Icon = {
  name: "GridsomeIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M7.5 9.5a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0ZM13.3 9.5a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0ZM7.5 14.5a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0ZM13.3 14.5a1.6 1.6 0 1 0 3.2 0 1.6 1.6 0 1 0-3.2 0Z", ...SOLID }],
  ],
};

export default GridsomeIcon;
