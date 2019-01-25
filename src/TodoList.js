import { observable, computed, action, decorate } from 'mobx';
class TodoList {
    todos = [
        {
            id:1,
            title: 'Hello there :)',
            finished: false
        },
        {
            id:2,
            title: 'Woah 2nd todo is here :)',
            finished: false
        }
    ];
    newTodo = {
        id: Math.random(),
        title: 'New todo here :)',
        finished: false
    };
    get unfinishedTodoCount(){
        return this.todos.filter(todo => !todo.finished).length;
    }
    create(){
        let t = this.newTodo;
        this.todos.push({
            id: Math.random(),
            title:t.title,
            finished: false
        });
    }
}

export default decorate(TodoList,{
    todos: observable,
    newTodo: observable,
    unfinishedTodoCount: computed,
    create: action
});