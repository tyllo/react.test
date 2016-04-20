import React from 'react';
import CSSModules from 'react-css-modules';

import template from './template.jade';
import style from './style.scss';

@CSSModules(style)
export default class Message extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf([
      '',
      'secondary',
      'success',
      'warning',
      'alert',
    ]).isRequired,
    show: React.PropTypes.bool.isRequired,
    text: React.PropTypes.string.isRequired,
    close: React.PropTypes.func.isRequired,
  };

  render() {
    return this.props.show ? template.apply(this) : <span />;
  }
}
