import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A play triangle with a bar before it. From the slides set. */
export const PresentFromStartIcon: Icon = {
  name: "PresentFromStartIcon",
  node: [
    ["path", { d: "M10 5.5v13l9.5-6.5Z" }],
    ["path", { d: "M5 5v14", ...SOLID_STROKE }],
  ],
};

export default PresentFromStartIcon;
