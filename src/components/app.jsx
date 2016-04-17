import React from 'react';
import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

class App extends React.Component {
  constructor() {
    super();

    // this.handleUserInput = this.handleUserInput.bind(this);

    this.state = {
    };
  }

  render() {
    return <SignUp />;
  }
}

export default App;
