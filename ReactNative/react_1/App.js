/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false, // 값을 초기화
    num: 1
  }

// STATE
// 컴포넌트에서 'rendering'되는 데이터를 담고 유지/관리하는 객체
// state 값에 따라 화면에 나타나는 값이 달라진다
// '클래스' 컴포넌트 내에서 활용 가능(const 등으로 함수를 선언했다면 불가능)
// 렌더함수 바깥에서 정의됨

// SetState : state update
// state는 직접 수정하면 안 된다! 화면을 다시 렌더링하지 않아 변경 값이 화면에 반영되지 않는다.
// 꼭 SetState을 이용해 state를 바꿔줘야 화면에 변경된다 

// state를 업데이트할 때는 현재 값을 저장하고 넘겨주자. 절대 쉽게 변경되면 안 된다.

  inputText = () => (
    this.state.sampleBoolean ?
      <Text>True</Text>
    :
      <Text>False</Text>
  )

  changeState = () => {
    if (!this.state.sampleBoolean)  {
      this.setState({
        sampleText: 'Text Changed',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'Hello~',
        sampleBoolean: false
      })
    }

  }

  onAdd = () => {
    this.setState(prevState => {
      // num: num + 1 // ERROR! state를 바로 바꿀 수 없다
      // num: 100 // OK --> prevState라는 개념을 써서 이런식으로 표현하자
      return {
        num: prevState.num + 1
      }
    }
    )
  }

  
  render() {
    return (
      <View style={styles.background}>
        <Text onPress = {this.changeState}>
          {this.state.sampleText} 
          {/*this는 JS 문법으로, 상위 scope를 가리킨다. */}
        </Text>
        <Text onPress = {this.onAdd}>
          {this.state.num}
        </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  background: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App;