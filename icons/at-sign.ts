import type { Icon } from "../types";
import { SOLID } from "../system";

/** Mention someone: the @ sign. From the collab set. */
export const AtSignIcon: Icon = {
  name: "AtSignIcon",
  node: [
    ["path", { d: "M15.5 8.5v5a2.5 2.5 0 0 0 5 0V12a8.5 8.5 0 1 0-3.4 6.8" }],
    ["circle", { cx: 11.5, cy: 12, r: 3, ...SOLID }],
  ],
};

export default AtSignIcon;
