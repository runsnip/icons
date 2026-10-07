import type { Icon } from "../types";
import { SOLID } from "../system";

/** Julia: its three circles, the top one the mark. From the files set. */
export const JuliaIcon: Icon = {
  name: "JuliaIcon",
  node: [
    ["circle", { cx: 12, cy: 7.25, r: 3.5, ...SOLID }],
    ["circle", { cx: 7, cy: 16.5, r: 3.5 }],
    ["circle", { cx: 17, cy: 16.5, r: 3.5 }],
  ],
};

export default JuliaIcon;
