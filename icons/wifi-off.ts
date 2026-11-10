import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** No wireless network: the outer waves broken by the stroke through them. From the ui set. */
export const WifiOffIcon: Icon = {
  name: "WifiOffIcon",
  node: [
    ["path", { d: "M3.5 9.84A12.5 12.5 0 0 1 4.97 8.66M10.3 6.62A12.5 12.5 0 0 1 20.5 9.84M6.22 12.77A8.5 8.5 0 0 1 7.88 11.56M14.57 10.9A8.5 8.5 0 0 1 17.78 12.77" }],
    ["path", { d: "M12 19h0" }],
    ["path", { d: "M4.5 4.5 19.5 19.5", ...SOLID_STROKE }],
  ],
};

export default WifiOffIcon;
