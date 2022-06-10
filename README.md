# mjml-react
Tools for using mjml.io with react

Built on the many great tools that came before, @faire/mjml-react encapsulates how Faire builds emails.

Typescript
React
MJML
style-components
storybook
litmus

Originally we tried using wix-incubator/mjml-react, but it didn't let us generate react bindings
for custom components or connect with the many tools in the react ecosystem using className.

Our requirements:
- Ability to push styles down the react tree in order to

We don't use `MjmlClass` and try not to use the `MjmlStyle` tags

# Versioning
The major and minor versions are meant to match 

# TODO

- [ ] isRawHtml react context
- [ ] Allow custom components to be built using the same generate-mjml-react script
- [ ] How 
