import React from 'react';
import { hashHistory } from 'react-router';

export default class Logout extends React.Component {
  static propTypes = {
    logout: React.PropTypes.func.isRequired,
  };

  componentWillMount () {
    this.props.logout();
    hashHistory.push('/auth');
  }

  render() {
    return null;
  }
}
