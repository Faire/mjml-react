/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlNavbarLinkProps {
  /** MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  name?: string;
  /** MJML default value: _blank */
  target?: string;
  rel?: string;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 15px 10px */
  padding?: string | number;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  className?: string;
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
