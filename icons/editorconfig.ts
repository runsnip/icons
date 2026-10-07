import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** EditorConfig: lines of text beside the editor's caret, the caret the mark. From the files set. */
export const EditorconfigIcon: Icon = {
  name: "EditorconfigIcon",
  node: [
    ["path", { d: "M3.5 7h9M3.5 12h7M3.5 17h9" }],
    ["path", { d: "M17.5 5v14M15.5 5h4M15.5 19h4", ...SOLID_STROKE }],
  ],
};

export default EditorconfigIcon;
