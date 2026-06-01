import mjml2html from "mjml";
import { MJMLParsingOptions, MJMLJsonObject, MJMLParseError } from "mjml-core";
import React from "react";

import { renderToMjml } from "./renderToMjml";

export interface ConvertedHtml {
  html: string;
  json?: MJMLJsonObject;
  errors?: MJMLParseError[];
}

export function render(
  email: React.ReactElement,
  options: MJMLParsingOptions = {}
): Promise<ConvertedHtml> {
  const defaults: MJMLParsingOptions = {
    keepComments: false,
    beautify: false,
    validationLevel: "strict",
    minifyOptions: {
      collapseWhitespace: true,
      minifyCss: true,
      removeComments: "safe",
      removeEmptyAttributes: true,
    },
  };

  return mjml2html(renderToMjml(email), {
    ...defaults,
    ...options,
  });
}
