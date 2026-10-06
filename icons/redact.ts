import type { Icon } from "../types";
import { SOLID } from "../system";

/** Text blacked out by a solid bar. From the pdf set. */
export const RedactIcon: Icon = {
  name: "RedactIcon",
  node: [
    ["path", { d: "M4.5 5.5h15M4.5 12h2M4.5 18.5h9" }],
    ["rect", { x: 9.5, y: 9.5, width: 10, height: 5, rx: 1, ...SOLID }],
  ],
};

export default RedactIcon;
