Faire/mjml-react is one of [Faire](https://www.faire.com)'s first open source projects guided by just a few staff developers to make emails easier for everyone. We are continuously working to make our development and release workflow as efficient as possible, so we appreciate your help in supporting a maintanable standard for future users!

## Open Development

All work on Mjml-react happens directly on [GitHub](https://github.com/facebook/react). Core team members and external contributors send pull requests which go through the same review process.

## Semantic Versioning

Mjml-react follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes.

Every tagged change is automatically documented in the [changelog file](CHANGELOG.md) for v3 and beyond. You can also find them on the Github [release log](https://github.com/Faire/mjml-react/releases).

## Release Process

Mjml-react newly uses [@semantic-release](https://www.npmjs.com/package/semantic-release) to automate:

- determining the next semantic version by analyzing commit messages on a given release branch (see table below on how to tag appropriately)
- updating the [release log + tags](https://github.com/Faire/mjml-react/releases), changelog file, and current version
- publishing the next version package to [NPM](https://www.npmjs.com/package/@faire/mjml-react)

This process is triggered via Github actions by pushing to a release branch.

When pull requests are merged, the changes are squashed into one commit which uses the pull request title as the message. Thus, in order for the merged code to trigger a version bump and release, <b><u>your pull request title must be formatted in one of the following ways</u></b>:

| Commit message                                                                                                                                                                                   | Release type                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                                      |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                                  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer/body of the pull request) |

In all cases the scope is optional (i.e. the title `feat: add 'graphiteWidth' option` would still trigger a feature release). Including the tag in the pull request title also allows reviewers to see the extents of all outstanding proposals at a glance.

<!-- ## Branch Organization

- main and main version releases
- prerelease main-alpha/main-beta
- branch protection??

The principle Submit all changes directly to the [`main branch`](https://github.com/faire/mjml-react/tree/main). -->

## Bugs

### Where to Find Known Issues

Public bugs are currently listed on the Github repository [issues page](https://github.com/faire/mjml-react/issues). We keep a close eye on this and try to make it clear when we have an internal fix in progress. Before filing a new task, try to make sure your problem doesn't already exist.

<!--
## Sending a Pull Request

The core team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation. -->

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/faire/mjml-react) and create your branch from `main`
2. Run `yarn` in the repository root
3. Include any additional test cases for your feature/patch
4. If you have modified the mjml component [script file](./scripts/generate-mjml-react.ts), run `yarn generate-mjml-react` to regenerate the packaged [mjml component folder](./src/mjml/)
5. Build and ensure the test suite passes (`yarn test-dist`)
6. Format your code with [prettier](https://github.com/prettier/prettier) (`yarn format`)
7. Make sure your code lints (`yarn lint`)

After you push your branch to Github, ensure that your pull request targets the appropriate branch on the <b>Faire/mjml-react</b> repository, and not any other fork.

## Development Workflow

After cloning mjml-react, run `yarn` to fetch its dependencies.
Then, you can run several commands:

- `yarn generate-mjml-react` rebuilds all the exported mjml components in `src/mjml` using the script [here](scripts/validateMjmlReactHasBeenRun.sh). Pull requests are automatically blocked if running this produces any changes in the `src/mjml` folder, so <b>you must run this command if you functionally modify the component generation script</b>
- `yarn lint` checks the code style
- `yarn format` formats the code

For building and testing:

- `yarn build-cjs` builds the cjs `dist/src` folder
- `yarn build-esm` builds the esm `dist/esm` folder
- `yarn build` builds both the cjs and esm folders
- `yarn test` runs the test suite on the development `src` folder
- `yarn test-dist` builds and runs the test suite on the `dist/src` folder
- `yarn test-dist-skip-build` runs the test suite on `dist/src` without building

<!-- ## Style Guide

We use an automatic code formatter called [Prettier](https://prettier.io/).
Run `yarn prettier` after making any changes to the code.

Then, our linter will catch most issues that may exist in your code.
You can check the status of your code styling by simply running `yarn linc`.

However, there are still some styles that the linter cannot pick up. If you are unsure about something, looking at [Airbnb's Style Guide](https://github.com/airbnb/javascript) will guide you in the right direction. -->

## License

By contributing to mjml-react, you agree that your contributions will be licensed under its MIT license.
