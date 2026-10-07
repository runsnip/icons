import type { Icon } from "../types";
import { SOLID } from "../system";

/** Snowpack: a mountain, its snow cap the mark. From the files set. */
export const SnowpackIcon: Icon = {
  name: "SnowpackIcon",
  node: [
    ["path", { d: "M3.5 19.5 10 7l3.5 6.5 2-3 5 9Z" }],
    ["path", { d: "M10 7 7.4 12l1.75-1 1 1 1-1 1.55 1Z", ...SOLID }],
  ],
};

export default SnowpackIcon;
