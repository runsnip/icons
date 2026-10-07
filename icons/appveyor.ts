import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A circle with a thickened chevron: AppVeyor. From the files set. */
export const AppveyorIcon: Icon = {
  name: "AppveyorIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.3 10.3 12 14l3.7-3.7", ...SOLID_STROKE }],
  ],
};

export default AppveyorIcon;
