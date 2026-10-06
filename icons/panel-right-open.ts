import type { Icon } from "../types";
import { SOLID } from "../system";

/** Open the right panel: a panel on the right with an arrow out. From the collab set. */
export const PanelRightOpenIcon: Icon = {
  name: "PanelRightOpenIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["rect", { x: 14.5, y: 4.5, width: 6, height: 15, rx: 2.5, ...SOLID }],
    ["path", { d: "M10 10l-2 2 2 2" }],
  ],
};

export default PanelRightOpenIcon;
