/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlProps {
  children?: React.ReactNode;
  owa?: string;
  lang?: string;
}

export function Mjml({ children, ...props }: IMjmlProps): React.JSX.Element {
  return React.createElement(
    "mjml",
    convertPropsToMjmlAttributes(props),
    children
  );
}
