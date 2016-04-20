import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import AuthInput from 'components/auth-input';
import Message from 'components/message';

import template from './template.jade'
import style from '../style.scss';

@CSSModules(style)
export default class Auth extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    username: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    error: React.PropTypes.string.isRequired,
  };

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

    this.state = Object.assign(this.state, this.props, { error: false });
  }

  componentWillReceiveProps(nextProps) {
    var newState = Object.assign({}, this.state, nextProps);
    newState.error = !!nextProps.error;
    this.setState(newState);
  }

  signIn(e) {
    e.preventDefault();
    var { username, password } = this.state;
    if(!username || !password) { return; }

    this.props.actions.login({ username, password });
  }

  closeInfo() {
    this.setState({error: false });
  }

  setValue(fieldName, { value }) {
    this.state[fieldName] = value;
  }

  render() {
    return template.call(this, { AuthInput, Message, Link });
  }
}
