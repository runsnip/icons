import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Delta: the letter Δ, its heavy stroke the mark. From the files set. */
export const DeltaIcon: Icon = {
  name: "DeltaIcon",
  node: [
    ["path", { d: "M12 4.5 3.5 19.5h17" }],
    ["path", { d: "M12 4.5l8.5 15", ...SOLID_STROKE }],
  ],
};

export default DeltaIcon;
