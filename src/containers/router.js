/* global config */

import React from 'react';
import { Router, Route, IndexRedirect, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import App from 'containers/app';
import TransactionsPage from 'containers/transactionsPage';
import OverviewPage from 'containers/overviewPage';
import AuthPage from 'containers/authPage';

const store = configureStore();

export default () => ({
  render: () => (
    <Provider store={store}>
      <Router history={config.isDevelope ? browserHistory : hashHistory}>
        <Route path='/' component={App} onEnter={App.checkLogin}>
          <IndexRedirect to='transactions' />
          <Route path='transactions' component={TransactionsPage} />
          <Route path='overview' component={OverviewPage} />
        </Route>
        <Route path='auth' component={AuthPage} onEnter={AuthPage.checkLogin}>
          <IndexRedirect to='sign-in' />
          <Route path=':name' component={AuthPage} onEnter={AuthPage.checkLogin} />
        </Route>
        <Route path='logout' component={AuthPage} onEnter={AuthPage.logout}>
          <IndexRedirect to='auth' />
        </Route>
      </Router>
    </Provider>
  )
})
