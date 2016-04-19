import React from 'react';
import CSSModules from 'react-css-modules';

import style from './style.scss';
import template from './template.jade';

@CSSModules(style)
export default class AddTransaction extends React.Component {
  static defaultProps = {
    banks: [],
    transactions: [],
  };

  static propTypes = {
    banks: React.PropTypes.array.isRequired,
    transactions: React.PropTypes.array.isRequired,
    saveTransaction: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.saveTransaction = this.saveTransaction.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
  }

  saveTransaction(e) {
    e.preventDefault();
    var select = this.refs.select;
    var amount = this.refs.amount.value;
    var transactions = this.props.transactions.slice();

    if (!select.selectedIndex || !amount.length) {
      return;
    }

    var maxId = transactions.length
      ? Math.max.apply(Math, transactions.map(item => item.id))
      : 0;

    this.props.saveTransaction({
      id: (maxId + 1),
      amount: +amount,
      bankId: +select.options[select.selectedIndex].value,
    });

    this.setState({ transactions });
    this.refs.form.reset();
  }

  validateAmount(e) {
    // TODO: need remove repeat dots
    this.refs.amount.value = e.target.value.replace(/[^\d\.]/g, '');
  }

  render() {
   return template.call(this);
  }
}
