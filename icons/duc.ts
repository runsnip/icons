import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A CAD drawing: a set square, its inner cut the mark. From the files set. */
export const DucIcon: Icon = {
  name: "DucIcon",
  node: [
    ["path", { d: "M4.5 4.5v15h15Z" }],
    ["path", { d: "M8 11.5v4.5h4.5Z", ...SOLID_STROKE }],
  ],
};

export default DucIcon;
