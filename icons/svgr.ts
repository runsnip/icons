import type { Icon } from "../types";
import { SOLID } from "../system";

/** SVGR: orbits round a square nucleus — an SVG made a component — the square the mark. From the files set. */
export const SvgrIcon: Icon = {
  name: "SvgrIcon",
  node: [
    ["path", { d: "M20.5 12A8.5 3.3 0 1 0 3.5 12A8.5 3.3 0 1 0 20.5 12Z" }],
    ["path", { d: "M16.25 19.36A8.5 3.3 60 1 0 7.75 4.64A8.5 3.3 60 1 0 16.25 19.36Z" }],
    ["path", { d: "M7.75 19.36A8.5 3.3 120 1 0 16.25 4.64A8.5 3.3 120 1 0 7.75 19.36Z" }],
    ["rect", { x: 10.5, y: 10.5, width: 3, height: 3, rx: 0.5, ...SOLID }],
  ],
};

export default SvgrIcon;
