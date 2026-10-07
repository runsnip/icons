import type { Icon } from "../types";
import { SOLID } from "../system";

/** A mock: a mask, its eyes the mark. From the files set. */
export const MockIcon: Icon = {
  name: "MockIcon",
  node: [
    ["path", { d: "M3.5 9c0-2 3-2.5 8.5-2.5s8.5.5 8.5 2.5c0 4-2 8-5 8-2 0-2.5-2-3.5-2s-1.5 2-3.5 2c-3 0-5-4-5-8Z" }],
    ["ellipse", { cx: 8.5, cy: 10.5, rx: 1.8, ry: 1.2, ...SOLID }],
    ["ellipse", { cx: 15.5, cy: 10.5, rx: 1.8, ry: 1.2, ...SOLID }],
  ],
};

export default MockIcon;
