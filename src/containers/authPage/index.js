import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from 'store/actions/auth';

import replaceDocumentTitle from 'mixins/replace-document-title';
import style from './style.scss';

const AUTHARICATE = false;

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class Auth extends React.Component {
  documentTitle = 'Authorize';

  static checkLogin(nextState, replace) {
    if (AUTHARICATE) {
      replace('/');
    }
  }

  static logout(nextState, replace) {
    replace('auth');
  }

  render() {
    return (
      <div>
        <div styleName='helper' />
        {this.props.children}
      </div>
    );
  }
}
