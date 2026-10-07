import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Pipes: a length of pipe, its two rims the mark. From the files set. */
export const PipeIcon: Icon = {
  name: "PipeIcon",
  node: [
    ["path", { d: "M5.5 8.5h13M5.5 15.5h13" }],
    ["path", { d: "M4.5 7v10M19.5 7v10", ...SOLID_STROKE }],
  ],
};

export default PipeIcon;
