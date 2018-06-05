# ⚛️ gatsby-starter-modern

A modern Gatsby starter with strict linting and auto-formatting rules.

## 🚀 Getting started

- Clone this project and install all the required dependencies _(e.g. with `gatsby new gatsby-example-site https://github.com/kripod/gatsby-starter-modern` after making sure that Gatsby CLI is installed globally with `npm install --global gatsby-cli`)_
- Start a development server with `yarn develop` or `npm run develop`
  - _Other scripts like `build`, [`lint`][script-lint] and [`format`][script-format] are also available_

### Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kripod/gatsby-starter-modern)

[script-lint]: #linting
[script-format]: #automatic-code-formatting

## 💅 Style management

[SCSS][sass], a superset of CSS is used for styling components. The usage of Sass-specific extensions is optional, as every valid CSS stylesheet is a valid SCSS file with the same meaning.

The default style of browsers is normalized by [modern-normalize][].

[sass]: https://sass-lang.com/
[modern-normalize]: https://github.com/sindresorhus/modern-normalize

## ✨ Superior developer experience

### Automatic code formatting

[Prettier][] is an opinionated code formatter aiming to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting Prettier is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Linting

[Linters][lint] are tools that analyze source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.

- JavaScript files are linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb-base][].
- SCSS files are linted by [stylelint][], adhering to the rules specified in [stylelint-config-recommended-scss][] and the [declaration order conventions of idiomatic-css][] _(enforced by [stylelint-config-idiomatic-order][])_.

[lint]: https://en.wikipedia.org/wiki/Lint_(software)
[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb-base]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[stylelint]: https://stylelint.io/
[stylelint-config-recommended-scss]: https://github.com/kristerkari/stylelint-config-recommended-scss
[declaration order conventions of idiomatic-css]: https://github.com/necolas/idiomatic-css#declaration-order
[stylelint-config-idiomatic-order]: https://github.com/ream88/stylelint-config-idiomatic-order
