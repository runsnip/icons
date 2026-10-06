import type { Icon } from "../types";
import { SOLID } from "../system";

/** More actions: three dots stacked vertically. From the collab set. */
export const MoreVerticalIcon: Icon = {
  name: "MoreVerticalIcon",
  node: [
    ["circle", { cx: 12, cy: 5.5, r: 1.8, ...SOLID }],
    ["circle", { cx: 12, cy: 12, r: 1.8, ...SOLID }],
    ["circle", { cx: 12, cy: 18.5, r: 1.8, ...SOLID }],
  ],
};

export default MoreVerticalIcon;
