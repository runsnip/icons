import type { Icon } from "../types";
import { SOLID } from "../system";

/** Flutter: its two stripes, the lower fold the mark. From the files set. */
export const FlutterIcon: Icon = {
  name: "FlutterIcon",
  node: [
    ["path", { d: "M14 3.5h5.5L8.75 14.25 6 11.5ZM14 11h5.5l-5.25 5.25-2.75-2.75Z" }],
    ["path", { d: "M11.5 18.75 14.25 16l4.5 4.5h-5.5Z", ...SOLID }],
  ],
};

export default FlutterIcon;
