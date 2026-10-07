import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Excalidraw: a hand-drawn box, the pen's stroke the mark. From the files set. */
export const ExcalidrawIcon: Icon = {
  name: "ExcalidrawIcon",
  node: [
    ["path", { d: "M3.5 5.5 17 4.5M5 3.5l.5 13.5M4 15.5l7.5-.5M15.5 3.5l.5 7" }],
    ["path", { d: "M12.5 20l7.5-7.5", ...SOLID_STROKE }],
  ],
};

export default ExcalidrawIcon;
