import React from 'react';
import CSSModules from 'react-css-modules';

import style from './style.scss';
import template from './template.jade';

@CSSModules(style)
export default class AddTransaction extends React.Component {
  static defaultProps = {
    banks: [],
  };

  static propTypes = {
    banks: React.PropTypes.array.isRequired,
    addTransaction: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.addTransaction = this.addTransaction.bind(this);
    this.validateAmount = this.validateAmount.bind(this);
  }

  addTransaction(e) {
    e.preventDefault();
    var select = this.refs.select;
    var amount = this.refs.amount.value;

    if (!select.selectedIndex || !amount.length) {
      return;
    }

    this.props.addTransaction({
      amount: +amount,
      bankId: +select.options[select.selectedIndex].value,
    });

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
