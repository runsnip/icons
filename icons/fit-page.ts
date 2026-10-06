import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Fit page: a whole page inside corner brackets. From the insert set. */
export const FitPageIcon: Icon = {
  name: "FitPageIcon",
  node: [
    ["path", { d: "M3.5 8.5v-5h5M15.5 3.5h5v5M20.5 15.5v5h-5M8.5 20.5h-5v-5", ...SOLID_STROKE }],
    ["path", { d: "M12.5 7H10a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 10 17h4a1.5 1.5 0 0 0 1.5-1.5V10Z" }],
  ],
};

export default FitPageIcon;
