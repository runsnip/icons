import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A combo box: a field to type in, with a down chevron for its list. From the pdf set. */
export const FormComboBoxIcon: Icon = {
  name: "FormComboBoxIcon",
  node: [
    ["rect", { x: 3.5, y: 6.5, width: 17, height: 11, rx: 2 }],
    ["path", { d: "M7.5 9.5v5" }],
    ["path", { d: "M13.5 10.75l2.5 2.5 2.5-2.5", ...SOLID_STROKE }],
  ],
};

export default FormComboBoxIcon;
