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

export interface IMjmlTextProps {
  /** left/right/center/justify
   * MJML default value: left */
  align?: "left" | "right" | "center" | "justify";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** text color
   * MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  /** inner element background color */
  containerBackgroundColor?: string;
  /** font */
  fontFamily?: string;
  /** text size */
  fontSize?: Pixel;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** The height of the element */
  height?: Pixel | Percentage;
  /** letter spacing */
  letterSpacing?: Pixel | Ephemeral;
  /** space between the lines */
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
  /** underline/overline/line-through/none */
  textDecoration?: React.CSSProperties["textDecoration"];
  /** uppercase/lowercase/capitalize */
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlText({ children, ...props }: IMjmlTextProps): JSX.Element {
  return React.createElement(
    "mj-text",
    convertPropsToMjmlAttributes(props),
    children
  );
}
