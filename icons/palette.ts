import type { Icon } from "../types";
import { SOLID } from "../system";

/** Colours and themes: a painter's palette. From the collab set. */
export const PaletteIcon: Icon = {
  name: "PaletteIcon",
  node: [
    ["path", { d: "M12 3.5a8.5 8.5 0 0 0 0 17c1.4 0 2-1 2-2s-.6-1.4-.6-2.2c0-1 .8-1.8 1.8-1.8H17a3.5 3.5 0 0 0 3.5-3.5C20.5 7 16.7 3.5 12 3.5Z" }],
    ["circle", { cx: 7.8, cy: 11.5, r: 1.5, ...SOLID }],
    ["circle", { cx: 10, cy: 7.6, r: 1.5, ...SOLID }],
    ["circle", { cx: 14.6, cy: 7.6, r: 1.5, ...SOLID }],
  ],
};

export default PaletteIcon;
