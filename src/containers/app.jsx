import React from 'react';
import { hashHistory } from 'react-router';
import { connect as Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBanks } from 'store/actions/banks';
import * as TransactionActions from 'store/actions/transactions';

import Navigation from 'components/navigation';
import 'styles/main.scss';

const mapStateToProps = (state) => ({
  user: state.user,
  banks: state.banks,
  hash: state.user.hash,
  username: state.user.username,
  needGetTransactions: !state.transactions.fetch_at,
  transactions: state.transactions.list,
  summa: state.transactions.list
    ? state.transactions.list.reduce((amount, cur) => {
      return amount + cur.amount;
    }, 0) : 0,
});

const mapDispatchToProps = dispatch => ({
  getBanks: bindActionCreators(getBanks, dispatch),
  actions: bindActionCreators(TransactionActions, dispatch),
});

@Connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.user.isAutharicated) {
      this._loadData.call(this);
    }
  }

  _loadData() {
    var { banks, needGetTransactions } = this.props;

    if (!banks.length) {
      this.props.getBanks();
    }

    if (needGetTransactions) {
      this.props.actions.getTransactions();
    }
  }

  componentWillMount() {
    if (!this.props.user.isAutharicated) {
      hashHistory.push('/auth');
    }
  }

  render() {
    return (
      <div>
        <Navigation {...this.props}/>
        {this.props.children}
      </div>
    );
  }
}
