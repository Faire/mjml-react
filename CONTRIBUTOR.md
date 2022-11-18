Faire/mjml-react is one of [Faire](https://www.faire.com)'s first open source projects guided by just a few staff developers to make emails easier for everyone. We are continuously working to make our development and release workflow as efficient as possible, so we appreciate your help in supporting a maintanable standard for future users!

## Open Development

All work on Mjml-react happens directly on [GitHub](https://github.com/Faire/mjml-react). Core team members and external contributors send pull requests which go through similar review processes.

## Semantic Versioning

Mjml-react follows [semantic versioning](https://semver.org/). We release patch versions for critical bugfixes, minor versions for new features or non-essential changes, and major versions for any breaking changes.

Every flagged change is automatically documented on the Github [release log](https://github.com/Faire/mjml-react/releases).

## Release Process

From v3.0.0 onwards, mjml-react uses [@semantic-release](https://www.npmjs.com/package/semantic-release) to automate:

- determining the next semantic version by analyzing commit messages on a given release branch (see table below on how to flag appropriately)
- updating the [release log + tags](https://github.com/Faire/mjml-react/releases) and current version
- publishing the next version package to [NPM](https://www.npmjs.com/package/@faire/mjml-react)

This process is triggered via Github actions by pushing to a release branch. The next version is determined from the most recent commit with a version tag that corresponds to the branch (i.e. `v3.0.1.` vs. `v.3.0.1-alpha.1`, see more on prereleases in Branch Organization).

When pull requests are merged, the changes are squashed into one commit which uses the pull request title as the default message. In order for the merged code to trigger a version bump and release, <b><u>your pull request title should be formatted in one of the following ways</u></b>:

| Commit message                                                                                                                                                                                   | Release type                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release                                                                                                      |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release                                                                                                  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer/body of the pull request) |
| `chore(docs): update README.MD`                                                                                                                                                                  | No Release (no version update)                                                                                             |

In all cases the scope is optional (i.e. the title `feat: add 'graphiteWidth' option` would still trigger a feature release). Including the flag in the pull request title also allows reviewers to see the extent of outstanding proposals at a glance.

### Branch Organization

In general, pull requests addressing the latest version should target the [`main`](https://github.com/faire/mjml-react/tree/main) branch.

A current beta or alpha version may exist to test multiple fixes simultaneously, which are reserved under the branch names `main-beta` and `main-alpha`. Eventually this prerelease branch should be merged into `main` without squashing, after which a single version bump from `main` is determined by the most significant of all commits (patch, minor, major).

## Fixing A Bug

Bugs are listed on the Github repository [issues page](https://github.com/faire/mjml-react/issues). Before filing a new task, try to make sure your problem doesn't already exist.

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

As pull requests contributed externally from Faire require approval to have workflows run, <b>please ensure to test locally before pushing</b>.

## License

By contributing to mjml-react, you agree that your contributions will be licensed under its MIT license.
