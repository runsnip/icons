import type { Icon } from "../types";
import { SOLID } from "../system";

/** Format painter: a paint roller that copies formatting. From the text set. */
export const FormatPainterIcon: Icon = {
  name: "FormatPainterIcon",
  node: [["rect", { x: 3.5, y: 3.5, width: 13, height: 5.5, rx: 1.5, ...SOLID }], ["path", { d: "M16.5 6.25h3.5v5.5H11v8" }]],
};

export default FormatPainterIcon;
