/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlWrapperProps {
  backgroundColor?: React.CSSProperties["backgroundColor"];
  backgroundUrl?: string;
  backgroundRepeat?: "repeat" | "no-repeat";
  backgroundSize?: React.CSSProperties["backgroundSize"];
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  backgroundPositionX?: string;
  backgroundPositionY?: string;
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  borderRight?: string;
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  fullWidth?: boolean;
  /** MJML default value: 20px 0 */
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  textAlign?: "left" | "center" | "right";
  textPadding?: string | number;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlWrapper({
  children,
  ...props
}: IMjmlWrapperProps): JSX.Element {
  return React.createElement(
    "mj-wrapper",
    convertPropsToMjmlAttributes(props),
    children
  );
}
