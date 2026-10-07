import type { Icon } from "../types";
import { SOLID } from "../system";

/** SiYuan: a page of blocks, one block filled. From the files set. */
export const SiyuanIcon: Icon = {
  name: "SiyuanIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7 8h10M7 11.5h6" }],
    ["rect", { x: 7, y: 14, width: 10, height: 3, rx: 1, ...SOLID }],
  ],
};

export default SiyuanIcon;
