import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { observer } from 'mobx-react';

class TodoListView extends Component{
    render(){
        return[
            <View key={1}
                style={{
                    color: 'blue',
                    borderColor: 'red',
                    borderWidth: 5,
                    flex:1
                    }}>
                {this.props.toDoList.todos.map(todo => <TodoView todo={todo} key={todo.id} />)}
                <Text>Tasks Left: {this.props.toDoList.unfinishedTodoCount}</Text>
            </View>,
            <View key={2}
                style={{
                    color: 'blue',
                    borderColor: 'red',
                    borderWidth: 5,
                    }}>
                <TextInput 
                    value={this.props.toDoList.newTodo.title}
                    onChangeText={text=>{this.props.toDoList.newTodo.title = text}}/>
                <Button 
                    title="Add New todo"
                    onPress={()=>{
                        this.props.toDoList.create();
                    }}/>
            </View>
        ]
    }
};

const TodoView = observer(({ todo }) => 
    <View>
        <Button title={todo.finished?'Undone':'Done'}
            onPress={()=>{
                todo.finished = !todo.finished;
            }}/>
        <TextInput value={todo.title}/>
    </View>
);

export default observer(TodoListView);