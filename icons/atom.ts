import type { Icon } from "../types";
import { SOLID } from "../system";

/** Two crossed orbits round a filled nucleus: Atom. From the files set. */
export const AtomIcon: Icon = {
  name: "AtomIcon",
  node: [
    ["path", { d: "M4.58 4.58A10.5 4 45 0 1 19.42 19.42 10.5 4 45 0 1 4.58 4.58ZM19.42 4.58A10.5 4 -45 0 1 4.58 19.42 10.5 4 -45 0 1 19.42 4.58Z" }],
    ["circle", { cx: 12, cy: 12, r: 2, ...SOLID }],
  ],
};

export default AtomIcon;
