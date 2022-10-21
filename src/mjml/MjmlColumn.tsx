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

export interface IMjmlColumnProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  direction?: "ltr" | "rtl";
  innerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  innerBorder?: string;
  innerBorderBottom?: string;
  innerBorderLeft?: string;
  innerBorderRadius?: Matrix<Pixel | Percentage>;
  innerBorderRight?: string;
  innerBorderTop?: string;
  padding?: Matrix<Pixel | Percentage>;
  verticalAlign?: React.CSSProperties["verticalAlign"];
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlColumn({
  children,
  ...props
}: IMjmlColumnProps): JSX.Element {
  return React.createElement(
    "mj-column",
    convertPropsToMjmlAttributes(props),
    children
  );
}
