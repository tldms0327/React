/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, Text} from 'react-native';

//PROPS 
//읽기 전용 (부모 자식 관계가 있어야만 유의미하다), 부모의 정보를 자식에게 전달
// 부모-> props -> 자식 컴포넌트 내에서 변하기 않고 그대로 사용됨
// 인터페이스 느낌..인가

const PropsChild = (props) => {
    return(
        <View>
            <Text onPress={props.cState}>
                {props.sText}
            </Text>
        </View>
    )
}


export default PropsChild;