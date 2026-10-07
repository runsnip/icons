import type { Icon } from "../types";
import { SOLID } from "../system";

/** A comic book: a page of panels, the speech bubble the mark. From the files set. */
export const CbxIcon: Icon = {
  name: "CbxIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2.5 }],
    ["path", { d: "M12 3.5v8M3.5 11.5h17" }],
    ["path", { d: "M6 16a3.3 2.3 0 1 1 2.2 2.1L5.8 19.3Z", ...SOLID }],
  ],
};

export default CbxIcon;
