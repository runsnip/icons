import type { Icon } from "../types";
import { SOLID } from "../system";

/** Angular's shield with a filled play triangle: an Angular directive. From the files set. */
export const AngularDirectiveIcon: Icon = {
  name: "AngularDirectiveIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["path", { d: "M10 8.5v7l5.5-3.5Z", ...SOLID }],
  ],
};

export default AngularDirectiveIcon;
