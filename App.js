/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default class App extends Component{
  render() {
    let count = 1;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>First Mob-x</Text>
        <View style={styles.instructions}>
          <Text>Count: {count}</Text>
          <Button title="Increase"/>
          <Button title="Decrease"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
