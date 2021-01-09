import React, { Component } from 'react';
import Counter from './Counter';

class MyName extends Component{
  //default value 설정법 1(최신)
  static defaultProps ={
    name: 'Default'
  }

  render() {
    return (
      <div>
        Hi! My name is <b>{this.props.name}</b>!!
      </div>
    )
  }
}
//default value 설정법 2
MyName.defaultprops = {
  name: 'Default'
};

//함수형 컴포넌트
const MyName2 = ({name}) => {
  return <div> Hi! Myname2 is {name}~</div>
}

export default MyName;
