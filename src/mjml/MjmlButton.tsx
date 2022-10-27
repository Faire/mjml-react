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
  Ephemeral,
} from "../utils";

export interface IMjmlButtonProps {
  /** horizontal alignment
   * MJML default value: center */
  align?: "left" | "center" | "right";
  /** button background-color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  /** css border format
   * MJML default value: none */
  border?: React.CSSProperties["border"];
  /** button background-color
   * MJML default value: #ffffff */
  color?: React.CSSProperties["color"];
  /** button container background color */
  containerBackgroundColor?: string;
  /** font name */
  fontFamily?: string;
  /** text size */
  fontSize?: Pixel;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** button height */
  height?: Pixel | Percentage;
  /** link to be triggered when the button is clicked */
  href?: string;
  name?: string;
  /** tooltip &amp; accessibility */
  title?: string;
  /** inner button padding */
  innerPadding?: Matrix<Pixel | Percentage>;
  /** letter-spacing */
  letterSpacing?: Pixel | Ephemeral;
  /** line-height on link */
  lineHeight?: Pixel | Percentage;
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
  /** specify the rel attribute for the button link */
  rel?: string;
  /** specify the target attribute for the button link
   * MJML default value: _blank */
  target?: string;
  /** underline/overline/none */
  textDecoration?: React.CSSProperties["textDecoration"];
  /** capitalize/uppercase/lowercase */
  textTransform?: React.CSSProperties["textTransform"];
  /** vertical alignment */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  /** text-align button content */
  textAlign?: React.CSSProperties["textAlign"];
  /** button width */
  width?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlButton({
  children,
  ...props
}: IMjmlButtonProps): JSX.Element {
  return React.createElement(
    "mj-button",
    convertPropsToMjmlAttributes(props),
    children
  );
}
