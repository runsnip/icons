import type { Icon } from "../types";
import { SOLID } from "../system";

/** A header: a page with its top band emphasised. From the insert set. */
export const HeaderIcon: Icon = {
  name: "HeaderIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M4.5 6A2.5 2.5 0 0 1 7 3.5h10A2.5 2.5 0 0 1 19.5 6v2.5h-15Z", ...SOLID }],
    ["path", { d: "M8 12.5h8M8 16h5" }],
  ],
};

export default HeaderIcon;
