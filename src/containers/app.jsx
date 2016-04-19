import React from 'react';

import Navigation from 'components/navigation';
import style from 'styles/main.scss';

const AUTHARICATE = false;

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
