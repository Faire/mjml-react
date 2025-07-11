/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */
import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

export interface IMjmlImageProps {
  alt?: string;
  href?: string;
  name?: string;
  src?: string;
  srcset?: string;
  sizes?: string;
  title?: string;
  rel?: string;
  /** MJML default value: center */
  align?: "left" | "center" | "right";
  /** MJML default value: 0 */
  border?: React.CSSProperties["border"];
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  borderTop?: string;
  borderRadius?: React.CSSProperties["borderRadius"];
  containerBackgroundColor?: string;
  fluidOnMobile?: boolean;
  /** MJML default value: 10px 25px */
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  /** MJML default value: _blank */
  target?: string;
  width?: string | number;
  /** MJML default value: auto */
  height?: string | number;
  maxHeight?: string | number;
  fontSize?: string | number;
  usemap?: string;
  className?: string;
  cssClass?: string;
  mjmlClass?: string;
}

export function MjmlImage(props: IMjmlImageProps): React.JSX.Element {
  return React.createElement("mj-image", convertPropsToMjmlAttributes(props));
}
