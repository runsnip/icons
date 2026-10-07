import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A cloud over a thickened curve: a cloud provider's configuration. From the files set. */
export const CloudConfigIcon: Icon = {
  name: "CloudConfigIcon",
  node: [
    ["path", { d: "M7.45 15.72a3.48 3.48 0 0 1 -0.52 -6.97 4.79 4.79 0 0 1 9.32 -1.22A4.09 4.09 0 0 1 16.16 15.72Z" }],
    ["path", { d: "M7 18.5c3.2 1.6 6.8 1.6 10 0", ...SOLID_STROKE }],
  ],
};

export default CloudConfigIcon;
