

/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */


import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlImageProps {
  className?: string
cssClass?: string
mjmlClass?: string
}

export function MjmlImage(props: IMjmlImageProps): JSX.Element {
  return React.createElement("mj-image", convertPropsToMjmlAttributes(props));
};
