import type { Icon } from "../types";
import { SOLID } from "../system";

/** An executable: an application window, its title bar solid. From the files set. */
export const ExeIcon: Icon = {
  name: "ExeIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M3.5 7a2.5 2.5 0 0 1 2.5-2.5h12a2.5 2.5 0 0 1 2.5 2.5v2h-17Z", ...SOLID }],
  ],
};

export default ExeIcon;
