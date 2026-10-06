import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A watermark: a page with a faint diagonal mark across it. From the insert set. */
export const WatermarkIcon: Icon = {
  name: "WatermarkIcon",
  node: [
    ["path", { d: "M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M7.5 17.5 16.5 8.5", "stroke-dasharray": "0 3.2", ...SOLID_STROKE }],
  ],
};

export default WatermarkIcon;
