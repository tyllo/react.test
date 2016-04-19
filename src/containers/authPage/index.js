import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/actions/user';

import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

import replaceDocumentTitle from 'mixins/replace-document-title';
import style from './style.scss';

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
class AuthPage extends React.Component {
  documentTitle = 'Authorize';

  static checkLogin(nextState, replace) {
    // if (AUTHARICATE) {
    //   replace('/');
    // }
  }

  static logout(nextState, replace) {
    replace('auth');
  }

  render() {
    return (
      <div>
        <div styleName='helper' />
        {('sign-up' === this.props.params.name) ? <SignUp /> : <SignIn />}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => user;

export default connect(mapStateToProps)(AuthPage);
