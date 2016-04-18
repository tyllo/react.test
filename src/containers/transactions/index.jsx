import React from 'react';
import ReactMixin from 'react-mixin';
import replaceDocumentTitle from 'mixins/replace-document-title';
import fetchBanks from 'api/fetch-banks';

import AddTransaction from 'components/add-transaction';
import ViewTransactions from 'components/view-transactions';

import template from './template.jade';

@ReactMixin.decorate(replaceDocumentTitle)
export default class Transactions extends React.Component {
  documentTitle = 'Transactions';

  state = {
    banks: [],
    newTransactions: [],
  };

  constructor(props) {
    super(props);

    fetchBanks().then(banks => {
      this.setState({ banks });
    }).catch(error => {
      console.log(error);
    });

    this.addTransaction = this.addTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  addTransaction(transactin) {
    var newTransactions = this.state.newTransactions.slice();
    newTransactions.push(transactin)
    this.setState({ newTransactions });
  }

  deleteTransaction(transactin) {
    var newTransactions = this.state.newTransactions.filter(el => {
      return el.id !== transactin.id;
    });

    this.setState({ newTransactions });
  }

  render() {
    return template.call(this, { AddTransaction, ViewTransactions });
  }
}
