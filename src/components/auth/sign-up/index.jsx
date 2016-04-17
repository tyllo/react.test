/* globals config */

import React from 'react';
import CSSModules from 'react-css-modules';
import ReactMixin from 'react-mixin';

import Callout from 'components/callout';
import replaceDocumentTitle from 'mixins/replace-document-title';

import template from './template.jade'
import style from '../style.scss';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class Auth extends React.Component {
  documentTitle = 'Authorize - sign up';

  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.validatePwd = this.validatePwd.bind(this);

    this.state = {
      username: '',
      password: '',
      password_confirm: '',
      error_username: false,
      error_password: false,
    };
  }

  signUp(e) {
    e.preventDefault();
    console.log('sign up');
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
    var password = this.refs.password.value;
    var confirm = this.refs.password_confirm.value;

    if (password && confirm && password !== confirm) {
      var error = { error_password: true };
      this.setState(error);
      console.log(this.state)
    }
  }

  render() {
    return template.call(this, { Callout });
  }
}
