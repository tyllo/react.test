import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';
import replaceDocumentTitle from 'mixins/replace-document-title';

import { connect as Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBanks } from 'store/actions/banks';
import * as TransactionActions from 'store/actions/transactions';

import { Link } from 'react-router';
import ViewTransactions from 'components/view-transactions';
import template from './template.jade';
import style from './style.scss';

const mapStateToProps = state => ({
  banks: state.banks,
  transactions: state.transactions.list,
});

const mapDispatchToProps = dispatch => ({
  getBanks: bindActionCreators(getBanks, dispatch),
  actions: bindActionCreators(TransactionActions, dispatch),
});

@Connect(mapStateToProps, mapDispatchToProps)
@ReactMixin.decorate(replaceDocumentTitle)
@CSSModules(style)
export default class Overview extends React.Component {
  documentTitle = 'Overview';

  static defaultProps = {
    banks: [],
    transactions: [],
  };

  static propTypes = {
    banks: React.PropTypes.array.isRequired,
    transactions: React.PropTypes.array.isRequired,
    getBanks: React.PropTypes.func.isRequired,
    actions: React.PropTypes.object.isRequired,
  };

  render() {
    return template.call(this, {
      ViewTransactions,
      Link,
    });
  }
}
