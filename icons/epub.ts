import type { Icon } from "../types";
import { SOLID } from "../system";

/** An e-book: a closed book, its ribbon solid. From the files set. */
export const EpubIcon: Icon = {
  name: "EpubIcon",
  node: [
    ["rect", { x: 5, y: 3.5, width: 14, height: 17, rx: 2 }],
    ["path", { d: "M8.5 3.5v17" }],
    ["polygon", { points: "12.5,3.5 16.5,3.5 16.5,10.5 14.5,9 12.5,10.5", ...SOLID }],
  ],
};

export default EpubIcon;
