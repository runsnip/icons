import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A text input box with a caret. From the pdf set. */
export const FormTextFieldIcon: Icon = {
  name: "FormTextFieldIcon",
  node: [
    ["rect", { x: 3.5, y: 6.5, width: 17, height: 11, rx: 2 }],
    ["path", { d: "M8 9.5v5", ...SOLID_STROKE }],
  ],
};

export default FormTextFieldIcon;
