import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A plug in outline, its prongs the mark: PlugIcon unfilled. From the ui set. */
export const PlugOutlineIcon: Icon = {
  name: "PlugOutlineIcon",
  node: [
    ["path", { d: "M9 3.5v4M15 3.5v4", ...SOLID_STROKE }],
    ["path", { d: "M12 17v3.5" }],
    ["path", { d: "M6.5 7.5h11V11a5.5 5.5 0 0 1-11 0Z" }],
  ],
};

export default PlugOutlineIcon;
