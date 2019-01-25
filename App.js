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
import { observable } from 'mobx';
import FirstComponent from './src/components/FirstComponent';
import TodoListView from './src/components/TodoListView';
import TodoList from './src/TodoList';

const secondCounterState = observable({
  count:5
});
secondCounterState.increment = function(){
  this.count++;
}
secondCounterState.decrement = function(){
  this.count--;
}

export default class App extends Component{
  state = {
    count: 2
  }
  render() {
    let store = new TodoList();
    return [
      // <FirstComponent key={1} store={secondCounterState}/>,
      <TodoListView key={2} toDoList={store}/>];
    }
}