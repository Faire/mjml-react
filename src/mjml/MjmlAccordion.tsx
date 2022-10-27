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

export interface IMjmlAccordionProps {
  /** background-color of the cell */
  containerBackgroundColor?: string;
  /** CSS border format
   * MJML default value: 2px solid black */
  border?: React.CSSProperties["border"];
  /** font */
  fontFamily?: string;
  /** icon alignment */
  iconAlign?: "top" | "middle" | "bottom";
  /** icon height */
  iconWidth?: Pixel | Percentage;
  /** icon width */
  iconHeight?: Pixel | Percentage;
  /** icon when accordion is wrapped */
  iconWrappedUrl?: string;
  /** alt text when accordion is wrapped */
  iconWrappedAlt?: string;
  /** icon when accordion is unwrapped */
  iconUnwrappedUrl?: string;
  /** alt text when accordion is unwrapped */
  iconUnwrappedAlt?: string;
  /** display icon left or right */
  iconPosition?: "left" | "right";
  /** padding bottom */
  paddingBottom?: Pixel | Percentage;
  /** padding left */
  paddingLeft?: Pixel | Percentage;
  /** padding right */
  paddingRight?: Pixel | Percentage;
  /** padding top */
  paddingTop?: Pixel | Percentage;
  /** padding
   * MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlAccordion({
  children,
  ...props
}: IMjmlAccordionProps): JSX.Element {
  return React.createElement(
    "mj-accordion",
    convertPropsToMjmlAttributes(props),
    children
  );
}
