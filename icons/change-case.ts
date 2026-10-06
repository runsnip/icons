import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Change case: a capital A beside a small a. From the text set. */
export const ChangeCaseIcon: Icon = {
  name: "ChangeCaseIcon",
  node: [["path", { d: "M3.5 19.5 7.5 5.5l4 14M5 14.5h5" }], ["path", { d: "M20 13v6.5M20 16.25a3.25 3.25 0 1 1-6.5 0 3.25 3.25 0 1 1 6.5 0", ...SOLID_STROKE }]],
};

export default ChangeCaseIcon;
