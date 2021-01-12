/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PropsChild from '../propsChild';

//공식 문서를 참조하여 컴포넌트 상세 정보를 확인하자.
//아주 많은 props 확인 가능

const Header = (props) => (
    <TouchableOpacity 
        style={StyleSheet.header}
        //onPress={()=>alert('oh yeah')}
        onLongPress={()=>alert('oh yeah')}
        //onPressIn, onPressOut 등등...
    >
        <View >
            <Text>{props.name}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        alignItems: 'center',
        padding: 5,
        width: '100%'
    }
})



export default Header;