import type { Icon } from "../types";
import { SOLID } from "../system";

/** Decrease indent: lines with an arrow pointing left out of them. From the text set. */
export const IndentDecreaseIcon: Icon = {
  name: "IndentDecreaseIcon",
  node: [["path", { d: "M3.5 5h17M11.5 10h9M11.5 14h9M3.5 19h17" }], ["path", { d: "M8.5 8.5v7L4 12Z", ...SOLID }]],
};

export default IndentDecreaseIcon;
