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

export interface IMjmlButtonProps {
  align?: "left" | "center" | "right";
  backgroundColor?: React.CSSProperties["backgroundColor"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  border?: React.CSSProperties["border"];
  color?: React.CSSProperties["color"];
  containerBackgroundColor?: string;
  fontFamily?: string;
  fontSize?: string | number;
  fontStyle?: string;
  fontWeight?: string;
  height?: string | number;
  href?: string;
  name?: string;
  title?: string;
  innerPadding?: Matrix<Pixel | Percentage>;
  letterSpacing?: string | number;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  padding?: Matrix<Pixel | Percentage>;
  rel?: string;
  target?: string;
  textDecoration?: React.CSSProperties["textDecoration"];
  textTransform?: React.CSSProperties["textTransform"];
  verticalAlign?: React.CSSProperties["verticalAlign"];
  textAlign?: React.CSSProperties["textAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlButton({
  children,
  ...props
}: IMjmlButtonProps): JSX.Element {
  return React.createElement(
    "mj-button",
    convertPropsToMjmlAttributes(props),
    children
  );
}
