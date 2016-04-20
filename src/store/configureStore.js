import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from 'store/reducers';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import redirect from 'store/middlewares/redirect';

const func = f => f;
const devTools = (config.isDebug && window.devToolsExtension)
  ? window.devToolsExtension() : func;
const logger = config.isDebug ? createLogger() : func;

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(logger),
    // redirect must be last!!!
    applyMiddleware(redirect),
    devTools,
  )(createStore)(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('store/reducers', () => {
      const nextRootReducer = require('store/reducers').rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
