/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes, Pixel, Percentage } from "../utils";

export interface IMjmlGroupProps {
  /** background color for a group */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** set the display order of direct children
   * MJML default value: ltr */
  direction?: "ltr" | "rtl";
  /** middle/top/bottom */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  /** group width */
  width?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlGroup({
  children,
  ...props
}: IMjmlGroupProps): JSX.Element {
  return React.createElement(
    "mj-group",
    convertPropsToMjmlAttributes(props),
    children
  );
}
