import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Accept a change: a marked page with a tick. From the insert set. */
export const AcceptChangeIcon: Icon = {
  name: "AcceptChangeIcon",
  node: [
    ["path", { d: "M15 3.5H9.5A2.5 2.5 0 0 0 7 6v12a2.5 2.5 0 0 0 2.5 2.5h8.5a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M3.5 10.5v8" }],
    ["path", { d: "M10 14l2.5 2.5 5-5", ...SOLID_STROKE }],
  ],
};

export default AcceptChangeIcon;
