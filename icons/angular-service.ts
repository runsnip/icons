import type { Icon } from "../types";
import { SOLID } from "../system";

/** Angular's shield with a filled circle: an Angular service. From the files set. */
export const AngularServiceIcon: Icon = {
  name: "AngularServiceIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["circle", { cx: 12, cy: 11.8, r: 3.2, ...SOLID }],
  ],
};

export default AngularServiceIcon;
