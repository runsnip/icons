import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Angular's shield with a thickened bar: an Angular pipe. From the files set. */
export const AngularPipeIcon: Icon = {
  name: "AngularPipeIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M12 7.8v8.4", ...SOLID_STROKE }],
  ],
};

export default AngularPipeIcon;
