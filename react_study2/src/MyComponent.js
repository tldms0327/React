import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 값이 10이 되면 렌더링을 막아주는 함수
    if (nextProps.value > 10) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('value 값이 달라졌당')
    }
  }

  render() {
    return (
      <div>
        {/*this.props.missing.something */}
        <p>props: {this.props.value}</p>
        <p>state: {this.state.value}</p>
      </div>
    );
  }
}
export default MyComponent;