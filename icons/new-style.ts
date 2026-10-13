import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A new style: the style's letter with a plus. From the text set. */
export const NewStyleIcon: Icon = {
  name: "NewStyleIcon",
  node: [
    ["path", { d: "M3.5 18.5 8 5.5l4.5 13M5.2 14h5.6" }],
    ["path", { d: "M17 9v7M13.5 12.5h7", ...SOLID_STROKE }],
  ],
};

export default NewStyleIcon;
