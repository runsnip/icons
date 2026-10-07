import type { Icon } from "../types";
import { SOLID } from "../system";

/** Figma: its five shapes in two columns, the round one the mark. From the files set. */
export const FigmaIcon: Icon = {
  name: "FigmaIcon",
  node: [
    ["path", { d: "M12 3.75H9.25a2.75 2.75 0 0 0 0 5.5H12ZM12 3.75h2.75a2.75 2.75 0 0 1 0 5.5H12ZM12 9.25H9.25a2.75 2.75 0 0 0 0 5.5H12ZM12 14.75H9.25A2.75 2.75 0 1 0 12 17.5Z" }],
    ["circle", { cx: 14.75, cy: 12, r: 2.75, ...SOLID }],
  ],
};

export default FigmaIcon;
