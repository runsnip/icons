import type { Icon } from "../types";
import { SOLID } from "../system";

/** Two squares, the back one emphasised. From the slides set. */
export const SendBackwardIcon: Icon = {
  name: "SendBackwardIcon",
  node: [
    ["path", { d: "M5.5 3.5H12a2 2 0 0 1 2 2V7.5H7.5V14H5.5a2 2 0 0 1-2-2V5.5a2 2 0 0 1 2-2Z", ...SOLID }],
    ["rect", { x: 10, y: 10, width: 10.5, height: 10.5, rx: 2 }],
  ],
};

export default SendBackwardIcon;
