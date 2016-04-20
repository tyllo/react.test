import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import AuthInput from 'components/auth-input';
import Message from 'components/message';

import template from './template.jade';
import style from '../style.scss';

@CSSModules(style)
export default class Auth extends React.Component {
  static defaultProps = {
    username: '',
    password: '',
    error: '',
  };

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    error: React.PropTypes.string.isRequired,
  };

  state = {
    username: '',
    password: '',
    password_confirm: '',
    error_password: false,
    error: false,
  };

  constructor(props) {
    super(props);

    this.signUp = this.signUp.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
    this.signUp = this.signUp.bind(this);
    this.validatePwd = this.validatePwd.bind(this);
    this.setValue = this.setValue.bind(this);

    this.state = Object.assign(this.state, this.props, { error: false });
  }

  componentWillReceiveProps(nextProps) {
    var newState = Object.assign({}, this.state, nextProps);
    newState.error = !!nextProps.error;
    this.setState(newState);
  }

  signUp(e) {
    e.preventDefault();
    var { username, password } = this.state;

    if (username && password && this.validatePwd()) {
      this.props.actions.signup({ username, password });
    }
  }

  closeInfo(fieldName) {
    var error = { [fieldName]: false };
    this.setState(error);
  }

  validatePwd() {
    var password = this.state.password.trim();
    var confirm = this.state.password_confirm.trim();

    if (password && confirm && (password === confirm)) {
      this.setState({ error_password: false });
      return true;
    } else {
      this.setState({ error_password: true });
    }
  }

  setValue(fieldName, { value }) {
    this.state[fieldName] = value;
  }

  render() {
    return template.call(this, { AuthInput, Message, Link });
  }
}
