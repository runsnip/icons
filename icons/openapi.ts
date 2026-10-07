import type { Icon } from "../types";
import { SOLID } from "../system";

/** An OpenAPI description: a pair of braces, the API they describe a solid point between them. From the files set. */
export const OpenapiIcon: Icon = {
  name: "OpenapiIcon",
  node: [
    ["path", { d: "M9 4.5H8A2 2 0 0 0 6 6.5V10A2 2 0 0 1 4 12 2 2 0 0 1 6 14v3.5a2 2 0 0 0 2 2h1M15 4.5h1a2 2 0 0 1 2 2V10a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3.5a2 2 0 0 1-2 2h-1" }],
    ["circle", { cx: 12, cy: 12, r: 2.2, ...SOLID }],
  ],
};

export default OpenapiIcon;
