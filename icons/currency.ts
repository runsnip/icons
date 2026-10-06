import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A dollar/currency sign. From the sheets set. */
export const CurrencyIcon: Icon = {
  name: "CurrencyIcon",
  node: [
    ["path", { d: "M12 3.5v17" }],
    ["path", { d: "M16 8c-.5-1.6-2-2.5-4-2.5-2.3 0-4 1.1-4 3 0 4.4 8 2.4 8 7 0 1.9-1.7 3-4 3-2 0-3.5-.9-4-2.5", ...SOLID_STROKE }],
  ],
};

export default CurrencyIcon;
