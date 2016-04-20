import React from 'react';
import ReactMixin from 'react-mixin';
import CSSModules from 'react-css-modules';

import { Connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from 'store/actions/user';

import SignIn from 'components/auth/sign-in';
import SignUp from 'components/auth/sign-up';

import replaceDocumentTitle from 'mixins/replace-document-title';
import style from './style.scss';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(UserActions, dispatch),
});

@CSSModules(style)
@ReactMixin.decorate(replaceDocumentTitle)
@Connect(mapStateToProps, mapDispatchToProps)
export default class AuthPage extends React.Component {
  documentTitle = 'Authorize';

  render() {
    var Page = ('sign-up' === this.props.params.name)
      ? (<SignUp {...this.props.user} actions={this.props.userActions} />)
      : (<SignIn {...this.props.user} actions={this.props.userActions} />);

    return (
      <div>
        <div styleName='helper' />
        {Page}
      </div>
    );
  }
}
