/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import {
  convertPropsToMjmlAttributes,
  Matrix,
  Pixel,
  Percentage,
} from "../utils";

export interface IMjmlDividerProps {
  /** divider color */
  borderColor?: React.CSSProperties["borderColor"];
  /** dashed/dotted/solid */
  borderStyle?: React.CSSProperties["borderStyle"];
  /** divider&#39;s border width */
  borderWidth?: Pixel;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** supports up to 4 parameters
   * MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** divider width
   * MJML default value: 100% */
  width?: Pixel | Percentage;
  /** alignment
   * MJML default value: center */
  align?: "left" | "center" | "right";
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlDivider(props: IMjmlDividerProps): JSX.Element {
  return React.createElement("mj-divider", convertPropsToMjmlAttributes(props));
}
