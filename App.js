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
import FirstComponent from './src/components/FirstComponent';

export default class App extends Component{
  state = {
    count: 2
  }
  render() {
    return (<FirstComponent/>);
  }
}