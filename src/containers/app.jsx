import React from 'react';
import { hashHistory } from 'react-router';
import { connect as Connect } from 'react-redux';

import Navigation from 'components/navigation';
import style from 'styles/main.scss';

const mapStateToProps = ({ user }) => ({ user });

@Connect(mapStateToProps)
export default class App extends React.Component {
  componentWillMount() {
    if (!this.props.user.isAutharicated) {
      hashHistory.push('/auth');
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
