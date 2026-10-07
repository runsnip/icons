import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** MJML: an envelope with markup's brackets, the brackets the mark. From the files set. */
export const MjmlIcon: Icon = {
  name: "MjmlIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M4.5 6.5 12 11l7.5-4.5" }],
    ["path", { d: "M9.5 13.5 7.5 15.5l2 2M14.5 13.5l2 2-2 2", ...SOLID_STROKE }],
  ],
};

export default MjmlIcon;
