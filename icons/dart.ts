import type { Icon } from "../types";
import { SOLID } from "../system";

/** Dart: a dart in flight, its head solid. From the files set. */
export const DartIcon: Icon = {
  name: "DartIcon",
  node: [
    ["path", { d: "M5 19 15 9M4 17l3 3M6 15l3 3" }],
    ["polygon", { points: "20.5,3.5 18.8,11 13,5.2", ...SOLID }],
  ],
};

export default DartIcon;
