import type { Icon } from "../types";
import { SOLID } from "../system";

/** Solidity: a long diamond split at its waist, one upper facet the mark. From the files set. */
export const SolidityIcon: Icon = {
  name: "SolidityIcon",
  node: [
    ["path", { d: "M12 3.5 6.5 12 12 20.5 17.5 12Z" }],
    ["path", { d: "M6.5 12h11" }],
    ["path", { d: "M12 3.5 6.5 12H12Z", ...SOLID }],
  ],
};

export default SolidityIcon;
