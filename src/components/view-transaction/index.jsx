import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import style from './style.scss';
import template from './template.jade';
import replaceDocumentTitle from 'mixins/replace-document-title';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class ViewTransaction extends React.Component {
  documentTitle = 'View transaction';

  static defaultProps = {
    edit: false,
    title: '',
  };

  static propTypes = {
    edit: React.PropTypes.bool,
    transactions: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  edit(transactin, e) {
    e.preventDefault();
    console.log('edit', transactin);
  }

  delete(transactin, e) {
    e.preventDefault();
    console.log('delete', transactin);
  }

  render() {
    return template.call(this);
  }
}
