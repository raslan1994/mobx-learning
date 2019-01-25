import { types } from 'mobx-state-tree';

export const Todo = types.model({
    id: types.identifierNumber,
    title: types.string,
    done: types.boolean
}).actions(self=>({
    toggleState(){
        self.done = !self.done;
    }
}));

const TodoStore = types.model({
    todos: types.array(Todo),
    selectedTodo: types.reference(Todo),
    newTodo: types.maybe(Todo)
})
.views(self => ({
    get completedTodos(){
        return self.todos.filter(t => t.done);
    }
})).actions(self=>({
    createTodo(){
        self.todos.push({
            id: Math.random(),
            title: self.newTodo.title,
            done: false
        });
    }
}));

export default TodoStore;