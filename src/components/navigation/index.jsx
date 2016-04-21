import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Profile from 'components/profile';

import template from './template.jade';
import style from './style.scss';

@CSSModules(style)
export default class Navigation extends React.Component {
  render() {
    return template.call(this, { Link, Profile });
  }
}
