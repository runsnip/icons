import type { Icon } from "../types";
import { SOLID } from "../system";

/** Molecule: three atoms bonded to one, its centre atom filled. From the files set. */
export const MoleculeIcon: Icon = {
  name: "MoleculeIcon",
  node: [
    ["circle", { cx: 5.5, cy: 6.5, r: 2 }],
    ["circle", { cx: 18.5, cy: 6.5, r: 2 }],
    ["circle", { cx: 12, cy: 18.5, r: 2 }],
    ["path", { d: "M7.2 7.8l2.6 2.2M16.8 7.8l-2.6 2.2M12 14.8v1.7" }],
    ["circle", { cx: 12, cy: 12, r: 2.8, ...SOLID }],
  ],
};

export default MoleculeIcon;
