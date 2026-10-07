import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Brainfuck: a loop's square brackets, the + inside the mark. From the files set. */
export const BrainfuckIcon: Icon = {
  name: "BrainfuckIcon",
  node: [
    ["path", { d: "M7.5 5.5h-3v13h3M16.5 5.5h3v13h-3" }],
    ["path", { d: "M12 8.5v7M8.5 12h7", ...SOLID_STROKE }],
  ],
};

export default BrainfuckIcon;
