import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A box with a down chevron. From the pdf set. */
export const FormDropdownIcon: Icon = {
  name: "FormDropdownIcon",
  node: [
    ["rect", { x: 3.5, y: 6.5, width: 17, height: 11, rx: 2 }],
    ["path", { d: "M7 12h2" }],
    ["path", { d: "M12 10.75l2.75 2.75 2.75-2.75", ...SOLID_STROKE }],
  ],
};

export default FormDropdownIcon;
