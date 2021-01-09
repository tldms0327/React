import React, { Component, Fragment } from 'react';
import './App.css';
import Counter from './Counter';

import MyName from './MyName';
import MyComponent from './MyComponent'

class App extends Component {
  state = {
    counter: 1,
  }
  constructor(props) { // 컴포넌트 생성자 함수, 컴포넌트가 새로 만들어질 때마다 호출됨
    super(props); 
    console.log('constructor');
  }
  componentDidMount(){
    // 외부 라이브러리 연동: D3, masonry, etc
    // 컴포넌트에서 필요한 데이터 요청
    // DOM에 관련된 작업: 스크롤 설정, 크기 읽어오기 등
    console.log('componentDidMount');
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    // practice
    const name = 'Sieun Lee'
    return (
      <Fragment>
        <div className="App">
          React {name}
          { /* 주석은 이렇게 괄호호 감싸줘야 한다 */}
        </div>
        <div className="App"
        // 여기에도 주석을 쓸 수 있다
        >
          {
            name === 'Sieun Lee' && <div>공부하자 </div>
          }
        </div>
        <div>
          <MyComponent value ={this.state.counter} />
          <button onClick={this.handleClick}>Click Me</button>
          {/*버튼을 누르면 state가 바뀌고, 이를 props로 넘겨주게 된다 */}
        </div>
        <MyName name='React' />
        <MyName />
        <Counter/>
        <div>
          <h1>LifeCycle API practice</h1>
        </div>
      </Fragment> 
    );
  }
}

export default App;
