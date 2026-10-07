import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Slint: a squared S, thickened, in a square. From the files set. */
export const SlintIcon: Icon = {
  name: "SlintIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M16 7.5H9.5a2.25 2.25 0 0 0 0 4.5h5a2.25 2.25 0 0 1 0 4.5H8", ...SOLID_STROKE }],
  ],
};

export default SlintIcon;
