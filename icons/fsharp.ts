import type { Icon } from "../types";
import { SOLID } from "../system";

/** F#: two chevrons round a diamond, the diamond the mark. From the files set. */
export const FsharpIcon: Icon = {
  name: "FsharpIcon",
  node: [
    ["path", { d: "M11 4.5 3.5 12l7.5 7.5M16.5 8l4 4-4 4" }],
    ["path", { d: "M11.5 8.5 15 12l-3.5 3.5L8 12Z", ...SOLID }],
  ],
};

export default FsharpIcon;
