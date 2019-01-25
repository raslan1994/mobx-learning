import { decorate, observable } from 'mobx';

class Todo{
    id = Math.random();
    title = '';
    finished = '';
}
decorate(Todo,{
    title: observable,
    finished: observable
});