import React, { Component, ReactNode } from "react";

import { MjmlComment } from "./mjml-comment";

interface IMjmlConditionalComment {
  condition?: string;
  children?: ReactNode;
}

export class MjmlConditionalComment extends Component<IMjmlConditionalComment> {
  render() {
    const { children, condition = "if gte mso 9", ...rest } = this.props;
    if (children && children.toString().trim().length) {
      return (
        <MjmlComment {...rest}>
          {`[${condition}]>${children}<![endif]`}
        </MjmlComment>
      );
    }
    return null;
  }
}
