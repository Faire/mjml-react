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

export interface IMjmlCarouselProps {
  /** horizontal alignment
   * MJML default value: center */
  align?: "left" | "center" | "right";
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** column background color */
  containerBackgroundColor?: string;
  /** width of the icons on left and right of the main image */
  iconWidth?: Pixel | Percentage;
  /** icon on the left of the main image */
  leftIcon?: string;
  padding?: Matrix<Pixel | Percentage>;
  paddingTop?: Pixel | Percentage;
  paddingBottom?: Pixel | Percentage;
  paddingLeft?: Pixel | Percentage;
  paddingRight?: Pixel | Percentage;
  /** icon on the right of the main image */
  rightIcon?: string;
  /** display or not the thumbnails (visible
   * MJML default value: visible */
  thumbnails?: "visible" | "hidden";
  /** border of the thumbnails */
  tbBorder?: string;
  /** border-radius of the thumbnails */
  tbBorderRadius?: Pixel | Percentage;
  /** css border color of the hovered thumbnail */
  tbHoverBorderColor?: string;
  /** css border color of the selected thumbnail */
  tbSelectedBorderColor?: string;
  /** thumbnail width */
  tbWidth?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlCarousel({
  children,
  ...props
}: IMjmlCarouselProps): JSX.Element {
  return React.createElement(
    "mj-carousel",
    convertPropsToMjmlAttributes(props),
    children
  );
}
