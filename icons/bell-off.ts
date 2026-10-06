import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Notifications muted: a bell struck through. From the collab set. */
export const BellOffIcon: Icon = {
  name: "BellOffIcon",
  node: [
    ["path", { d: "M6.5 16.5V10.5a5.5 5.5 0 0 1 11 0v6M4.5 16.5h15M10.5 19.5h3" }],
    ["path", { d: "M4.5 20 19.5 5", ...SOLID_STROKE }],
  ],
};

export default BellOffIcon;
