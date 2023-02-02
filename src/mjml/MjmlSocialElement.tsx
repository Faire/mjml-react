/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSocialElementProps {
  /** MJML default value: left */
  align?: "left" | "center" | "right";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** MJML default value: #000 */
  color?: React.CSSProperties["color"];
  borderRadius?: React.CSSProperties["borderRadius"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  href?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?: string | number;
  lineHeight?: string | number;
  name?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 4px */
  padding?: string | number;
  textPadding?: string | number;
  rel?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  alt?: string;
  title?: string;
  /** MJML default value: _blank */
  target?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
  verticalAlign?: "top" | "middle" | "bottom";
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlSocialElement({
  children,
  ...props
}: IMjmlSocialElementProps): JSX.Element {
  return React.createElement(
    "mj-social-element",
    convertPropsToMjmlAttributes(props),
    children
  );
}
