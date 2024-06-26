import React, { Component } from "react";

import { MjmlRaw } from "..";

export class MjmlYahooStyle extends Component<{ children?: React.ReactNode }> {
  render() {
    const { children, ...rest } = this.props;
    if (children && children.toString().trim().length) {
      return (
        <MjmlRaw {...rest}>
          <style>{`@media screen yahoo {${children}}`}</style>
        </MjmlRaw>
      );
    }
    return null;
  }
}
