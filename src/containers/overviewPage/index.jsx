import React from 'react';
import ReactMixin from 'react-mixin';
import replaceDocumentTitle from 'mixins/replace-document-title';

import { connect as Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBanks } from 'store/actions/banks';
import * as TransactionActions from 'store/actions/transactions';

import ViewTransactions from 'components/view-transactions';
import template from './template.jade';

const mapStateToProps = state => ({
  banks: state.banks,
  transactions: state.transactions,
});

const mapDispatchToProps = dispatch => ({
  getBanks: bindActionCreators(getBanks, dispatch),
  actions: bindActionCreators(TransactionActions, dispatch),
});

@ReactMixin.decorate(replaceDocumentTitle)
@Connect(mapStateToProps, mapDispatchToProps)
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

  constructor(props) {
    super(props);

    if (!this.props.banks.length) {
      this.props.getBanks();
    }

    if (!this.props.transactions.length) {
      this.props.actions.getTransactions();
    }
  }

  render() {
    return template.call(this, {
      ViewTransactions,
    });
  }
}
