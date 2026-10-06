import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A wrench in outline, its handle the mark: WrenchIcon unfilled. From the ui set. */
export const WrenchOutlineIcon: Icon = {
  name: "WrenchOutlineIcon",
  node: [
    ["path", { d: "M11.6 13.1 4.7 20", ...SOLID_STROKE }],
    ["path", { d: "M14.2 3.5a6 6 0 0 0-3.8 8.4l2.4 2.4a6 6 0 0 0 7.4-7.4l-3 3-3-3 3-3a6 6 0 0 0-3-.4Z" }],
  ],
};

export default WrenchOutlineIcon;
