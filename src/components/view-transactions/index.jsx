import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import BankName from './bank-name';

import style from './style.scss';
import template from './template.jade';

@CSSModules(style)
export default class ViewTransactions extends React.Component {
  static defaultProps = {
    title: '',
    banks: [],
    transactions: [],
  };

  static propTypes = {
    title: React.PropTypes.string,
    banks: React.PropTypes.array.isRequired,
    transactions: React.PropTypes.array.isRequired,
    deleteTransaction: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
  }

  delete(transaction, e) {
    e.preventDefault();
    this.props.deleteTransaction(transaction);
  }

  render() {
    return template.call(this, { BankName });
  }
}
