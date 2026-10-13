import type { Icon } from "../types";
import { SOLID } from "../system";

/** Rolling back: an arrow turning back to the mark it left from — the version before — that mark solid. From the ops set. */
export const RollbackIcon: Icon = {
  name: "RollbackIcon",
  node: [
    ["path", { d: "M20.5 18.5v-5a5 5 0 0 0-5-5H10M13 5.5l-3 3 3 3" }],
    ["circle", { cx: 5.75, cy: 8.5, r: 2.25, ...SOLID }],
  ],
};

export default RollbackIcon;
