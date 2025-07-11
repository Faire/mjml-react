/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlHtmlAttributeProps {
  children?: React.ReactNode;
  name?: string;
}

export function MjmlHtmlAttribute({
  children,
  ...props
}: IMjmlHtmlAttributeProps): React.JSX.Element {
  return React.createElement(
    "mj-html-attribute",
    convertPropsToMjmlAttributes(props),
    children
  );
}
