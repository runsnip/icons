import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A container: a shipping box, its ribs the mark. From the files set. */
export const ContainerIcon: Icon = {
  name: "ContainerIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 1.5 }],
    ["path", { d: "M8 9.5v5M12 9.5v5M16 9.5v5", ...SOLID_STROKE }],
  ],
};

export default ContainerIcon;
