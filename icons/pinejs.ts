import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Pine.js: a pine tree, its trunk the mark. From the files set. */
export const PinejsIcon: Icon = {
  name: "PinejsIcon",
  node: [
    ["path", { d: "M12 3.5 17 9h-2.5L19 16.5H5L9.5 9H7Z" }],
    ["path", { d: "M12 17v3.5", ...SOLID_STROKE }],
  ],
};

export default PinejsIcon;
