import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, HashHistory } from 'react-router'

import App from 'components/app';
import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

import Navigation from 'components/navigation';
import AddTransaction from 'components/add-transaction';
import ViewTransaction from 'components/view-transaction';

var main = document.createElement('div');
main.id = 'react-view';
document.body.appendChild(main);

render(
  <Router history={HashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='add-transaction' />
      <Route path='add-transaction' component={AddTransaction} />
      <Route path='view-transaction' component={ViewTransaction} />
    </Route>
    <Route path='sign-in' component={SignIn} />
    <Route path='sign-up' component={SignUp} />
  </Router>,
  main);
