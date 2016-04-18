/* globals config */

import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import AuthInput from 'components/auth-input';
import Callout from 'components/callout';

import template from './template.jade'
import style from '../style.scss';

@CSSModules(style)
export default class Auth extends React.Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  signIn(e) {
    e.preventDefault();
    var { username, password } = this.state;

    if(!username || !password) { return; }

    console.log('sign in', username, password);
  }

  closeInfo() {
    this.setState({error: false });
  }

  setValue(fieldName, { value }) {
    console.log('setValue', fieldName, value)
    this.state[fieldName] = value;
  }

  render() {
    return template.call(this, { AuthInput, Callout, Link });
  }
}
