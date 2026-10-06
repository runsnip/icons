import type { Icon } from "../types";
import { SOLID } from "../system";

/** Increase indent: lines with an arrow pointing right into them. From the text set. */
export const IndentIncreaseIcon: Icon = {
  name: "IndentIncreaseIcon",
  node: [["path", { d: "M3.5 5h17M11.5 10h9M11.5 14h9M3.5 19h17" }], ["path", { d: "M4 8.5v7L8.5 12Z", ...SOLID }]],
};

export default IndentIncreaseIcon;
