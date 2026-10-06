import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Translate: one script beside another, 文 and A. From the collab set. */
export const TranslateIcon: Icon = {
  name: "TranslateIcon",
  node: [
    ["path", { d: "M4 5.5h7.5M7.8 3.5v2M10 5.5c-.6 3-2.5 5.3-5.5 6.5M6 7.5c1 2.2 2.6 3.6 5 4.5" }],
    ["path", { d: "M12.5 20.5 16 11.5l3.5 9M13.7 17.5h4.6", ...SOLID_STROKE }],
  ],
};

export default TranslateIcon;
