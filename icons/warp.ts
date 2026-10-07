import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Warp: a prompt with speed lines, the prompt the mark. From the files set. */
export const WarpIcon: Icon = {
  name: "WarpIcon",
  node: [
    ["path", { d: "M12.5 8h8M14.5 12h6M12.5 16h8" }],
    ["path", { d: "M4.5 7.5 9.5 12l-5 4.5", ...SOLID_STROKE }],
  ],
};

export default WarpIcon;
