import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Lean: the ∀ of the prover, its bar the mark. From the files set. */
export const LeanIcon: Icon = {
  name: "LeanIcon",
  node: [
    ["path", { d: "M4.5 4.5l7.5 15 7.5-15" }],
    ["path", { d: "M7.5 10.5h9", ...SOLID_STROKE }],
  ],
};

export default LeanIcon;
