import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Hyphenation: lines of text, one ending with a hyphen. From the text set. */
export const HyphenationIcon: Icon = {
  name: "HyphenationIcon",
  node: [
    ["path", { d: "M3.5 5h17M3.5 10h12M3.5 15h17M3.5 20h9" }],
    ["path", { d: "M17.5 10h3", ...SOLID_STROKE }],
  ],
};

export default HyphenationIcon;
