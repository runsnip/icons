import type { Icon } from "../types";
import { SOLID } from "../system";

/** doT.js: a solid dot beside the letter J. From the files set. */
export const DotjsIcon: Icon = {
  name: "DotjsIcon",
  node: [
    ["circle", { cx: 6.5, cy: 6.5, r: 2.5, ...SOLID }],
    ["path", { d: "M12.5 4.5h7M17 4.5V15a4.5 4.5 0 0 1-9 0" }],
  ],
};

export default DotjsIcon;
