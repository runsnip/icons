import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** MATLAB: the peak of the L-shaped membrane over its base, the peak the mark. From the files set. */
export const MatlabIcon: Icon = {
  name: "MatlabIcon",
  node: [
    ["path", { d: "M3.5 16 10 19.5 20.5 15.5M3.5 16C8 15 9.5 5.5 12.5 5.5s4 7 8 10" }],
    ["path", { d: "M10.4 9.2C11.1 6.8 11.7 5.5 12.5 5.5s1.5 1.1 2.2 3", ...SOLID_STROKE }],
  ],
};

export default MatlabIcon;
