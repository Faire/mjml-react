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

export interface IMjmlSocialProps {
  /** left/right/center
   * MJML default value: center */
  align?: "left" | "right" | "center";
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** inner element background color */
  containerBackgroundColor?: string;
  /** text color
   * MJML default value: #333333 */
  color?: React.CSSProperties["color"];
  /** font name */
  fontFamily?: string;
  /** font size */
  fontSize?: Pixel;
  /** font style */
  fontStyle?: string;
  /** font weight */
  fontWeight?: string;
  /** icon height, overrides icon-size */
  iconSize?: Pixel | Percentage;
  /** icon height, overrides icon-size */
  iconHeight?: Pixel | Percentage;
  /** padding around the icons */
  iconPadding?: Matrix<Pixel | Percentage>;
  /** social network surrounding padding */
  innerPadding?: Matrix<Pixel | Percentage>;
  /** space between lines */
  lineHeight?: Pixel | Percentage;
  /** vertical/horizontal
   * MJML default value: horizontal */
  mode?: "horizontal" | "vertical";
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** supports up to 4 parameters
   * MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  tableLayout?: "auto" | "fixed";
  /** padding around the texts */
  textPadding?: Matrix<Pixel | Percentage>;
  /** underline/overline/none */
  textDecoration?: React.CSSProperties["textDecoration"];
  /** top/middle/bottom */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlSocial({
  children,
  ...props
}: IMjmlSocialProps): JSX.Element {
  return React.createElement(
    "mj-social",
    convertPropsToMjmlAttributes(props),
    children
  );
}
