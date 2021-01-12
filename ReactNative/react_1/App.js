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
  render() {
    return (
      <View style={styles.background}>
        <Text> Hello </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;