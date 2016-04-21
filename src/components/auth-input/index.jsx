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
    tabindex: React.PropTypes.number,
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
    e.preventDefault();
    var value = '';
    this.setState({ value });
    this.props.onChange({ value });
  }

  onChange(e) {
    var value = e.target.value;
    this.setState({ value });
    this.props.onChange({ value });
  }

  render() {
    return template.call(this);
  }

  componentDidUpdate() {
    this.refs.input.focus();
    var cache = this.refs.input;
    this.refs.input = '';
    this.refs.input = cache;
  }
}
