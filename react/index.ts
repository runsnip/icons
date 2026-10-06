/**
 * @runsnip/icons/react — a component per icon, with the props of an `<svg>` and the set's own (`size`, `color`,
 * `viewBox`). Hookless, so they render in Server Components. `DynamicIcon` (./react/dynamic) loads one by name.
 */
export * from "./icons";
export { createIcon, Icon, type IconComponent, type IconProps } from "./create";
