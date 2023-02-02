/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHeroProps {
  /** MJML default value: fixed-height */
  mode?: string;
  /** MJML default value: 0px */
  height?: string | number;
  backgroundUrl?: string;
  backgroundWidth?: string | number;
  backgroundHeight?: string | number;
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  innerBackgroundColor?: string;
  innerPadding?: string | number;
  innerPaddingTop?: string | number;
  innerPaddingLeft?: string | number;
  innerPaddingRight?: string | number;
  innerPaddingBottom?: string | number;
  /** MJML default value: 0px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  verticalAlign?: "top" | "bottom" | "middle";
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlHero({ children, ...props }: IMjmlHeroProps): JSX.Element {
  return React.createElement(
    "mj-hero",
    convertPropsToMjmlAttributes(props),
    children
  );
}
