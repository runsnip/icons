import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** textlint: lines of text, a check after them the mark. From the files set. */
export const TextlintIcon: Icon = {
  name: "TextlintIcon",
  node: [
    ["path", { d: "M4.5 6.5h15M4.5 11.5h8M4.5 16.5h5" }],
    ["path", { d: "M12.5 16l2.5 2.5 5-5.5", ...SOLID_STROKE }],
  ],
};

export default TextlintIcon;
