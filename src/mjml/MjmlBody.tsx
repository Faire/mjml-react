/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes, Pixel } from "../utils";

export interface IMjmlBodyProps {
  /** email&#39;s width
   * MJML default value: 600px */
  width?: Pixel;
  /** the general background color */
  backgroundColor?: React.CSSProperties["backgroundColor"];
  className?: string;
  /** class name, added to the root HTML element created */
  cssClass?: string;
  mjmlClass?: string;
  children?: React.ReactNode;
}

export function MjmlBody({ children, ...props }: IMjmlBodyProps): JSX.Element {
  return React.createElement(
    "mj-body",
    convertPropsToMjmlAttributes(props),
    children
  );
}
