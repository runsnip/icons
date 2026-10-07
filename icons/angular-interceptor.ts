import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Angular's shield with an arrow stopped at a bar: an Angular interceptor. From the files set. */
export const AngularInterceptorIcon: Icon = {
  name: "AngularInterceptorIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M8.3 12h4.5M15.5 8.5v7M10.8 9.8l2.2 2.2-2.2 2.2", ...SOLID_STROKE }],
  ],
};

export default AngularInterceptorIcon;
