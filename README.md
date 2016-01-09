http://emmenko.github.io/redux-react-router-async-example

This is a boilerplate example showcasing _mostly_ [Redux](https://github.com/gaearon/redux) and [React Router](https://github.com/rackt/react-router) and it aims to provide different examples or use cases with the two libraries.

##### The project will be constantly updated and improved with the latest dependencies, features, best practices and so on.

> Check out the [migration to babel 6](https://github.com/emmenko/redux-react-router-async-example/pull/52).

## Features

- latest `react`, `redux`, `react-router`
- `devtools` + `HMR` for development
- `react`
  - higher-order components
  - higher-order functions
- `redux`
  - bootstrap initial state
  - store enhancers (e.g.: localStorage persistence)
  - middleware composition
  - easy-to-configure reducers
  - async actions
- `react-router`
  - nested routes
  - secured area by login
  - keep routes into state for easy time travel
- `i18n` support by `react-intl`
  - scripts to extract messages and generate `XLIFF` files for translators
- GitHub API with pagination
- CSSnext bundles
  - injected into HTML by webpack for development (allows `HMR`)
  - bundled as a separate file for production
- development tools such as `webpack`, `babel`, `eslint`

## Development

```bash
$ npm install
$ npm start
```

### I18n support

All messages in this website are localized and rendered using `react-intl@2.0`.

There is also a [babel plugin](https://github.com/yahoo/babel-plugin-react-intl) to extract all the default messages into `./_translations/lib` to be provided to translators.

```bash
$ npm run build:i18n
```

You can also run a script to extract all those translations as key-value.

```bash
$ npm run build:i18n:langs
```


#### Thanks

- [Redux](https://github.com/gaearon/redux) for the _Atomic Flux_ architecture.
- [React](https://github.com/facebook/react) for all the goodness.
- [React-Router](https://github.com/rackt/react-router) for the other goodness.
- [React-Transform](https://github.com/gaearon/react-transform-boilerplate) for development fun (and productivity).
- [Webpack](https://github.com/webpack/webpack) for keeping everything together.
