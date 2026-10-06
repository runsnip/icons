import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A signature: a scrawl written on the line it is signed on. From the insert set. */
export const SignatureIcon: Icon = {
  name: "SignatureIcon",
  node: [
    ["path", { d: "M4 15.5c1.5-3 2.5-9.5 4-9.5s-.5 9 1 9 1.5-3 2.5-3 1 2.5 2 2.5 1.5-2 2.5-2 1.5 1.5 3.5 1.5" }],
    ["path", { d: "M3.5 19.5h17", ...SOLID_STROKE }],
  ],
};

export default SignatureIcon;
