import type { Icon } from "../types";
import { SOLID } from "../system";

/** Chrome: a ring parted in three round its centre, the centre the mark. From the files set. */
export const ChromeIcon: Icon = {
  name: "ChromeIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 8.8h7.9M14.77 13.6l-3.94 6.82M9.23 13.6 5.29 6.78" }],
    ["circle", { cx: 12, cy: 12, r: 3.2, ...SOLID }],
  ],
};

export default ChromeIcon;
