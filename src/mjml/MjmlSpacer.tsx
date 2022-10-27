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

export interface IMjmlSpacerProps {
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  /** inner element background color */
  containerBackgroundColor?: string;
  /** bottom offset */
  paddingBottom?: Pixel | Percentage;
  /** left offset */
  paddingLeft?: Pixel | Percentage;
  /** right offset */
  paddingRight?: Pixel | Percentage;
  /** top offset */
  paddingTop?: Pixel | Percentage;
  /** supports up to 4 parameters */
  padding?: Matrix<Pixel | Percentage>;
  /** spacer height
   * MJML default value: 20px */
  height?: Pixel | Percentage;
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlSpacer(props: IMjmlSpacerProps): JSX.Element {
  return React.createElement("mj-spacer", convertPropsToMjmlAttributes(props));
}
