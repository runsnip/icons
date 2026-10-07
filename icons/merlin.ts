import type { Icon } from "../types";
import { SOLID } from "../system";

/** Merlin: a wizard's hat with a star on it, the star the mark. From the files set. */
export const MerlinIcon: Icon = {
  name: "MerlinIcon",
  node: [
    ["path", { d: "M13 4 7.5 16.5h9Z" }],
    ["path", { d: "M4 19.5h16" }],
    ["path", { d: "M12 9.5q.3 1.7 2 2-1.7.3-2 2-.3-1.7-2-2 1.7-.3 2-2Z", ...SOLID }],
  ],
};

export default MerlinIcon;
