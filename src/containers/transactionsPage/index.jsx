import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';
import replaceDocumentTitle from 'mixins/replace-document-title';

import { connect as Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBanks } from 'store/actions/banks';
import * as TransactionActions from 'store/actions/transactions';

import AddTransaction from 'components/add-transaction';
import ViewTransactions from 'components/view-transactions';

import template from './template.jade';
import style from './style.scss';

const mapStateToProps = ({ banks }) => ({ banks });
const mapDispatchToProps = dispatch => ({
  getBanks: bindActionCreators(getBanks, dispatch),
  actions: bindActionCreators(TransactionActions, dispatch),
});

@Connect(mapStateToProps, mapDispatchToProps)
@ReactMixin.decorate(replaceDocumentTitle)
@CSSModules(style)
export default class Transactions extends React.Component {
  documentTitle = 'Transactions';

  static defaultProps = {
    banks: [],
  };

  static propTypes = {
    banks: React.PropTypes.array.isRequired,
    getBanks: React.PropTypes.func.isRequired,
    actions: React.PropTypes.object.isRequired,
  };

  state = {
    newTransactions: [],
  };

  constructor(props) {
    super(props);

    this.addTransaction = this.addTransaction.bind(this);
    this.deleteTransaction = this.deleteTransaction.bind(this);
  }

  addTransaction(transaction) {
    this.props.actions.addTransaction(transaction);

    var id = !this.state.newTransactions.length
      ? 0 : (Math.max.apply(Math, this.state.newTransactions.map(item => item.id)) + 1);

    transaction.id = id;
    var newTransactions = this.state.newTransactions.slice();
    newTransactions.push(transaction);
    this.setState({ newTransactions });
  }

  deleteTransaction(transaction) {
    this.props.actions.deleteTransaction(transaction);

    var newTransactions = this.state.newTransactions.filter(item => {
      return item.id !== transaction.id;
    }) || [];

    this.setState({ newTransactions });
  }

  render() {
    return template.call(this, {
      AddTransaction,
      ViewTransactions,
    });
  }
}
