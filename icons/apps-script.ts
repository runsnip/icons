import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A ring with three thickened spokes: Apps Script. From the files set. */
export const AppsScriptIcon: Icon = {
  name: "AppsScriptIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 3.5 }],
    ["path", { d: "M12 17.5v3M7.24 9.25 4.64 7.75M16.76 9.25l2.6-1.5", ...SOLID_STROKE }],
  ],
};

export default AppsScriptIcon;
