/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlSocialProps {
  /** MJML default value: center */
  align?: "left" | "right" | "center";
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  /** MJML default value: #333333 */
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?: string | number;
  innerPadding?: string | number;
  lineHeight?: string | number;
  /** MJML default value: horizontal */
  mode?: "horizontal" | "vertical";
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  tableLayout?: "auto" | "fixed";
  textPadding?: string | number;
  textDecoration?: React.CSSProperties["textDecoration"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlSocial({
  children,
  ...props
}: IMjmlSocialProps): JSX.Element {
  return React.createElement(
    "mj-social",
    convertPropsToMjmlAttributes(props),
    children
  );
}
