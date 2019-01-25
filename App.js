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
import TodoListWithMST from './src/components/TodoListWithMST';
import TodoList from './src/TodoList';
import TodoListModel,{ Todo } from './src/TodoListModel';

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
    // let store = new TodoList();
    let model = TodoListModel.create({
      todos: [
        {
          id:1,
          title: 'Test todo note',
          done: false
        },
        {
          id:2,
          title: 'Test todo note 2',
          done: true
        }
      ],
      selectedTodo: 0,
      newTodo:{
        id:9999,
        title: 'New todo',
        done: false
      }
    });
    console.log('MODEL IS ',model);
    return [
      // <FirstComponent key={1} store={secondCounterState}/>,
      // <TodoListView key={2} toDoList={store}/>,
      <TodoListWithMST key={3} store={model}/>
    ];
    }
}