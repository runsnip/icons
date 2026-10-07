import type { Icon } from "../types";
import { SOLID } from "../system";

/** Storybook: a book with an S, its bookmark the mark. From the files set. */
export const StorybookIcon: Icon = {
  name: "StorybookIcon",
  node: [
    ["rect", { x: 5, y: 3.5, width: 14, height: 17, rx: 2 }],
    ["path", { d: "M14 11c-.5-1-1.4-1.5-2.4-1.5-1.4 0-2.4.8-2.4 1.8 0 2.4 5 1.4 5 3.9 0 1.1-1 1.8-2.6 1.8-1 0-2-.5-2.6-1.5" }],
    ["path", { d: "M13.5 3.5h3v5l-1.5-1.2-1.5 1.2Z", ...SOLID }],
  ],
};

export default StorybookIcon;
