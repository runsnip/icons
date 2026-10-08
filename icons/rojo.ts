import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Rojo: an R, its leg the mark. From the files set. */
export const RojoIcon: Icon = {
  name: "RojoIcon",
  node: [
    ["path", { d: "M7.5 20V5h5a3.5 3.5 0 0 1 0 7h-5" }],
    ["path", { d: "M12 12l5 8", ...SOLID_STROKE }],
  ],
};

export default RojoIcon;
