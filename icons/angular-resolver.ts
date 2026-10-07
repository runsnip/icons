import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Angular's shield with a thickened arrow down: an Angular resolver. From the files set. */
export const AngularResolverIcon: Icon = {
  name: "AngularResolverIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M12 7.8v7.4M9.2 12.6l2.8 2.8 2.8-2.8", ...SOLID_STROKE }],
  ],
};

export default AngularResolverIcon;
