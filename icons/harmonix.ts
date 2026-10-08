import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Harmonix: a diamond on crossed legs, the legs the mark. From the files set. */
export const HarmonixIcon: Icon = {
  name: "HarmonixIcon",
  node: [
    ["path", { d: "M12 3.5 16.5 8 12 12.5 7.5 8Z" }],
    ["path", { d: "M9.5 10.5 5 20.5M14.5 10.5l4.5 10", ...SOLID_STROKE }],
  ],
};

export default HarmonixIcon;
