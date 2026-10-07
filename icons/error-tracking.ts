import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Error tracking: a warning triangle over a thickened pulse. From the files set. */
export const ErrorTrackingIcon: Icon = {
  name: "ErrorTrackingIcon",
  node: [
    ["path", { d: "M12 4 20.5 19.5h-17Z" }],
    ["path", { d: "M7.5 16h2.5l1.2-2.5 1.8 4 1.2-1.5h2.3", ...SOLID_STROKE }],
  ],
};

export default ErrorTrackingIcon;
