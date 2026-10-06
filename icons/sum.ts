import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Σ. From the sheets set. */
export const SumIcon: Icon = {
  name: "SumIcon",
  node: [
    ["path", { d: "M18.5 6.5v-2h-13l7 7.5-7 7.5h13v-2", ...SOLID_STROKE }],
  ],
};

export default SumIcon;
