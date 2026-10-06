import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Pan or grab: an open hand. From the collab set. */
export const HandIcon: Icon = {
  name: "HandIcon",
  node: [
    ["path", { d: "M7.5 12v3a5.5 5.5 0 0 0 11 0V10.5M7.5 14 5 11.5" }],
    ["path", { d: "M9.5 11.5V6M13 11V4.5M16.5 11V6", ...SOLID_STROKE }],
  ],
};

export default HandIcon;
