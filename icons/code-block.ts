import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Code block: a block with code brackets inside. From the text set. */
export const CodeBlockIcon: Icon = {
  name: "CodeBlockIcon",
  node: [["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }], ["path", { d: "M10 9.5 7.5 12l2.5 2.5M14 9.5l2.5 2.5-2.5 2.5", ...SOLID_STROKE }]],
};

export default CodeBlockIcon;
