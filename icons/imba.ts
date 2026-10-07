import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Imba: a wing in flight, its leading edge the mark. From the files set. */
export const ImbaIcon: Icon = {
  name: "ImbaIcon",
  node: [
    ["path", { d: "M3.5 12.5 20.5 4.5 14 19.5l-2.5-5.5Z" }],
    ["path", { d: "M11.5 14 20.5 4.5", ...SOLID_STROKE }],
  ],
};

export default ImbaIcon;
