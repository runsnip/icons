import type { Icon } from "../types";
import { SOLID } from "../system";

/** Interfaces: a component and the lollipop it offers, the socket the mark. From the files set. */
export const InterfaceIcon: Icon = {
  name: "InterfaceIcon",
  node: [
    ["rect", { x: 3.5, y: 7.5, width: 8, height: 9, rx: 1.5 }],
    ["path", { d: "M11.5 12h3" }],
    ["circle", { cx: 17.5, cy: 12, r: 3, ...SOLID }],
  ],
};

export default InterfaceIcon;
