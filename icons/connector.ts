import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Two boxes joined by an elbow line. From the slides set. */
export const ConnectorIcon: Icon = {
  name: "ConnectorIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 6.5, height: 6.5, rx: 1.5 }],
    ["rect", { x: 14, y: 14, width: 6.5, height: 6.5, rx: 1.5 }],
    ["path", { d: "M10 6.75h2.25v10.5H14", ...SOLID_STROKE }],
  ],
};

export default ConnectorIcon;
