import type { Icon } from "../types";
import { SOLID } from "../system";

/** Registry: two blocks, a third lifted above them filled. From the files set. */
export const RegeditIcon: Icon = {
  name: "RegeditIcon",
  node: [
    ["rect", { x: 4.5, y: 13, width: 6.5, height: 6.5, rx: 1.5 }],
    ["rect", { x: 13, y: 13, width: 6.5, height: 6.5, rx: 1.5 }],
    ["path", { d: "M12 3.5 15.5 7 12 10.5 8.5 7Z", ...SOLID }],
  ],
};

export default RegeditIcon;
