import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A signature: a scrawl on the line, by its X. From the insert set. */
export const SignatureIcon: Icon = {
  name: "SignatureIcon",
  node: [
    ["path", { d: "M3.5 20h17M9 16c1.5-3 2.5-10 4-10s-.5 9.5 1 9.5 1.5-3 2.5-3 1 2.5 2 2.5 1-1 1.5-1.5" }],
    ["path", { d: "M3.5 13l3 3M6.5 13l-3 3", ...SOLID_STROKE }],
  ],
};

export default SignatureIcon;
