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
  documentTitle = 'Authorize - sign in';

  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.closeInfo = this.closeInfo.bind(this);

    this.state = {
      error: true,
    };
  }

  signIn(e) {
    e.preventDefault();
    console.log('sign in');
  }

  closeInfo(e) {
    e.preventDefault();
    this.setState({ error: false });
  }

  render() {
    return template.call(this, { Callout });
  }
}
