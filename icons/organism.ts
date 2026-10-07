import type { Icon } from "../types";
import { SOLID } from "../system";

/** Organisms in atomic design: a cell, its nucleus the mark. From the files set. */
export const OrganismIcon: Icon = {
  name: "OrganismIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 8.5, cy: 15, r: 1.6 }],
    ["circle", { cx: 13.5, cy: 10.5, r: 3, ...SOLID }],
  ],
};

export default OrganismIcon;
