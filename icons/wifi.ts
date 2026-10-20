import type { Icon } from "../types";
import { SOLID } from "../system";

/** A wireless network: three waves spreading from their source, the source the mark. From the ui set. */
export const WifiIcon: Icon = {
  name: "WifiIcon",
  node: [
    ["path", { d: "M3.5 9.84a12.5 12.5 0 0 1 17 0M6.22 12.77a8.5 8.5 0 0 1 11.56 0M8.94 15.7a4.5 4.5 0 0 1 6.12 0" }],
    ["circle", { cx: 12, cy: 19, r: 1.5, ...SOLID }],
  ],
};

export default WifiIcon;
