http://emmenko.github.io/redux-react-router-async-example

This is a boilerplate example showcasing mostly [Redux](https://github.com/gaearon/redux) and [React Router](https://github.com/rackt/react-router).

> Still a **WIP** but it aims to provide different examples or use cases with the two libraries.

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
- [React-Hot-Loader](https://github.com/gaearon/react-hot-loader) for development fun (and productivity).
- [Webpack](https://github.com/webpack/webpack) for keeping everything together.
