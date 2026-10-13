import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A signature field: a box with a signature in it. From the pdf set. */
export const SignatureFieldIcon: Icon = {
  name: "SignatureFieldIcon",
  node: [
    ["rect", { x: 3.5, y: 6.5, width: 17, height: 11, rx: 2 }],
    ["path", { d: "M6.5 13.5c1.5-2 2.5-3.5 3.5-3.5s.5 3.5 1.5 3.5 2-2 3-2 1 1.5 2.5 1.5", ...SOLID_STROKE }],
  ],
};

export default SignatureFieldIcon;
