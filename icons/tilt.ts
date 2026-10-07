import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Tilt: a pivot, the plank tilting on it the mark. From the files set. */
export const TiltIcon: Icon = {
  name: "TiltIcon",
  node: [
    ["path", { d: "M12 13.5 8.5 19.5h7Z" }],
    ["path", { d: "M3.5 14 20.5 8", ...SOLID_STROKE }],
  ],
};

export default TiltIcon;
