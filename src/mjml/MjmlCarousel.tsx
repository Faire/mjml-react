/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlCarouselProps {
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  iconWidth?: string | number;
  leftIcon?: string;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  rightIcon?: string;
  /** MJML default value: visible */
  thumbnails?: "visible" | "hidden";
  tbBorder?: string;
  tbBorderRadius?: string | number;
  tbHoverBorderColor?: string;
  tbSelectedBorderColor?: string;
  tbWidth?: string | number;
  className?: string;
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
