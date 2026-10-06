import type { Icon } from "../types";
import { SOLID } from "../system";

/** Font colour: the letter A over a bar of the text colour. From the text set. */
export const FontColorIcon: Icon = {
  name: "FontColorIcon",
  node: [["path", { d: "M6.5 15 12 3.5 17.5 15M8.4 11h7.2" }], ["rect", { x: 3.5, y: 17.5, width: 17, height: 3, rx: 1, ...SOLID }]],
};

export default FontColorIcon;
