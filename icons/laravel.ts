import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Laravel: its L of stacked blocks, the joint the mark. From the files set. */
export const LaravelIcon: Icon = {
  name: "LaravelIcon",
  node: [
    ["path", { d: "M4.5 6 8 4l3.5 2v8.5L16 12l3.5 2v4.5L13 20.5 4.5 16Z" }],
    ["path", { d: "M8 8v8.2l5 2.3 6.5-4.5", ...SOLID_STROKE }],
  ],
};

export default LaravelIcon;
