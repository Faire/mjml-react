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

export interface IMjmlAccordionTextProps {
  /** background color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** font size */
  fontSize?: Pixel;
  /** font */
  fontFamily?: string;
  /** text thickness */
  fontWeight?: string;
  /** letter spacing */
  letterSpacing?: Pixel | Ephemeral;
  /** space between the lines */
  lineHeight?: Pixel | Percentage;
  /** text color */
  color?: React.CSSProperties["color"];
  /** padding bottom */
  paddingBottom?: Pixel | Percentage;
  /** padding left */
  paddingLeft?: Pixel | Percentage;
  /** padding right */
  paddingRight?: Pixel | Percentage;
  /** padding top */
  paddingTop?: Pixel | Percentage;
  /** padding
   * MJML default value: 16px */
  padding?: Matrix<Pixel | Percentage>;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlAccordionText({
  children,
  ...props
}: IMjmlAccordionTextProps): JSX.Element {
  return React.createElement(
    "mj-accordion-text",
    convertPropsToMjmlAttributes(props),
    children
  );
}
