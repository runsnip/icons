import type { Icon } from "../types";
import { SOLID } from "../system";

/** Windows: an application window, its title bar the mark. From the files set. */
export const WindowsIcon: Icon = {
  name: "WindowsIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M3.5 6.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2V9h-17Z", ...SOLID }],
  ],
};

export default WindowsIcon;
