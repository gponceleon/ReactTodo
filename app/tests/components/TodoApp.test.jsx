const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist();
    });

    it('Should add new todo to todos',()=>{
        let text = 'eat!'
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(text);

        expect(todoApp.state.todos.length).toBe(1);
        expect(todoApp.state.todos[0].text).toBe(text);
        expect(todoApp.state.todos[0].createdAt).toNotBe(undefined);
        expect(todoApp.state.todos[0].completedAt).toBe(undefined);
    });

    it('should toggle completed value when handleToggle called',()=>{
        const todo = {
            text: 'Feed the dog',
            completed: false,
            id: 1
        } 

        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({
            todos: [todo]
        });

        expect(todoApp.state.todos[0].completed).toBe(false);
        todoApp.handleToggle(1);
        expect(todoApp.state.todos[0].completed).toBe(true);
        expect(todoApp.state.todos[0].completedAt).toNotBe(undefined);
    });
});