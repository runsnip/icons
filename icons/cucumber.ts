import type { Icon } from "../types";
import { SOLID } from "../system";

/** Cucumber: the gherkin's body, its bumps solid. From the files set. */
export const CucumberIcon: Icon = {
  name: "CucumberIcon",
  node: [
    ["ellipse", { cx: 12, cy: 12, rx: 6.5, ry: 8.5 }],
    ["circle", { cx: 10, cy: 8.5, r: 1.4, ...SOLID }],
    ["circle", { cx: 14, cy: 12, r: 1.4, ...SOLID }],
    ["circle", { cx: 10, cy: 15.5, r: 1.4, ...SOLID }],
  ],
};

export default CucumberIcon;
