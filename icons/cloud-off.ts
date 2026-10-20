import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The cloud out of reach, sync off: a cloud struck through. From the ui set. */
export const CloudOffIcon: Icon = {
  name: "CloudOffIcon",
  node: [
    ["path", { d: "M8 17.03a3.06 3.06 0 0 1 -0.46 -6.13 4.21 4.21 0 0 1 8.19 -1.07A3.6 3.6 0 0 1 15.66 17.03Z" }],
    ["path", { d: "M4.5 19.5 19.5 4.5", ...SOLID_STROKE }],
  ],
};

export default CloudOffIcon;
