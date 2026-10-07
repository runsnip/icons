import type { Icon } from "../types";
import { SOLID } from "../system";

/** Jest: the card over its three balls, the balls the mark. From the files set. */
export const JestIcon: Icon = {
  name: "JestIcon",
  node: [
    ["path", { d: "M7.5 4.5h9L12 12.5Z" }],
    ["path", { d: "M12 12.5v2" }],
    ["circle", { cx: 5.7, cy: 17.8, r: 2.2, ...SOLID }],
    ["circle", { cx: 12, cy: 17.8, r: 2.2, ...SOLID }],
    ["circle", { cx: 18.3, cy: 17.8, r: 2.2, ...SOLID }],
  ],
};

export default JestIcon;
