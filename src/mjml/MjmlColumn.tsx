/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlColumnProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  innerBackgroundColor?: string;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  innerBorder?: string;
  innerBorderBottom?: string;
  innerBorderLeft?: string;
  innerBorderRadius?: string | number;
  innerBorderRight?: string;
  innerBorderTop?: string;
  padding?: string | number;
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
