import type { Icon } from "../types";
import { SOLID } from "../system";

/** Highlight: a marker pen's tip over a highlighted bar. From the text set. */
export const HighlighterIcon: Icon = {
  name: "HighlighterIcon",
  node: [["path", { d: "M10.5 11.5 16.5 4l3.5 3-6 7.5ZM10.5 11.5 9 15h3.5l1.5-1" }], ["rect", { x: 3.5, y: 17.5, width: 11, height: 3, rx: 1, ...SOLID }]],
};

export default HighlighterIcon;
