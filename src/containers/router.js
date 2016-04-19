/* globals config */

import React from 'react';
import { Router, Route, IndexRedirect, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

import App from 'containers/app';
import TransactionsPage from 'containers/transactionsPage';
import OverviewPage from 'containers/overviewPage';
import AuthPage from 'containers/authPage';

import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

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
          <Route path='sign-in' component={SignIn} />
          <Route path='sign-up' component={SignUp} />
        </Route>
        <Route path='logout' component={AuthPage} onEnter={AuthPage.logout}>
          <IndexRedirect to='auth' />
        </Route>
      </Router>
    </Provider>
  )
})
