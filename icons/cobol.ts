import type { Icon } from "../types";
import { SOLID } from "../system";

/** COBOL: a punched card, its holes the mark. From the files set. */
export const CobolIcon: Icon = {
  name: "CobolIcon",
  node: [
    ["path", { d: "M7.5 3.5h13v17h-17v-13Z" }],
    ["rect", { x: 7, y: 9.5, width: 2, height: 3.5, ...SOLID }],
    ["rect", { x: 15, y: 9.5, width: 2, height: 3.5, ...SOLID }],
    ["rect", { x: 11, y: 14.5, width: 2, height: 3.5, ...SOLID }],
  ],
};

export default CobolIcon;
