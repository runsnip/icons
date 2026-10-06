import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Word count: a page with a tally of marks. From the insert set. */
export const WordCountIcon: Icon = {
  name: "WordCountIcon",
  node: [
    ["path", { d: "M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M8 8.5h4" }],
    ["path", { d: "M8.5 12.5v4.5M12 12.5v4.5M15.5 12.5v4.5", ...SOLID_STROKE }],
  ],
};

export default WordCountIcon;
