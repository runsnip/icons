import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** XML: angle brackets round a heavy slash. From the files set. */
export const XmlIcon: Icon = {
  name: "XmlIcon",
  node: [
    ["path", { d: "M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5" }],
    ["path", { d: "M13.5 5.5l-3 13", ...SOLID_STROKE }],
  ],
};

export default XmlIcon;
