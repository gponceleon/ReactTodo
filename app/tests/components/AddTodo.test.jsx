const React = require('react');
const ReactDOM=require('react-dom');
const expect=require('expect');
const $ = require('jQuery');
const TestUtils=require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo',()=>{
    it('should exist',()=>{
        expect(AddTodo).toExist();
    });

    it('should call handleAddTodo if valid text entered',()=>{
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value='Clean bathroom';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Clean bathroom');
    });

    it('should  not call handleAddTodo if invalid text entered',()=>{
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy}/>);
        const $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.text.value='';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});