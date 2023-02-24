[Jump to getting started](#getting-started)

## Annoucement from Engineering @ Faire

Hello mjml community, we at Faire are excited to announce we will be taking over maintaining the open-source mjml-react project!

Over the past year, Faire has used mjml-react extensively. This package allowed us to incorporate all the benefits of mjml without having to ask our developers to learn a new dev environment when moving from web to email. As a result, we significantly reduced the development effort for creating emails, while keeping email rendering issues to a minimum.

We saw so much benefit from mjml-react, and we don’t want to see it go. That is why we want to continue to maintain the package, and improve it with some of our own new ideas! For now you can check us out at [@faire/mjml-react](https://github.com/Faire/mjml-react). We hope this can be a drop-in replacement for mjml-react in most cases, but are eager to work with you if there are any issues. Don’t hesitate to reach out to us on the #mjml-react channel in the [MJML Slack Group](https://join.slack.com/t/mjml/shared_invite/zt-gqmwfwmr-kPBnfuuB7wof5httaTcXxg) or file a [github issue](https://github.com/Faire/mjml-react/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc). From there, you can look forward to new improvements coming soon.

And of course we want to extend a massive thank you to the Wix team for building and previously maintaining this project.

# mjml-react &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/faire/mjml-react/blob/master/LICENSE) <a href="https://www.npmjs.com/package/mjml-react"><img src="https://img.shields.io/npm/v/@faire/mjml-react" alt="npm version"></a> [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/faire/mjml-react/pulls)

<img src="https://cdn.worldvectorlogo.com/logos/mjml-by-mailjet.svg" height="64"/> &middot; <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" width="64" height="64"/>

There is an awesome library [mjml](https://mjml.io/) with github repo here [https://github.com/mjmlio/mjml](https://github.com/mjmlio/mjml).

`MJML` is a markup language created by [Mailjet](https://www.mailjet.com/).
So in order to create emails on the fly we created a library with `React` components.

## Get started today with V2 - 100% backwards compatible with https://github.com/wix-incubator/mjml-react/

V2 is a drop in replacement for https://github.com/wix-incubator/mjml-react/, with some additional support. If there's a component missing you can make a PR against https://github.com/Faire/mjml-react/tree/main-v2 or submit an issue and we'll try to unblock you.

## What's new in V3?

We wanted V3 of mjml-react to be fairly easy to migrate to from V2. We will implement more advanced features in V4. The main updates in V3 include:

- Typescript: mjml-react is now written in typescript which helps ensure correct props are passed to mjml components
- Full mjml component support: We use an automated script for pulling mjml components and creating a corresponding mjml-react component. This means we get full support of all components available in the latest mjml version
- Other small changes: add dangerouslySetInnerHTML in mjml-react for mjml ending tags, update testing, add in-code documenation

## What's coming in V4?

In V4 we are exploring exciting features that will make mjml-react even more powerful. This includes:

- Improved prop type safety: help ensure correct formatting for props like padding, width, and height

If you want to be on the cutting edge of what is being released, we are publishing a [v4-main-alpha version](https://www.npmjs.com/package/@faire/mjml-react/v/main-alpha) to npm.

## Getting Started

1. Choose between rendering in mjml or mjml-browser based on your rendering environment. Also includes additional required dependencies.

node:

```bash
npm install @faire/mjml-react mjml react react-dom
```

browser:

```bash
npm install @faire/mjml-react mjml-browser react react-dom
```

2. Wire up your render function (uncomment `mjml` or `mjml-browser`)

```tsx
import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
// import mjml2html from "mjml";
// import mjml2html from "mjml-browser";
import { MJMLParseResults } from "mjml-core";
import React from "react";

export function renderReactToMjml(email: React.ReactElement): MJMLParseResults {
  return mjml2html(renderToMjml(email));
}
```

3. And afterwards write a code like a pro:

```tsx
import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from "@faire/mjml-react";

import { renderReactToMjml } from "./renderReactToMjml";

const { html, errors } = renderReactToMjml(
  <Mjml>
    <MjmlHead>
      <MjmlTitle>Last Minute Offer</MjmlTitle>
      <MjmlPreview>Last Minute Offer...</MjmlPreview>
    </MjmlHead>
    <MjmlBody width={500}>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton
            padding="20px"
            backgroundColor="#346DB7"
            href="https://www.wix.com/"
          >
            I like it!
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    </MjmlBody>
  </Mjml>,
  { validationLevel: "soft" }
);
```

And as the result you will get a nice looking email HTML (works in mobile too!)

![preview](https://user-images.githubusercontent.com/10008149/41058394-59b8ce9e-69d2-11e8-9eb9-c294f35bae9f.png)

## Options

@faire/mjml-react sets the following MJML options when rendering to HTML:

```js
{
  keepComments: false,
  beautify: false,
  minify: true,
  validationLevel: 'strict'
}
```

If you want to override these, you can pass an object to `render` as a second argument. See the [MJML docs](https://documentation.mjml.io/#inside-node-js) for the full list of options you can set.

## Extensions

```js
import {
  MjmlHtml,
  MjmlComment,
  MjmlConditionalComment
} from '@faire/mjml-react/extensions';

<MjmlComment>Built with ... at ...</MjmlComment>
// <!--Built with ... at ...-->

<MjmlConditionalComment>MSO conditionals</MjmlConditionalComment>
// <!--[if gte mso 9]>MSO conditionals<![endif]-->

<MjmlConditionalComment condition="if IE">MSO conditionals</MjmlConditionalComment>
// <!--[if IE]>MSO conditionals<![endif]-->

<MjmlHtml tag="div" html="<span>Hello World!</span>" />
// <div><span>Hello World!</span></div>
```

## Utils

We do have also some utils for post processing the output HTML.
Because not all mail clients do support named HTML entities, like `&apos;`.
So we need to replace them to hex.

```js
import {
  namedEntityToHexCode,
  fixConditionalComment,
} from "@faire/mjml-react/utils";

const html = "<div>&apos;</div>";
namedEntityToHexCode(html);
// <div>&#39;</div>

fixConditionalComment(
  "<!--[if mso]><div>Hello World</div><![endif]-->",
  "Hello",
  "if IE"
);
// <!--[if IE]><div>Hello World</div><![endif]-->
```

## Limitations

Currently `mjml` and `@faire/mjml-react` libraries are meant to be run inside a node.

## Example project

You can find an example project here
[https://github.com/wix-incubator/mjml-react-example](https://github.com/wix-incubator/mjml-react-example)
