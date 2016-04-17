import React from 'react';

import Navigation from 'components/navigation';

class App extends React.Component {
  static state = {
    auth: false,
  };

  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    );
  }
}

export default App;
