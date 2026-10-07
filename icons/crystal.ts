import type { Icon } from "../types";
import { SOLID } from "../system";

/** Crystal: a tilted crystal, one facet solid. From the files set. */
export const CrystalIcon: Icon = {
  name: "CrystalIcon",
  node: [
    ["polygon", { points: "9.5,3.5 20.5,9.5 14.5,20.5 3.5,14.5" }],
    ["path", { d: "M9.5 3.5 14.5 20.5" }],
    ["polygon", { points: "9.5,3.5 17.5,7.9 12.2,11.6", ...SOLID }],
  ],
};

export default CrystalIcon;
