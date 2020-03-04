const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist();
    });

    it('should render one todo component for each todo item',()=>{
        const todos = [{
            id:1,
            text: 'do something'
        },{
            id:2,
            text: 'do something2'
        }];

        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('should render message if todo list if empty',()=>{
        const todos = [];

        const todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        const $el = $(ReactDOM.findDOMNode(todoList));
        expect($el.find(".container__message").length).toBe(0);
    });
});