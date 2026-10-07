import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** werf: a sailing ship, its mast the mark. From the files set. */
export const WerfIcon: Icon = {
  name: "WerfIcon",
  node: [
    ["path", { d: "M3.5 14.5h17l-3 5h-11Z" }],
    ["path", { d: "M12 5.5 17.5 12H12" }],
    ["path", { d: "M12 4v10.5", ...SOLID_STROKE }],
  ],
};

export default WerfIcon;
