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

export interface IMjmlSocialElementProps {
  /** left/right/center
   * MJML default value: left */
  align?: "left" | "center" | "right";
  /** icon color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** text color
   * MJML default value: #000 */
  color?: React.CSSProperties["color"];
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** font name */
  fontFamily?: string;
  /** font size */
  fontSize?: Pixel;
  /** font style */
  fontStyle?: string;
  /** font weight */
  fontWeight?: string;
  /** button redirection url */
  href?: string;
  /** icon height, overrides icon-size */
  iconSize?: Pixel | Percentage;
  /** icon height, overrides icon-size */
  iconHeight?: Pixel | Percentage;
  /** padding around the icons */
  iconPadding?: Matrix<Pixel | Percentage>;
  /** space between lines */
  lineHeight?: Pixel | Percentage;
  /** social network name, see supported list below */
  name?: string;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** supports up to 4 parameters
   * MJML default value: 4px */
  padding?: Matrix<Pixel | Percentage>;
  /** padding around the texts */
  textPadding?: Matrix<Pixel | Percentage>;
  /** specify the rel attribute for the link */
  rel?: string;
  /** image source */
  src?: string;
  /** set a different image source based on the viewport */
  srcset?: string;
  /** set icon width based on query */
  sizes?: string;
  /** image alt attribute */
  alt?: string;
  /** img title attribute */
  title?: string;
  /** link target
   * MJML default value: _blank */
  target?: string;
  /** underline/overline/none */
  textDecoration?: React.CSSProperties["textDecoration"];
  /** top/middle/bottom */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlSocialElement({
  children,
  ...props
}: IMjmlSocialElementProps): JSX.Element {
  return React.createElement(
    "mj-social-element",
    convertPropsToMjmlAttributes(props),
    children
  );
}
