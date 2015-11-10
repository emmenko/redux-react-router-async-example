import '../assets/stylesheets/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root, { store } from './Root'

// All modern browsers, expect `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl)
  require.ensure(['intl'], require => {
    require('intl')
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
