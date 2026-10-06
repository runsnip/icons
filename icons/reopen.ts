import type { Icon } from "../types";
import { SOLID } from "../system";

/** Reopen a resolved thread: a circle arrow bringing the thread back. From the collab set. */
export const ReopenIcon: Icon = {
  name: "ReopenIcon",
  node: [
    ["path", { d: "M4.5 12a7.5 7.5 0 1 0 2.2-5.3M4.5 4.5V9H9" }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default ReopenIcon;
