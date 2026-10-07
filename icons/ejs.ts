import type { Icon } from "../types";
import { SOLID } from "../system";

/** EJS: the tag <%, the percent's points solid. From the files set. */
export const EjsIcon: Icon = {
  name: "EjsIcon",
  node: [
    ["path", { d: "M8 7 3.5 12 8 17M18.5 6 10 18" }],
    ["circle", { cx: 11.5, cy: 8, r: 1.8, ...SOLID }],
    ["circle", { cx: 17.5, cy: 16, r: 1.8, ...SOLID }],
  ],
};

export default EjsIcon;
