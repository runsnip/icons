import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Visual Studio: a looped ribbon closed by a heavy upright. From the files set. */
export const VisualstudioIcon: Icon = {
  name: "VisualstudioIcon",
  node: [
    ["path", { d: "M17.5 6.5 9 14c-1.2 1-3.4 1-4.5-.5v-3C5.6 9 7.8 9 9 10l8.5 7.5" }],
    ["path", { d: "M17.5 4.5v15", ...SOLID_STROKE }],
  ],
};

export default VisualstudioIcon;
