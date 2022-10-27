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

export interface IMjmlImageProps {
  /** image description */
  alt?: string;
  /** link to redirect to on click */
  href?: string;
  /** specify the link name attribute */
  name?: string;
  /** image source */
  src?: string;
  /** enables to set a different image source based on the viewport */
  srcset?: string;
  /** set width based on query */
  sizes?: string;
  /** tooltip &amp; accessibility */
  title?: string;
  /** specify the rel attribute */
  rel?: string;
  /** image alignment
   * MJML default value: center */
  align?: "left" | "center" | "right";
  /** css border definition
   * MJML default value: 0 */
  border?: React.CSSProperties["border"];
  /** css border definition */
  borderBottom?: string;
  /** css border definition */
  borderLeft?: string;
  /** css border definition */
  borderRight?: string;
  /** css border definition */
  borderTop?: string;
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** inner element background color */
  containerBackgroundColor?: string;
  /** if &quot;true&quot;, will be full width on mobile even if width is set */
  fluidOnMobile?: boolean;
  /** supports up to 4 parameters
   * MJML default value: 10px 25px */
  padding?: Matrix<Pixel | Percentage>;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** link target on click
   * MJML default value: _blank */
  target?: string;
  /** image width */
  width?: Pixel;
  /** image height
   * MJML default value: auto */
  height?: Pixel;
  maxHeight?: Pixel | Percentage;
  fontSize?: Pixel;
  /** reference to image map, be careful, it isn&#39;t supported everywhere */
  usemap?: string;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlImage(props: IMjmlImageProps): JSX.Element {
  return React.createElement("mj-image", convertPropsToMjmlAttributes(props));
}
