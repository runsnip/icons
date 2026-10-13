import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Styles: a letter beside lines of text, its bar the mark — the look given to text by name. From the text set. */
export const StylesIcon: Icon = {
  name: "StylesIcon",
  node: [
    ["path", { d: "M14 7.5h6.5M14 12h6.5M14 16.5h6.5M3.5 18.5 7.75 5.5 12 18.5" }],
    ["path", { d: "M5.25 13.5h5", ...SOLID_STROKE }],
  ],
};

export default StylesIcon;
