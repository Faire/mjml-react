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
  /** background color for a column */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** css border format */
  border?: React.CSSProperties["border"];
  /** css border format */
  borderBottom?: string;
  /** css border format */
  borderLeft?: string;
  /** border radius */
  borderRadius?: React.CSSProperties["borderRadius"];
  /** css border format */
  borderRight?: string;
  /** css border format */
  borderTop?: string;
  /** MJML default value: ltr */
  direction?: "ltr" | "rtl";
  /** requires: a padding, inner background color for column */
  innerBackgroundColor?: string;
  /** section bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** section left offset */
  paddingLeft?: Pixel | Percentage;
  /** section right offset */
  paddingRight?: Pixel | Percentage;
  /** section top offset */
  paddingTop?: Pixel | Percentage;
  /** css border format */
  innerBorder?: string;
  /** css border format ; requires a padding */
  innerBorderBottom?: string;
  /** css border format ; requires a padding */
  innerBorderLeft?: string;
  /** border radius ; requires a padding */
  innerBorderRadius?: Matrix<Pixel | Percentage>;
  /** css border format ; requires a padding */
  innerBorderRight?: string;
  /** css border format ; requires a padding */
  innerBorderTop?: string;
  /** supports up to 4 parameters */
  padding?: Matrix<Pixel | Percentage>;
  /** middle/top/bottom */
  verticalAlign?: React.CSSProperties["verticalAlign"];
  /** column width */
  width?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
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
