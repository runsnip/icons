import type { Icon } from "../types";
import { SOLID } from "../system";

/** Grain: a wheat ear, its top kernel the mark. From the files set. */
export const GrainIcon: Icon = {
  name: "GrainIcon",
  node: [
    ["path", { d: "M12 20.5V9.5M7.5 10.5l4.5 3.5 4.5-3.5M7.5 14.5l4.5 3.5 4.5-3.5" }],
    ["path", { d: "M12 10c-1.75-1.75-1.75-4.75 0-6.5 1.75 1.75 1.75 4.75 0 6.5Z", ...SOLID }],
  ],
};

export default GrainIcon;
