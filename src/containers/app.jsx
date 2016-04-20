import React from 'react';

import Navigation from 'components/navigation';
import style from 'styles/main.scss';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}
