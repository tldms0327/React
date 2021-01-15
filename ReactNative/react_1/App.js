/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Header from './src/header'

//view: 다른 컴포넌트들을 감싸주는 역할로, 화면에 출력되려면 view 안에 입력해주기
//화면을 채우는 컨테이너 역할
//margin: view와 다른 컴포넌트와의 간격을 띄울 때, padding: 뷰 '안'의 컴포넌트와의 관격
//정수만 입력!!! float 인식 XX
//alignitems: 수평정렬, justifycontent: 수직정렬


//STYLE
//view에 스타일을 주는 방법
//1. inline 스타일링: 태그 내부에 직접 입력
//2. 밑에 따로 빼서 설정하기(StyleSheet)
class App extends Component {

  state = {
    appName: 'My First App'
  }
  render() {
    return (
      <View>
        {/* 1. 스타일 직접 입력 */}
        <View style={{
          backgroundColor: 'yellow',
          height: '30%',
          marginTop: 50,
          alignItems: 'center',
          justifyContent:'center',
        }}>
          <Text style={styles.Text}>안녕안녕</Text>
        </View>
        {/* 2. 외부 지정 스타일 */}
        <View style={styles.mainView}>
          <Text>이건어때</Text>
          <View style={styles.subView}>
            <Text>중첩스타일</Text>
          </View>
          <View style={styles.anotherView}>
            <Text>중첩스타일2</Text>
          </View>
        </View>

        {/* View가 터치에 반응하도록 만들어보자 */}
        {/* p.s.text에도 터치 이벤트를 넣을 수 있다 */}
        <View style={styles.headerView}>
          <Header name={this.state.appName}/>
        </View>

      </View>
    )
  }
 
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'pink',
    height: '30%',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 30,
    paddingTop: 20,
  },
  subView: {
    flex: 2,
    backgroundColor: 'beige',
    height: '20%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent:'center',
    width: '30%'
  },
  anotherView: {
    flex:3,
    height: '30%',
    backgroundColor: 'beige',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent:'center',
    width: '60%',
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    padding: 20
  },
  headerView: {
    backgroundColor: 'skyblue',
    marginTop: 50,
    alignItems: 'center',
    justifyContent:'center',
  }
})




export default App;