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

export interface IMjmlSocialProps {
  align?: "left" | "right" | "center";
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  iconSize?: string | number;
  iconHeight?: string | number;
  iconPadding?: Matrix<Pixel | Percentage>;
  innerPadding?: Matrix<Pixel | Percentage>;
  lineHeight?: string | number;
  mode?: "horizontal" | "vertical";
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: Matrix<Pixel | Percentage>;
  tableLayout?: "auto" | "fixed";
  textPadding?: Matrix<Pixel | Percentage>;
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
