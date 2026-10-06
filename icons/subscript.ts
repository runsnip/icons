import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Subscript: an x with a small lowered 2. From the text set. */
export const SubscriptIcon: Icon = {
  name: "SubscriptIcon",
  node: [["path", { d: "M4 4.5 11.5 14.5M11.5 4.5 4 14.5" }], ["path", { d: "M14.5 13.5a2.75 2.5 0 0 1 5.5.6c0 2-5.5 3.4-5.5 5.9H20", ...SOLID_STROKE }]],
};

export default SubscriptIcon;
