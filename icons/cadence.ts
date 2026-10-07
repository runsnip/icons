import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cadence: a beat of bars, the middle one the mark. From the files set. */
export const CadenceIcon: Icon = {
  name: "CadenceIcon",
  node: [
    ["path", { d: "M4.5 10.5v3M8.25 7v10M15.75 7v10M19.5 10.5v3" }],
    ["path", { d: "M12 4.5v15", ...SOLID_STROKE }],
  ],
};

export default CadenceIcon;
