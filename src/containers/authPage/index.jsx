import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';
import { hashHistory } from 'react-router';

import { connect as Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/actions/user';

import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';
import Logout from 'components/auth/logout';

import replaceDocumentTitle from 'mixins/replace-document-title';
import style from './style.scss';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch),
});

@CSSModules(style)
@Connect(mapStateToProps, mapDispatchToProps)
@ReactMixin.decorate(replaceDocumentTitle)
export default class AuthPage extends React.Component {
  documentTitle = 'Authorize';

  static checkLogin(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login !== 'admin') {
      replace('/')
    }
  }

  getPage() {
    switch(this.props.params.name) {
      case ('sign-up'):
         return (<SignUp {...this.props.user} actions={this.props.userActions} />);

      case ('logout'):
        return (<Logout logout={this.props.userActions.logout} />);

      default:
        return (<SignIn {...this.props.user} actions={this.props.userActions} />);
    }
  }

  render() {
    return (
      <div>
        <div className={style.helper} />
        {::this.getPage()}
      </div>
    );
  }
}
