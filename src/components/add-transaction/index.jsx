import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import ViewTransaction from 'components/view-transaction';

import style from './style.scss';
import template from './template.jade';
import replaceDocumentTitle from 'mixins/replace-document-title';

import fetchBanks from 'api/fetch-banks';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
export default class AddTransaction extends React.Component {
  documentTitle = 'Add transaction';

  state = {
    newTransactions: [
      {id: 0, amount: 300, bankId: 10 }
    ],
    banks: [],
  };

  constructor(props) {
    super(props);

    fetchBanks().then(banks => {
      this.setState({ banks });
    }).catch(error => {
      console.log(error);
    });

    this.addTransaction = this.addTransaction.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
  }

  addTransaction(e) {
    e.preventDefault();
    var select = this.refs.select;
    var newTransactions = this.state.newTransactions.slice();

    newTransactions.push({
      id: +this.state.newTransactions.length,
      amount: +this.refs.amount.value,
      bankId: +select.options[select.selectedIndex].value,
    })

    this.setState({ newTransactions });
  }


  validateAmount(e) {
    console.log('validateAmount', e.target.value)
  }

  render() {
   return template.call(this, { ViewTransaction });
  }
}
