import type { Icon } from "../types";
import { SOLID } from "../system";

/** Cairo: a pyramid, its capstone the mark. From the files set. */
export const CairoIcon: Icon = {
  name: "CairoIcon",
  node: [
    ["path", { d: "M12 4 20.5 19.5h-17Z" }],
    ["path", { d: "M3.5 19.5l3.8-6.9h9.4" }],
    ["path", { d: "M12 4l3 5.5H9Z", ...SOLID }],
  ],
};

export default CairoIcon;
