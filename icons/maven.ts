import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Maven: a feather, its quill the mark. From the files set. */
export const MavenIcon: Icon = {
  name: "MavenIcon",
  node: [
    ["path", { d: "M19.5 4.5C12 5 7.5 9.5 8 16c6.5.5 11-4 11.5-11.5Z" }],
    ["path", { d: "M4.5 19.5l9-9", ...SOLID_STROKE }],
  ],
};

export default MavenIcon;
