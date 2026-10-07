import type { Icon } from "../types";
import { SOLID } from "../system";

/** Jupyter: its two orbits and moons, the moons the mark. From the files set. */
export const JupyterIcon: Icon = {
  name: "JupyterIcon",
  node: [
    ["path", { d: "M4.5 9.5C7 5.8 17 5.8 19.5 9.5M4.5 14.5c2.5 3.7 12.5 3.7 15 0" }],
    ["circle", { cx: 18.7, cy: 4.8, r: 1.3, ...SOLID }],
    ["circle", { cx: 5.3, cy: 19.2, r: 1.3, ...SOLID }],
  ],
};

export default JupyterIcon;
