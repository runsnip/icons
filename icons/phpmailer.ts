import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PHPMailer: an envelope, its flap the mark. From the files set. */
export const PhpmailerIcon: Icon = {
  name: "PhpmailerIcon",
  node: [
    ["rect", { x: 3.5, y: 5.5, width: 17, height: 13, rx: 2 }],
    ["path", { d: "M5 7.5 12 12.5l7-5", ...SOLID_STROKE }],
  ],
};

export default PhpmailerIcon;
