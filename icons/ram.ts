import type { Icon } from "../types";
import { SOLID } from "../system";

/** Memory: a memory module, its contacts below with the key's gap, its chips solid. From the ops set. */
export const RamIcon: Icon = {
  name: "RamIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 9.5, rx: 1.5 }],
    ["path", { d: "M6.5 15.5V18M9.5 15.5V18M14.5 15.5V18M17.5 15.5V18" }],
    ["rect", { x: 6.5, y: 9, width: 3, height: 3.5, rx: 0.5, ...SOLID }],
    ["rect", { x: 10.5, y: 9, width: 3, height: 3.5, rx: 0.5, ...SOLID }],
    ["rect", { x: 14.5, y: 9, width: 3, height: 3.5, rx: 0.5, ...SOLID }],
  ],
};

export default RamIcon;
