import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { rootReducer } from 'store/reducers';

export default function configureStore() {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger())
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
