import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** An accent: a term with a hat over it. From the math set. */
export const EqAccentIcon: Icon = {
  name: "EqAccentIcon",
  node: [
    ["rect", { x: 7, y: 10, width: 10, height: 10.5, rx: 1 }],
    ["path", { d: "M8.5 6.5 12 3.5l3.5 3", ...SOLID_STROKE }],
  ],
};

export default EqAccentIcon;
