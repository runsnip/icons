import type { Icon } from "../types";
import { SOLID } from "../system";

/** Custom: three upright sliders, their knobs solid. From the files set. */
export const CustomIcon: Icon = {
  name: "CustomIcon",
  node: [
    ["path", { d: "M7 4v16M12 4v16M17 4v16" }],
    ["circle", { cx: 7, cy: 15, r: 2.4, ...SOLID }],
    ["circle", { cx: 12, cy: 8.5, r: 2.4, ...SOLID }],
    ["circle", { cx: 17, cy: 13, r: 2.4, ...SOLID }],
  ],
};

export default CustomIcon;
