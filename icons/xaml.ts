import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** XAML: a heavy X between angle brackets. From the files set. */
export const XamlIcon: Icon = {
  name: "XamlIcon",
  node: [
    ["path", { d: "M8 6.5 3.5 12 8 17.5M16 6.5l4.5 5.5-4.5 5.5" }],
    ["path", { d: "M10 9l4 6M14 9l-4 6", ...SOLID_STROKE }],
  ],
};

export default XamlIcon;
