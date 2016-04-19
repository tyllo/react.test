import React from 'react';
import ReactMixin from 'react-mixin';
import replaceDocumentTitle from 'mixins/replace-document-title';
import fetchBanks from 'services/fetch-banks';

import ViewTransactions from 'components/view-transactions';

import template from './template.jade';

@ReactMixin.decorate(replaceDocumentTitle)
export default class Overview extends React.Component {
  documentTitle = 'Overview';

  state = {
    banks: [],
    transactions: [],
  };

  constructor(props) {
    super(props);

    fetchBanks().then(banks => {
      this.setState({ banks });
    }).catch(error => {
      console.log(error);
    });

    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  deleteTransaction(transactin) {
    var transactions = this.state.transactions.filter(el => {
      return el.id !== transactin.id;
    });

    this.setState({ transactions });
  }

  render() {
    return template.call(this, {
      ViewTransactions,
    });
  }
}
