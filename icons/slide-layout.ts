import type { Icon } from "../types";
import { SOLID } from "../system";

/** A slide divided into placeholders. From the slides set. */
export const SlideLayoutIcon: Icon = {
  name: "SlideLayoutIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2 }],
    ["path", { d: "M3.5 10.5V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v3.5Z", ...SOLID }],
    ["path", { d: "M12 10.5V19" }],
  ],
};

export default SlideLayoutIcon;
