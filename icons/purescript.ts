import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PureScript: its stepped bars, the middle one the mark. From the files set. */
export const PurescriptIcon: Icon = {
  name: "PurescriptIcon",
  node: [
    ["path", { d: "M3.5 6.5h10M10.5 17.5h10" }],
    ["path", { d: "M7 12h10", ...SOLID_STROKE }],
  ],
};

export default PurescriptIcon;
