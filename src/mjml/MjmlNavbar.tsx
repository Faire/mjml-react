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

export interface IMjmlNavbarProps {
  /** align content left/center/right
   * MJML default value: center */
  align?: "left" | "center" | "right";
  baseUrl?: string;
  /** activate the hamburger navigation on mobile if the value is hamburger
   * MJML default value: null */
  hamburger?: string;
  /** hamburger icon alignment, left/center/right (hamburger mode required) */
  icoAlign?: "left" | "center" | "right";
  /** char code for a custom open icon (hamburger mode required) */
  icoOpen?: string;
  /** char code for a custom close icon (hamburger mode required) */
  icoClose?: string;
  /** hamburger icon color (hamburger mode required) */
  icoColor?: string;
  /** hamburger icon size (hamburger mode required) */
  icoFontSize?: Pixel | Percentage;
  /** hamburger icon font (only on hamburger mode) */
  icoFontFamily?: string;
  /** hamburger icon text transformation none/capitalize/uppercase/lowercase (hamburger mode required) */
  icoTextTransform?: string;
  /** hamburger icon padding, supports up to 4 parameters (hamburger mode required) */
  icoPadding?: Matrix<Pixel | Percentage>;
  /** hamburger icon left offset (hamburger mode required) */
  icoPaddingLeft?: Pixel | Percentage;
  /** hamburger icon top offset (hamburger mode required) */
  icoPaddingTop?: Pixel | Percentage;
  /** hamburger icon right offset (hamburger mode required) */
  icoPaddingRight?: Pixel | Percentage;
  /** hamburger icon bottom offset (hamburger mode required) */
  icoPaddingBottom?: Pixel | Percentage;
  /** supports up to 4 parameters */
  padding?: Matrix<Pixel | Percentage>;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** hamburger icon text decoration none/underline/overline/line-through (hamburger mode required) */
  icoTextDecoration?: string;
  /** hamburger icon line height (hamburger mode required) */
  icoLineHeight?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlNavbar({
  children,
  ...props
}: IMjmlNavbarProps): JSX.Element {
  return React.createElement(
    "mj-navbar",
    convertPropsToMjmlAttributes(props),
    children
  );
}
