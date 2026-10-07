import type { Icon } from "../types";
import { SOLID } from "../system";

/** bitHound: a hound's paw, its toes the mark. From the files set. */
export const BithoundIcon: Icon = {
  name: "BithoundIcon",
  node: [
    ["ellipse", { cx: 12, cy: 15.5, rx: 4.5, ry: 3.5 }],
    ["circle", { cx: 6, cy: 10.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 9.5, cy: 6.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 14.5, cy: 6.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 18, cy: 10.5, r: 1.8, ...SOLID }],
  ],
};

export default BithoundIcon;
