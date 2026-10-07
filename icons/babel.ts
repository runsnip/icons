import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A B over a thickened swoosh: Babel. From the files set. */
export const BabelIcon: Icon = {
  name: "BabelIcon",
  node: [
    ["path", { d: "M7.5 4.5v12h5a3 3 0 0 0 0-6h-5m0 0h4.25a3 3 0 0 0 0-6H7.5" }],
    ["path", { d: "M4.5 19.8c5 .8 10 .2 15-2.6", ...SOLID_STROKE }],
  ],
};

export default BabelIcon;
