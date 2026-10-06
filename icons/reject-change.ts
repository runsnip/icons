import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Reject a change: a marked page with a cross. From the insert set. */
export const RejectChangeIcon: Icon = {
  name: "RejectChangeIcon",
  node: [
    ["path", { d: "M15 3.5H9.5A2.5 2.5 0 0 0 7 6v12a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M3.5 10.5v8" }],
    ["path", { d: "M11 11.5l5 5M16 11.5l-5 5", ...SOLID_STROKE }],
  ],
};

export default RejectChangeIcon;
