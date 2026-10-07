import type { Icon } from "../types";
import { SOLID } from "../system";

/** PDM, the Python package manager: a hexagonal package, its core the mark. From the files set. */
export const PdmIcon: Icon = {
  name: "PdmIcon",
  node: [
    ["polygon", { points: "12,3.5 19.5,7.75 19.5,16.25 12,20.5 4.5,16.25 4.5,7.75" }],
    ["path", { d: "M4.5 7.75 9.5 10.5M19.5 7.75 14.5 10.5M12 15v5.5" }],
    ["circle", { cx: 12, cy: 12, r: 2.6, ...SOLID }],
  ],
};

export default PdmIcon;
