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

export interface IMjmlCarouselImageProps {
  /** image description */
  alt?: string;
  /** link to redirect to on click */
  href?: string;
  /** specify the rel attribute */
  rel?: string;
  /** link target on click
   * MJML default value: _blank */
  target?: string;
  /** tooltip &amp; accessibility */
  title?: string;
  /** image source */
  src?: string;
  /** image source to have a thumbnail different than the image it&#39;s linked to */
  thumbnailsSrc?: string;
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** border of the thumbnails */
  tbBorder?: string;
  /** border-radius of the thumbnails */
  tbBorderRadius?: Matrix<Pixel | Percentage>;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlCarouselImage({
  children,
  ...props
}: IMjmlCarouselImageProps): JSX.Element {
  return React.createElement(
    "mj-carousel-image",
    convertPropsToMjmlAttributes(props),
    children
  );
}
