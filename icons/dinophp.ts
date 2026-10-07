import type { Icon } from "../types";
import { SOLID } from "../system";

/** DinoPHP: PHP's oval, a dinosaur's spikes solid on its back. From the files set. */
export const DinophpIcon: Icon = {
  name: "DinophpIcon",
  node: [
    ["ellipse", { cx: 12, cy: 14, rx: 8.5, ry: 5.5 }],
    ["polygon", { points: "7.5,9.6 9.75,5 12,8.5 14.25,5 16.5,9.6", ...SOLID }],
  ],
};

export default DinophpIcon;
