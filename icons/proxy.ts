import type { Icon } from "../types";
import { SOLID } from "../system";

/** A proxy: a server standing between, traffic passing through it both ways — the server solid. From the ops set. */
export const ProxyIcon: Icon = {
  name: "ProxyIcon",
  node: [
    ["path", { d: "M3.5 8h4.5M16 8h4.5M18 5.5 20.5 8 18 10.5M20.5 16H16M8 16H3.5M6 13.5 3.5 16 6 18.5" }],
    ["rect", { x: 10.25, y: 3.5, width: 3.5, height: 17, rx: 1.5, ...SOLID }],
  ],
};

export default ProxyIcon;
