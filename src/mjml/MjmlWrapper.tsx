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

export interface IMjmlWrapperProps {
  /** section color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  /** background url */
  backgroundUrl?: string;
  /** css background repeat */
  backgroundRepeat?: React.CSSProperties["backgroundRepeat"];
  /** css background size */
  backgroundSize?: React.CSSProperties["backgroundSize"];
  /** css background position (see outlook limitations in mj-section doc) */
  backgroundPosition?: React.CSSProperties["backgroundPosition"];
  /** css background position x */
  backgroundPositionX?: string;
  /** css background position y */
  backgroundPositionY?: string;
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
  /** make the wrapper full-width */
  fullWidth?: boolean;
  /** supports up to 4 parameters
   * MJML default value: 20px 0 */
  padding?: Matrix<Pixel | Percentage>;
  /** section top offset */
  paddingTop?: Pixel | Percentage;
  /** section bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** section left offset */
  paddingLeft?: Pixel | Percentage;
  /** section right offset */
  paddingRight?: Pixel | Percentage;
  /** css text-align */
  textAlign?: React.CSSProperties["textAlign"];
  textPadding?: Matrix<Pixel | Percentage>;
  className?: string;
  /** class name, added to the root HTML element created */
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
