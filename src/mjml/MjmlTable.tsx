

/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */


import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlTableProps {
  cellspacing?: string
cellpadding?: string
className?: string
cssClass?: string
mjmlClass?: string
children?: React.ReactNode
}

export function MjmlTable({children, ...props}: IMjmlTableProps): JSX.Element {
  return React.createElement("mj-table", convertPropsToMjmlAttributes(props), children);
};
