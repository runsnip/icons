import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A limit: an arrow coming up to a bound. From the math set. */
export const EqLimitIcon: Icon = {
  name: "EqLimitIcon",
  node: [
    ["path", { d: "M3.5 12h12.5M13.5 9l3 3-3 3" }],
    ["path", { d: "M20.5 6.5v11", ...SOLID_STROKE }],
  ],
};

export default EqLimitIcon;
