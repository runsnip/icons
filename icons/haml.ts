import type { Icon } from "../types";
import { SOLID } from "../system";

/** Haml: the % that opens a tag, its two dots the mark. From the files set. */
export const HamlIcon: Icon = {
  name: "HamlIcon",
  node: [
    ["path", { d: "M18 5 6 19" }],
    ["path", { d: "M5 7.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 1 0-4.5 0ZM14.5 16.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 1 0-4.5 0Z", ...SOLID }],
  ],
};

export default HamlIcon;
