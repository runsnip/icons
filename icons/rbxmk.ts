import type { Icon } from "../types";
import { SOLID } from "../system";

/** rbxmk, a tool that builds game files: a block between brackets, the block the mark. From the files set. */
export const RbxmkIcon: Icon = {
  name: "RbxmkIcon",
  node: [
    ["path", { d: "M7 4.5H4.5v15H7M17 4.5h2.5v15H17" }],
    ["rect", { x: 9, y: 9, width: 6, height: 6, rx: 1, ...SOLID }],
  ],
};

export default RbxmkIcon;
