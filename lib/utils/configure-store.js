/* global __DEVTOOLS__ */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { reduxReactRouter, routerStateReducer } from 'redux-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import createHashHistory from 'history/lib/createHashHistory'
import thunk from 'redux-thunk'
import logger from '../middleware/logger'
import persistenceStore from '../persistence/store'
import * as reducers from '../reducers'

// Use hash location for Github Pages
// but switch to HTML5 history locally.
const createHistory = process.env.NODE_ENV === 'production' ?
  createHashHistory : createBrowserHistory

let combinedCreateStore
const storeEnhancers = [
  persistenceStore,
  reduxReactRouter({ createHistory })
]

if (__DEVTOOLS__) {
  const DevTools = require('../components/DevTools')
  storeEnhancers.push(DevTools.instrument())
}

combinedCreateStore = compose(...storeEnhancers)(createStore)
const finalCreateStore = applyMiddleware(thunk, logger)(combinedCreateStore)
const combinedReducer = combineReducers(Object.assign({
  router: routerStateReducer
}, reducers))

export default function configureStore (initialState) {

  const store = finalCreateStore(combinedReducer, initialState)

  if (module.hot)
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })

  return store
}
