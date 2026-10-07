import type { Icon } from "../types";
import { SOLID } from "../system";

/** Environment settings: three sliders, their knobs the mark. From the files set. */
export const TuneIcon: Icon = {
  name: "TuneIcon",
  node: [
    ["path", { d: "M4.5 7h15M4.5 12h15M4.5 17h15" }],
    ["circle", { cx: 9, cy: 7, r: 2.2, ...SOLID }],
    ["circle", { cx: 15, cy: 12, r: 2.2, ...SOLID }],
    ["circle", { cx: 8, cy: 17, r: 2.2, ...SOLID }],
  ],
};

export default TuneIcon;
