import type { Icon } from "../types";
import { SOLID } from "../system";

/** Ionic: a broken ring, its satellite and its core, the core the mark. From the files set. */
export const IonicIcon: Icon = {
  name: "IonicIcon",
  node: [
    ["path", { d: "M19.73 9.93A8 8 0 1 1 16 5.07" }],
    ["circle", { cx: 18.2, cy: 7.3, r: 1.5 }],
    ["circle", { cx: 12, cy: 12, r: 3.5, ...SOLID }],
  ],
};

export default IonicIcon;
