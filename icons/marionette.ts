import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A configuration manifest that pulls the strings: a marionette, its control bar the mark. From the files set. */
export const MarionetteIcon: Icon = {
  name: "MarionetteIcon",
  node: [
    ["path", { d: "M5.5 5.5 9.5 14M18.5 5.5 14.5 14" }],
    ["circle", { cx: 12, cy: 16.5, r: 3.5 }],
    ["path", { d: "M5.5 5.5h13M12 3.5v4.5", ...SOLID_STROKE }],
  ],
};

export default MarionetteIcon;
