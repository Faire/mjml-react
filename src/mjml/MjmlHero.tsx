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

export interface IMjmlHeroProps {
  /** choose if the height is fixed based on the height attribute or fluid
   * MJML default value: fixed-height */
  mode?: string;
  /** hero section height (required for fixed-height mode)
   * MJML default value: 0px */
  height?: Pixel | Percentage;
  /** absolute background url */
  backgroundUrl?: string;
  /** width of the image used, mandatory */
  backgroundWidth?: Pixel | Percentage;
  /** height of the image used, mandatory */
  backgroundHeight?: Pixel | Percentage;
  /** background image position */
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: Matrix<Pixel | Percentage>;
  innerPaddingTop?: Pixel | Percentage;
  innerPaddingLeft?: Pixel | Percentage;
  innerPaddingRight?: Pixel | Percentage;
  innerPaddingBottom?: Pixel | Percentage;
  /** supports up to 4 parameters
   * MJML default value: 0px */
  padding?: Matrix<Pixel | Percentage>;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** hero background color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** content vertical alignment */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlHero({ children, ...props }: IMjmlHeroProps): JSX.Element {
  return React.createElement(
    "mj-hero",
    convertPropsToMjmlAttributes(props),
    children
  );
}
