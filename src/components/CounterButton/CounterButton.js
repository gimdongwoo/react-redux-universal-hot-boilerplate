import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'multireducer';
import { increment } from 'redux/modules/counter';

@connect(
  (state, { as }) => ({ count: state.counterCollection[as].data }),
  (dispatch, { as }) => bindActionCreators({ increment }, dispatch, as)
)
export default class CounterButton extends Component {
  static propTypes = {
    count: PropTypes.number,
    increment: PropTypes.func.isRequired,
    className: PropTypes.string
  }

  props = {
    className: ''
  }

  render() {
    const { count, increment } = this.props; // eslint-disable-line no-shadow
    let { className } = this.props;
    className += ' btn btn-default';
    return (
      <button className={className} onClick={increment}>
        You have clicked me {count} time{count === 1 ? '' : 's'}.
      </button>
    );
  }
}
