import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Poetry, the Python packager: a quill, its shaft the mark. From the files set. */
export const PoetryIcon: Icon = {
  name: "PoetryIcon",
  node: [
    ["path", { d: "M20 4C12.5 4.5 8 9.5 7.5 16.5c5-.5 11-4.5 12.5-12.5Z" }],
    ["path", { d: "M4 20 12.5 11.5", ...SOLID_STROKE }],
  ],
};

export default PoetryIcon;
