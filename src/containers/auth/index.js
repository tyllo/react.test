import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';
import replaceDocumentTitle from 'mixins/replace-document-title';
import style from './style.scss';

// TODO: redux!!!
import fetchBanks from 'api/fetch-banks';
const AUTHARICATE = true;

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
