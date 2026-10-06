import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A square grid with every border drawn. From the sheets set. */
export const BorderAllIcon: Icon = {
  name: "BorderAllIcon",
  node: [
    ["path", { d: "M4 4h16v16H4Z" }],
    ["path", { d: "M12 4v16M4 12h16", ...SOLID_STROKE }],
  ],
};

export default BorderAllIcon;
