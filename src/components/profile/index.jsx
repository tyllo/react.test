import React from 'react';
import CSSModules from 'react-css-modules';

import template from './template.jade';
import style from './style.scss';

@CSSModules(style)
export default class Profile extends React.Component {
  static propTypes = {
    username: React.PropTypes.string.isRequired,
    summa: React.PropTypes.number.isRequired,
  };

  render() {
    return template.apply(this);
  }
}
