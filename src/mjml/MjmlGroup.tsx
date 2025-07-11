/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlGroupProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  verticalAlign?: "top" | "bottom" | "middle";
  width?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlGroup({
  children,
  ...props
}: IMjmlGroupProps): React.JSX.Element {
  return React.createElement(
    "mj-group",
    convertPropsToMjmlAttributes(props),
    children
  );
}
