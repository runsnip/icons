import type { Icon } from "../types";
import { SOLID } from "../system";

/** Dune: two dunes under a solid sun. From the files set. */
export const DuneIcon: Icon = {
  name: "DuneIcon",
  node: [
    ["path", { d: "M3.5 18c3-4.5 6-4.5 9 0M9.5 14c3-5 7-5 11-.5M3.5 20.5h17" }],
    ["circle", { cx: 7.5, cy: 7, r: 2.5, ...SOLID }],
  ],
};

export default DuneIcon;
