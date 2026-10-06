import type { Icon } from "../types";
import { SOLID } from "../system";

/** A radio circle filled. From the pdf set. */
export const FormRadioIcon: Icon = {
  name: "FormRadioIcon",
  node: [
    ["circle", { cx: 8.5, cy: 12, r: 5 }],
    ["circle", { cx: 8.5, cy: 12, r: 2.2, ...SOLID }],
    ["path", { d: "M16.5 12h4" }],
  ],
};

export default FormRadioIcon;
