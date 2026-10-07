import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A contract: a page with its terms, the signature the mark. From the files set. */
export const ContractIcon: Icon = {
  name: "ContractIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2 }],
    ["path", { d: "M8 8h8M8 11.5h5" }],
    ["path", { d: "M8 16.5l2-2 2 2 2-2 2 2", ...SOLID_STROKE }],
  ],
};

export default ContractIcon;
