import type { Icon } from "../types";
import { SOLID } from "../system";

/** Caddy: a server's C closing round a padlock, the padlock the mark. From the files set. */
export const CaddyIcon: Icon = {
  name: "CaddyIcon",
  node: [
    ["path", { d: "M16 7.05A7 7 0 1 0 16 16.95" }],
    ["path", { d: "M9.2 12.5V11a1.8 1.8 0 0 1 3.6 0v1.5" }],
    ["rect", { x: 8, y: 12.5, width: 6, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default CaddyIcon;
