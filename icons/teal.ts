import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Teal: a T in a circle, the T the mark. From the files set. */
export const TealIcon: Icon = {
  name: "TealIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.5 9h7M12 9v7.5", ...SOLID_STROKE }],
  ],
};

export default TealIcon;
