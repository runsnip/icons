import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** JSR: its stepped box, the J inside the mark. From the files set. */
export const JsrIcon: Icon = {
  name: "JsrIcon",
  node: [
    ["path", { d: "M3.5 8H7V4.5h13.5V16H17v3.5H3.5Z" }],
    ["path", { d: "M13.5 8v5.5a2.5 2.5 0 0 1-4.5 1.5", ...SOLID_STROKE }],
  ],
};

export default JsrIcon;
