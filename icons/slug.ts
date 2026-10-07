import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A slug: its low body, the feelers thickened. From the files set. */
export const SlugIcon: Icon = {
  name: "SlugIcon",
  node: [
    ["path", { d: "M3.5 18.5H16a4 4 0 0 0 0-8c-2.8 0-4.2 2.4-5.5 4.6-1.2 2-3.5 3.4-7 3.4Z" }],
    ["path", { d: "M15 10.6 14.4 6M18 11.3l1.8-3.8", ...SOLID_STROKE }],
  ],
};

export default SlugIcon;
