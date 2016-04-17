/* globals config */

import React from 'react';
import CSSModules from 'react-css-modules';
import ReactMixin from 'react-mixin';

import AuthInput from 'components/auth-input';
import Callout from 'components/callout';
import replaceDocumentTitle from 'mixins/replace-document-title';

import template from './template.jade'
import style from '../style.scss';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class Auth extends React.Component {
  documentTitle = 'Authorize - sign up';

  state = {
    username: '',
    password: '',
    password_confirm: '',
    error_username: false,
    error_password: false,
  };

  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePwd = this.validatePwd.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  signUp(e) {
    e.preventDefault();
    var { username, error_username, password, error_password } = this.state;
    this.validatePwd();

    if (username && password && !error_username && !error_password) {
      console.log('sign up', username, password);
    }
  }

  closeInfo(fieldName) {
    var error = { [fieldName]: false };
    this.setState(error);
  }

  validateUsername(e) {
    var username = e.target.value;
    console.log('validate username');
  }

  validatePwd() {
    var password = this.state.password.trim();
    var confirm = this.state.password_confirm.trim();

    if (password && confirm && (password === confirm)) {
    var error = { error_password: false };
    this.setState(error);
      return true;
    }

    var error = { error_password: true };
    this.setState(error);
  }

  setValue(fieldName, e) {
    this.state[fieldName] = e.target.value;
  }

  render() {
    return template.call(this, { AuthInput, Callout });
  }
}
