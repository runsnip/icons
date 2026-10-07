import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rolldown: a round with a thickened arrow rolling down through it. From the files set. */
export const RolldownIcon: Icon = {
  name: "RolldownIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 7.5v8.5M8.8 13 12 16.2 15.2 13", ...SOLID_STROKE }],
  ],
};

export default RolldownIcon;
