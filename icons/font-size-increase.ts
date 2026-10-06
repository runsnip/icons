import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Larger font: the letter A with a small up arrow. From the text set. */
export const FontSizeIncreaseIcon: Icon = {
  name: "FontSizeIncreaseIcon",
  node: [["path", { d: "M3.5 19.5 9 4.5l5.5 15M5.4 14.5h7.2" }], ["path", { d: "M18.25 7v7" }], ["path", { d: "M16 8.5l2.25-3 2.25 3", ...SOLID_STROKE }]],
};

export default FontSizeIncreaseIcon;
