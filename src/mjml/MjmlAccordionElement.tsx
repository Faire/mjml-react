/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes, Pixel, Percentage } from "../utils";

export interface IMjmlAccordionElementProps {
  /** background color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** CSS border format */
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
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlAccordionElement({
  children,
  ...props
}: IMjmlAccordionElementProps): JSX.Element {
  return React.createElement(
    "mj-accordion-element",
    convertPropsToMjmlAttributes(props),
    children
  );
}
