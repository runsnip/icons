import type { Icon } from "../types";
import { SOLID } from "../system";

/** Quarto: a circle in quarters, one quarter the mark. From the files set. */
export const QuartoIcon: Icon = {
  name: "QuartoIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 3.5v17M3.5 12h17" }],
    ["path", { d: "M12 12H5.5A6.5 6.5 0 0 1 12 5.5Z", ...SOLID }],
  ],
};

export default QuartoIcon;
