import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An environment: a leaf, its vein the mark. From the files set. */
export const EnvironmentIcon: Icon = {
  name: "EnvironmentIcon",
  node: [
    ["path", { d: "M4.5 19.5C4.5 10.5 10 4.5 19.5 4.5c0 9.5-6 15-15 15Z" }],
    ["path", { d: "M4.5 19.5 13 11", ...SOLID_STROKE }],
  ],
};

export default EnvironmentIcon;
