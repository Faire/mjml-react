/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTableProps {
  /** MJML default value: left */
  align?: "left" | "right" | "center";
  /** MJML default value: none */
  border?: React.CSSProperties["border"];
  /** MJML default value: 0 */
  cellpadding?: string;
  /** MJML default value: 0 */
  cellspacing?: string;
  containerBackgroundColor?: string;
  /** MJML default value: #000000 */
  color?: React.CSSProperties["color"];
  fontFamily?: string;
  fontSize?: string | number;
  fontWeight?: string;
  lineHeight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  role?: "none" | "presentation";
  tableLayout?: "auto" | "fixed" | "initial" | "inherit";
  verticalAlign?: "top" | "bottom" | "middle";
  /** MJML default value: 100% */
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
}

export function MjmlTable({
  children,
  ...props
}: IMjmlTableProps): JSX.Element {
  return React.createElement(
    "mj-table",
    convertPropsToMjmlAttributes(props),
    children
  );
}
