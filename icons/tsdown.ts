import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** tsdown: chevrons folding down onto a base, the lower one the mark. From the files set. */
export const TsdownIcon: Icon = {
  name: "TsdownIcon",
  node: [
    ["path", { d: "M6 4.5l6 5 6-5M5 20h14" }],
    ["path", { d: "M6 10.5l6 5 6-5", ...SOLID_STROKE }],
  ],
};

export default TsdownIcon;
