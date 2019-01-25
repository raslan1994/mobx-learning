import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';
import { observable } from 'mobx';
import { observer, } from 'mobx-react';

class TodoListWithMST extends Component{
    state = {
        newTodoTitle: 'New todo'
    }
    render(){
        return[
            <View
                key={1}
                style={{
                color: 'blue',
                borderColor: 'red',
                borderWidth: 5,
                flex:1
                }}>
                {this.props.store.todos.map(todo=>{
                    return(
                        <View key={todo.id}>
                            <Button title={todo.done?'Undone':'Done'}
                                onPress={()=>{
                                    todo.toggleState()
                                }}/>
                            <TextInput value={todo.title}/>
                        </View>);
                })}
            </View>,
            <View key={2}
                style={{
                    color: 'blue',
                    borderColor: 'red',
                    borderWidth: 5,
                    }}>
                <TextInput 
                    value={this.state.newTodoTitle}
                    onChangeText={text=>{this.setState({newTodoTitle:text})}}/>
                <Button 
                    title="Add New todo"
                    onPress={()=>{
                        this.props.store.createTodo(this.state.newTodoTitle);
                    }}/>
            </View>
            ]
    }
}
export default observer(TodoListWithMST);