import React from 'react';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

import App from 'containers/app';
import Transactions from 'containers/transactions';
import Overview from 'containers/overview';

import Auth from 'containers/auth';
import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

export default () => ({
  render: () => (
    <Router history={hashHistory}>
      <Route path='/' component={App} onEnter={App.checkLogin}>
        <IndexRedirect to='transactions' />
        <Route path='transactions' component={Transactions} />
        <Route path='overview' component={Overview} />
      </Route>
      <Route path='auth' component={Auth} onEnter={Auth.checkLogin}>
        <IndexRedirect to='sign-in' />
        <Route path='sign-in' component={SignIn} />
        <Route path='sign-up' component={SignUp} />
      </Route>
      <Route path='logout' component={Auth} onEnter={Auth.logout}>
        <IndexRedirect to='auth' />
      </Route>
    </Router>
  )
})
