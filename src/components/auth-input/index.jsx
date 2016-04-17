import React from 'react';
import CSSModules from 'react-css-modules';

import template from './template.jade'
import style from './style.scss';

@CSSModules(style)
export default class AuthInput extends React.Component {
  static defaultProps = {
    text: '',
    iconClassName: '',
    type: 'text',
    value: '',
    onChange: () => {},
  };

  static propTypes = {
    text: React.PropTypes.string,
    iconClassName: React.PropTypes.string,
    type: React.PropTypes.string,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onClean = this.onClean.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      value: this.props.value,
    };
  }

  onClean(e) {
    var value = '';
    this.setState({ value });
    this.props.onChange(e);
  }

  onChange(e) {
    var value = e.target.value;
    this.setState({ value });
    this.props.onChange(e);
  }

  render() {
    return template.call(this);
  }

  componentDidUpdate() {
    this.refs.input.focus();
  }
}
