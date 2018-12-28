import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>
          Clock:<span>{this.props.ctr}</span>
        </h1>
        <button onClick={this.props.onCounterUp}>up</button>
        <button onClick={this.props.onCounterDn}>down</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter
  };
};
const mapToDispatchToProps = dispatch => {
  return {
    onCounterUp: () => dispatch({ type: 'ADD' }),
    onCounterDn: () => dispatch({ type: 'SUBTRACT' })
  };
};
export default connect(
  mapStateToProps,
  mapToDispatchToProps
)(Counter);
