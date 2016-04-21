/* global config */

import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
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
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to='add-transaction' />
          <Route path='add-transaction' component={TransactionsPage} />
          <Route path='overview' component={OverviewPage} />
        </Route>
        <Route path='/auth' component={AuthPage}>
          <IndexRedirect to='sign-in' />
          <Route path=':name' component={AuthPage} />
        </Route>
        <Route path='/logout' component={AuthPage}>
          <IndexRedirect to='/auth/logout' />
        </Route>
      </Router>
    </Provider>
  )
})
