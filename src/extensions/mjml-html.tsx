import React, { Component } from "react";

interface IMjmlHtml {
  tag: string;
  html: string;
}

export class MjmlHtml extends Component<IMjmlHtml> {
  render() {
    const { tag, html } = this.props;
    return React.createElement(tag || "mj-raw", {
      dangerouslySetInnerHTML: {
        __html: html,
      },
    });
  }
}
