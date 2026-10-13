import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A drop cap: a large first letter, three lines deep, the text running beside and under it. From the text set. */
export const DropCapIcon: Icon = {
  name: "DropCapIcon",
  node: [
    ["path", { d: "M13.5 5h7M13.5 9.5h7M13.5 14h7M3.5 19.5h17" }],
    ["path", { d: "M3.5 15 7 4.5l3.5 10.5M4.75 11.5h4.5", ...SOLID_STROKE }],
  ],
};

export default DropCapIcon;
