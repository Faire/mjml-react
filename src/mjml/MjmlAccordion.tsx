/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlAccordionProps {
  containerBackgroundColor?: string;
  /** MJML default value: 2px solid black */
  border?: React.CSSProperties["border"];
  fontFamily?: string;
  iconAlign?: "top" | "middle" | "bottom";
  iconWidth?: string | number;
  iconHeight?: string | number;
  iconWrappedUrl?: string;
  iconWrappedAlt?: string;
  iconUnwrappedUrl?: string;
  iconUnwrappedAlt?: string;
  iconPosition?: "left" | "right";
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlAccordion({
  children,
  ...props
}: IMjmlAccordionProps): React.JSX.Element {
  return React.createElement(
    "mj-accordion",
    convertPropsToMjmlAttributes(props),
    children
  );
}
