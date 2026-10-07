import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Go: the letters GO, the G's bar the mark. From the files set. */
export const GoIcon: Icon = {
  name: "GoIcon",
  node: [
    ["path", { d: "M11.43 9.88A4.25 4.25 0 1 0 12 12" }],
    ["circle", { cx: 16.75, cy: 12, r: 3.75 }],
    ["path", { d: "M12 12H8.75", ...SOLID_STROKE }],
  ],
};

export default GoIcon;
