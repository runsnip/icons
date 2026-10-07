import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A ledger, its two entries thickened: Beancount. From the files set. */
export const BeancountIcon: Icon = {
  name: "BeancountIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 9h17M12 9v10.5" }],
    ["path", { d: "M6 13h3.5M14.5 16H18", ...SOLID_STROKE }],
  ],
};

export default BeancountIcon;
