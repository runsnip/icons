import type { Icon } from "../types";
import { SOLID } from "../system";

/** A resource or run-commands file: settings on sliders, their knobs the mark. From the files set. */
export const RcIcon: Icon = {
  name: "RcIcon",
  node: [
    ["path", { d: "M3.5 7h17M3.5 12h17M3.5 17h17" }],
    ["circle", { cx: 8, cy: 7, r: 2.2, ...SOLID }],
    ["circle", { cx: 15.5, cy: 12, r: 2.2, ...SOLID }],
    ["circle", { cx: 10, cy: 17, r: 2.2, ...SOLID }],
  ],
};

export default RcIcon;
