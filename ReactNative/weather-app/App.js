import React from 'react';
import Loading from './Loading'

export default function App() {
  return (
      <Loading/>
  );
}


//view: div/ text: span
//view, text의 스타일을 각각 지정해야 함(부모의 스타일을 그대로 받아가지 않는 게 네이티브의 특징)

//RN에서 flexDirection: column (웹에서는 row - 옆으로 붙음)
//    flex: 1, //모든 공간 사용 가능

//flex로 레이아웃 하는 것이 좋다! 비율로서 화면을 차지하는 부분을 정의하기 때문에, 크기가 다른 여러 화면에서 똑같이 보일 수 있게 한다