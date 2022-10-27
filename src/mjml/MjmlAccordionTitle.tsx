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

export interface IMjmlAccordionTitleProps {
  /** background color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** text color */
  color?: React.CSSProperties["color"];
  /** font size */
  fontSize?: Pixel;
  /** font */
  fontFamily?: string;
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

export function MjmlAccordionTitle({
  children,
  ...props
}: IMjmlAccordionTitleProps): JSX.Element {
  return React.createElement(
    "mj-accordion-title",
    convertPropsToMjmlAttributes(props),
    children
  );
}
