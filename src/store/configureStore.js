/* global config */

import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from 'store/reducers';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import redirect from 'store/middlewares/redirect';

export default function configureStore() {
  var store;

  if (config.isDebug) {
    store = compose(
      applyMiddleware(thunkMiddleware),
      applyMiddleware(createLogger()),
      // redirect must be last!!!
      applyMiddleware(redirect),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    )(createStore)(rootReducer);

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('store/reducers', () => {
        const nextRootReducer = require('store/reducers').rootReducer;
        store.replaceReducer(nextRootReducer);
      });
    }
  } else {
    store = compose(
      applyMiddleware(thunkMiddleware),
      // redirect must be last!!!
      applyMiddleware(redirect),
    )(createStore)(rootReducer);
  }

  return store;
}
