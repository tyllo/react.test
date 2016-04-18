import React from 'react';
import Navigation from 'components/navigation';

const AUTHARICATE = true;

export default class App extends React.Component {
  static state = {
    auth: false,
  };

  static checkLogin(nextState, replace) {
    if (!AUTHARICATE) {
      replace('auth');
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
