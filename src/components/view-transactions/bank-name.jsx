import React from 'react';

export default class BankName extends React.Component {
  static defaultProps = {
    bankId: -1,
    banks: [],
  };

  static propTypes = {
    bankId: React.PropTypes.number.isRequired,
    banks: React.PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.getBankName = this.getBankName.bind(this);
  }

  getBankName() {
    return this.props.banks.find(({ id }) => {
      return id === this.props.bankId;
    });
  }

  render() {
    var bank = this.getBankName();
    if (!bank || !bank.link) {
      return (<span>Loading bank name...</span>);
    }

    return (<a href={bank.link}>{bank.name}</a>);
  }
}
