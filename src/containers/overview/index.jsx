import React from 'react';
import ReactMixin from 'react-mixin';
import replaceDocumentTitle from 'mixins/replace-document-title';
import fetchBanks from 'api/fetch-banks';

import ViewTransactions from 'components/view-transactions';

@ReactMixin.decorate(replaceDocumentTitle)
export default class Overview extends React.Component {
  documentTitle = 'Overview';

  state = { banks: [] };

  constructor(props) {
    super(props);

    fetchBanks().then(banks => {
      this.setState({ banks });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (<div>Overview container</div>);
  }
}
