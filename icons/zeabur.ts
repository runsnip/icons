import type { Icon } from "../types";
import { SOLID } from "../system";

/** Zeabur: a Z of bars, its last block the mark. From the files set. */
export const ZeaburIcon: Icon = {
  name: "ZeaburIcon",
  node: [
    ["path", { d: "M4.5 5.5h15L5 18.5h8" }],
    ["rect", { x: 14.5, y: 16.5, width: 5, height: 4, rx: 1, ...SOLID }],
  ],
};

export default ZeaburIcon;
