import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A scroll, its two rolls thickened: an AppleScript. From the files set. */
export const ApplescriptIcon: Icon = {
  name: "ApplescriptIcon",
  node: [
    ["path", { d: "M7 5v14M17 5v14M9.5 10h5M9.5 14h5" }],
    ["path", { d: "M4.5 5h15M4.5 19h15", ...SOLID_STROKE }],
  ],
};

export default ApplescriptIcon;
