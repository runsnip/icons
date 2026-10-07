import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A thickened $ in a frame: a bashly command-line definition. From the files set. */
export const BashlyIcon: Icon = {
  name: "BashlyIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M14.5 8.6A2.5 2.5 0 0 0 12 7 2.5 2.5 0 0 0 12 12 2.5 2.5 0 0 1 12 17 2.5 2.5 0 0 1 9.5 15.4M12 5.5v13", ...SOLID_STROKE }],
  ],
};

export default BashlyIcon;
