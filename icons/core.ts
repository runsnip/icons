import type { Icon } from "../types";
import { SOLID } from "../system";

/** A core: a ring round a solid centre. From the files set. */
export const CoreIcon: Icon = {
  name: "CoreIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 12, r: 3.5, ...SOLID }],
  ],
};

export default CoreIcon;
