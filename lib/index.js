import '../assets/stylesheets/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root, { store } from './Root'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/lib/locale-data/en'
import de from 'react-intl/lib/locale-data/de'
import it from 'react-intl/lib/locale-data/it'

addLocaleData(en)
addLocaleData(de)
addLocaleData(it)

// All modern browsers, except `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl)
  require.ensure(['intl'], require => {
    require('intl').default
    start()
  }, 'IntlBundle')
else start()

function start () {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
  , document.getElementById('app'))
}
