/* globals config */

import React from 'react';
import CSSModules from 'react-css-modules';
import ReactMixin from 'react-mixin';

import Callout from 'components/callout';
import replaceDocumentTitle from 'mixins/replace-document-title';

import template from './template.jade'
import style from './style.scss';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class Auth extends React.Component {
  documentTitle = 'Authorize';

  constructor(props) {
    super(props);

    this.authorize = this.authorize.bind(this);
    this.closeInfo = this.closeInfo.bind(this);

    this.state = {
      error: true,
    };
  }

  authorize(e) {
    e.preventDefault();
    console.log('authorize', this, this.documentTitle);
  }

  closeInfo(e) {
    e.preventDefault();
    this.setState({ error: false });
  }

  render() {
    return template.call(this, { Callout });
  }
}
