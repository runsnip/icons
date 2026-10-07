import type { Icon } from "../types";
import { SOLID } from "../system";

/** Angular's shield with a filled block: an Angular component. From the files set. */
export const AngularComponentIcon: Icon = {
  name: "AngularComponentIcon",
  node: [
    ["path", { d: "M12 3.5 20 6.3l-1.3 10.5L12 20.5l-6.7-3.7L4 6.3Z" }],
    ["rect", { x: 9, y: 8.8, width: 6, height: 6, rx: 1.2, ...SOLID }],
  ],
};

export default AngularComponentIcon;
