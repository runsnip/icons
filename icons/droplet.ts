import type { Icon } from "../types";
import { SOLID } from "../system";

/** Fill colour: a drop. From the collab set. */
export const DropletIcon: Icon = {
  name: "DropletIcon",
  node: [
    ["path", { d: "M12 3.5C9 7 5.5 10.5 5.5 14a6.5 6.5 0 0 0 13 0c0-3.5-3.5-7-6.5-10.5Z" }],
    ["path", { d: "M8.5 14.5h7a3.5 3.5 0 0 1-7 0Z", ...SOLID }],
  ],
};

export default DropletIcon;
