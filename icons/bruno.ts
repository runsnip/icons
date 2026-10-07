import type { Icon } from "../types";
import { SOLID } from "../system";

/** Bruno: a dog's head, the drooping ears the mark. From the files set. */
export const BrunoIcon: Icon = {
  name: "BrunoIcon",
  node: [
    ["path", { d: "M7.5 10a4.5 4.5 0 0 1 9 0v5a4.5 4.5 0 0 1-9 0Z" }],
    ["path", { d: "M12 15.2v1.6" }],
    ["path", { d: "M10.6 13.4h2.8L12 15.2Z", ...SOLID }],
    ["path", { d: "M8 6.2 4 8.2l.8 5.8L7.5 12Z", ...SOLID }],
    ["path", { d: "M16 6.2l4 2-.8 5.8-2.7-2Z", ...SOLID }],
  ],
};

export default BrunoIcon;
