import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Vim: a heavy V in a diamond. From the files set. */
export const VimIcon: Icon = {
  name: "VimIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 12 12 20.5 3.5 12Z" }],
    ["path", { d: "M8.5 9 12 15.5 15.5 9", ...SOLID_STROKE }],
  ],
};

export default VimIcon;
