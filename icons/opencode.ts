import type { Icon } from "../types";
import { SOLID } from "../system";

/** opencode, the coding agent: its squared frame, the block at its foot the mark. From the files set. */
export const OpencodeIcon: Icon = {
  name: "OpencodeIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 1.5 }],
    ["rect", { x: 8.5, y: 12, width: 7, height: 4.5, rx: 0.5, ...SOLID }],
  ],
};

export default OpencodeIcon;
