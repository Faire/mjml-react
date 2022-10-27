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
  Ephemeral,
} from "../utils";

export interface IMjmlNavbarLinkProps {
  /** text color
   * MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  /** font */
  fontFamily?: string;
  /** text size */
  fontSize?: Pixel;
  /** normal/italic/oblique */
  fontStyle?: string;
  /** text thickness */
  fontWeight?: string;
  /** link to redirect to on click */
  href?: string;
  name?: string;
  /** link target on click
   * MJML default value: _blank */
  target?: string;
  /** specify the rel attribute */
  rel?: string;
  /** letter-spacing */
  letterSpacing?: Pixel | Ephemeral;
  /** space between the lines */
  lineHeight?: Pixel | Percentage;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** supports up to 4 parameters
   * MJML default value: 15px 10px */
  padding?: Matrix<Pixel | Percentage>;
  /** underline/overline/none */
  textDecoration?: React.CSSProperties["textDecoration"];
  /** capitalize/uppercase/lowercase/none */
  textTransform?: React.CSSProperties["textTransform"];
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlNavbarLink({
  children,
  ...props
}: IMjmlNavbarLinkProps): JSX.Element {
  return React.createElement(
    "mj-navbar-link",
    convertPropsToMjmlAttributes(props),
    children
  );
}
