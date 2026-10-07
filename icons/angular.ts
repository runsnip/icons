import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shield with a thickened A: Angular. From the files set. */
export const AngularIcon: Icon = {
  name: "AngularIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M8.8 15.5 12 7.5l3.2 8M10 12.8h4", ...SOLID_STROKE }],
  ],
};

export default AngularIcon;
