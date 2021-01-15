import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading'
import Weather from './Weather';
import * as Location from "expo-location";
import axios from "axios";

const API_key = "05b42e753150dfd47707b0ab43139c5f";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data: {main: {temp}, weather} 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_key}&units=metric`
    );
    
    this.setState({ 
      isLoading: false, condition: weather[0].main, temp
    })
    console.log(this.state)

  };

  getLocation = async() => {
    try{
      //위치 접근 권한 받아오기
      await Location.requestPermissionsAsync(); // 이 값을 변수에 넣고 console에 찍어보면 내용을 알 수 있다
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync(); // 필요한 정보만 가져오자
      console.log(latitude, longitude);  //위 정보를 api로 던져서 날씨를 받아올거야

      this.getWeather(latitude, longitude);

  } catch(error) {
    //try 블럭에서 에러가 났을 때는 경고하기
    Alert.alert("something going wrong...", "ㅠ.ㅠ")
  }
  };

  componentDidMount() {
    this.getLocation()
  };

  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>  
  }

}


//view: div/ text: span
//view, text의 스타일을 각각 지정해야 함(부모의 스타일을 그대로 받아가지 않는 게 네이티브의 특징)

//RN에서 flexDirection: column (웹에서는 row - 옆으로 붙음)
//    flex: 1, //모든 공간 사용 가능

//flex로 레이아웃 하는 것이 좋다! 비율로서 화면을 차지하는 부분을 정의하기 때문에, 크기가 다른 여러 화면에서 똑같이 보일 수 있게 한다