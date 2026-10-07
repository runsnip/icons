import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Angular's shield with a thickened tick: an Angular guard. From the files set. */
export const AngularGuardIcon: Icon = {
  name: "AngularGuardIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M8.7 12l2.4 2.4 4.3-4.6", ...SOLID_STROKE }],
  ],
};

export default AngularGuardIcon;
